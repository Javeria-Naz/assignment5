// import Image from "next/image";

export default function Home() {
  return (
    <div>
      <nav className="flex gap-4 w-full mt-10 bg-white h-35 items-center">
        <div className="bg-purple-800 h-40 w-60"></div>
        <div className="bg-pink-700 h-40 w-60"></div>
        <div className="bg-green-700 h-40 w-60"></div>
      </nav>
      <nav className="flex mt-10 bg-white w-full h-95 items dowm gap-4">
        <div className="bg-orange-500 w-80 h-50"></div>
        <div className="bg-yellow-500 w-80 h-40"></div>
      </nav>
    </div>
  )
}