"use client";
import Link from "next/link"

const Custom404 = () => {
  return (
   <div className="h-screen flex flex-col justify-center items-center bg-slate-900 text-white text-center px-4">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-6">Oops! The stock you’re looking for doesn’t exist </p>

      <Link
        href="/"
        className="bg-blue-500 px-6 py-2 rounded-lg text-white hover:bg-blue-600 transition"
      >
        Back to Home
      </Link>
    </div>
  )
}

export default Custom404
