import Link from "next/link"
import Image from "next/image"
import profileImg from "@/public/coffee.png"
import { CoffeeIcon } from "../Icons";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center text-dark">
        <div className="w-16 rounded-full overflow-hidden border-2 border-solid border-dark mr-4">
          <CoffeeIcon className="py-2 px-2"/>
        </div>
        <span className="font-bold text-2xl">lars.ooo</span>
    </Link>
  )
}

export default Logo