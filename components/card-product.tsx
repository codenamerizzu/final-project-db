import Image from 'next/image'
import Link from 'next/link'

interface CardProductProps {
  name: string
  slug: string
  image: string
  price: number
  category: string
}

const CardProduct = ({ name, slug, image, price, category }: CardProductProps) => {
  return (
    <div className="flex flex-col bg-white text-black rounded-lg p-4 shadow-md">
      <div className="relative m-0 p-0">
        <Image
          src={image}
          width={400}
          height={400}
          alt={`gambar-${name}`}
          className="w-full h-64 z-0 object-cover rounded-md"
        />
        <span className="absolute top-2 right-2 z-10 bg-gray-800 text-white text-sm rounded-md px-2 py-1">
          {category}
        </span>
      </div>
      <div>
        <h1 className="text-2xl font-bold pt-4">{name}</h1>
        <h1 className="text-xl font-semibold mb-2">{`Rp ${price.toLocaleString('id-ID')}`}</h1>
        <Link href={`/product/${slug}`} passHref>
          <button className="w-full bg-gray-800 hover:opacity-70 text-white py-2 px-3 rounded-md mt-4">
            Go to page
          </button>
        </Link>
      </div>
    </div>
  )
}

export default CardProduct
