import Link from 'next/link'

export default function Navbar() {
  return (
    <>
      <nav className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-auto bg-slate-300 rounded-lg p-4">
        <ul className="flex flex-row gap-6 py-3">
          <li>
            <Link
              href="/"
              className="text-black hover:bg-green-800 hover:text-white font-semibold rounded-md py-4 px-8"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/product"
              className="text-black hover:bg-green-800 hover:text-white font-semibold rounded-md py-4 px-8"
            >
              Products
            </Link>
          </li>
        </ul>
      </nav>
    </>
  )
}
