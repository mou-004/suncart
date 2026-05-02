import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <div className="bg-gradient-to-br from-orange-50 to-[#fff4e6] rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 hover:-translate-y-2 overflow-hidden border border-orange-100">

      {/* SMALL IMAGE */}
      <div className="relative w-full h-36 bg-white overflow-hidden rounded-b-2xl">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain p-3 hover:scale-105 duration-500"
        />
      </div>

      {/* CONTENT */}
      <div className="p-4">

        <h3 className="text-lg font-bold text-gray-800 line-clamp-1">
          {product.name}
        </h3>

        <p className="text-sm text-gray-600 mt-1">
          Brand: {product.brand}
        </p>

        <p className="text-sm text-yellow-500 mt-1">
          ⭐ {product.rating}
        </p>

        <p className="text-2xl font-bold text-orange-500 mt-2">
          ${product.price}
        </p>

        <Link
          href={`/products/${product.id}`}
          className="mt-4 block text-center bg-orange-500 hover:bg-orange-600 text-white py-2.5 rounded-full font-semibold text-sm transition"
        >
          View Details
        </Link>

      </div>
    </div>
  );
}