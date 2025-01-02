'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'

import UserLayout from '../../layout-user'

export default function ProductDetail() {
  const params = useParams()
  const { slug } = params
  const [product, setProduct] = useState(null)

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`/api/product?where[slug][equals]=${slug}`)
        if (!res.ok) {
          throw new Error('Network response was not ok')
        }
        const data = await res.json()
        setProduct(data.docs[0] || null)
      } catch (err) {
        console.log('Fetch error:', err)
      }
    }

    if (slug) {
      fetchProduct()
    }
  }, [slug])

  if (!product) return <p>product not found</p>

  return (
    <UserLayout>
      <div className="container mx-auto pt-12">
        <div className="grid grid-cols-12 text-white gap-12">
          <div className="col-span-5">
            <Image
              src={product.image}
              width={400}
              height={400}
              alt={`image-${product.name}`}
              className="w-full h-auto object-cover rounded-md"
            />
          </div>
          <div className="col-span-7">
            <h1 className="font-bold text-5xl mb-4">{product.name}</h1>
            <h1 className="font-semibold text-3xl mb-4">{`Rp ${product.price.toLocaleString('id-ID')}`}</h1>
            <div className="text-2xl mb-4">{product.desc}</div>
            <span className="text-2xl">Kategori : {product.category}</span>
          </div>
        </div>
      </div>
    </UserLayout>
  )
}
