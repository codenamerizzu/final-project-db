'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import UserLayout from '../layout-user'
import CardProduct from 'components/card-product'
import '../global.css'

export default function Product() {
  interface Product {
    id: number
    name: string
    slug: string
    image: string
    price: number
    category: string
  }

  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(`/api/product`)
        if (!res.ok) {
          throw new Error('Network response was not ok')
        }
        const data = await res.json()
        console.log(data)
        setProducts(data.docs || [])
      } catch (err) {
        console.log('Fetch error:', err)
      }
    }

    fetchProducts()
  }, [])

  if (!products) <p>Tidak ada data</p>

  return (
    <>
      <UserLayout>
        <div className="container mx-auto pt-12">
          <h1 className="text-white font-bold text-3xl pb-12">List semua produk</h1>
          <div className="grid grid-cols-12 gap-4">
            {products.map((product) => (
              <div className="col-span-2" key={product.id}>
                <CardProduct
                  name={product.name}
                  slug={product.slug}
                  image={product.image}
                  price={product.price}
                  category={product.category}
                />
              </div>
            ))}
          </div>
        </div>
      </UserLayout>
    </>
  )
}
