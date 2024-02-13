import Link from "next/link"
import { CoffeeIcon } from "@/src/components/Icons";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center text-dark dark:text-light">
        <div className="w-12 sm:w-16 rounded-full overflow-hidden border-2 border-solid
         border-dark dark:border-light mr-2 sm:mr-3">
          <CoffeeIcon className="py-2 px-2"/>
        </div>
        <span className="font-bold dark:font-semibold text-xl sm:text-2xl">lars.ooo</span>
    </Link>
  )
}

export default Logo