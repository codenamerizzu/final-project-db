'use client'
import UserLayout from './layout-user'
import React, { useEffect, useState } from 'react'

import CardProduct from 'components/card-product'
import './global.css'
import Link from 'next/link'

export default function Product() {
  const [newProducts, setNewProducts] = useState([])
  const [foodCategory, setFoodCategory] = useState([])
  const [drinkCategory, setDrinkCategory] = useState([])

  useEffect(() => {
    const fetchNewProducts = async () => {
      try {
        const res = await fetch(`/api/product?sort=-createdAt&limit=4`)
        if (!res.ok) {
          throw new Error('Network response was not ok')
        }
        const data = await res.json()
        console.log(data)
        setNewProducts(data.docs || [])
      } catch (err) {
        console.log('Fetch error:', err)
      }
    }

    fetchNewProducts()
  }, [])

  useEffect(() => {
    const fetchFoodCategory = async () => {
      try {
        const res = await fetch(`/api/product?sort=-createdAt&where[category][equals]=food&limit=4`)
        if (!res.ok) {
          throw new Error('Network response was not ok')
        }
        const data = await res.json()
        console.log(data)
        setFoodCategory(data.docs || [])
      } catch (err) {
        console.log('Fetch error:', err)
      }
    }

    fetchFoodCategory()
  }, [])

  return (
    <>
      <UserLayout>
        <div className="container w-full mx-auto py-24">
          <h1 className="font-extrabold text-6xl text-white text-center">
            Cari snack dan minuman favorit kamu disini
          </h1>
          <div className="text-center mt-6">
            <button className="bg-green-800 text-white text-2xl rounded-lg py-3 px-6">
              <Link href="/product">Lihat semua barang</Link>
            </button>
          </div>
        </div>

        <div className="container mx-auto pt-12">
          <h1 className="text-white font-bold text-2xl pb-8">Produk baru ditambahkan</h1>
          <div className="grid grid-cols-12 gap-4">
            {newProducts.map((product) => (
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

        <div className="container mx-auto pt-12">
          <h1 className="text-white font-bold text-2xl pb-8">Produk baru ditambahkan</h1>
          <div className="grid grid-cols-12 gap-4">
            {newProducts.map((product) => (
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

        <div className="container mx-auto pt-12">
          <h1 className="text-white font-bold text-2xl pb-8">Produk baru ditambahkan</h1>
          <div className="grid grid-cols-12 gap-4 pb-36">
            {newProducts.map((product) => (
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
