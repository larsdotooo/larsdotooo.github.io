import Logo from "./Logo";
import Link from "next/link";
import { SunIcon, MoonIcon, GithubIcon, HeartIcon, ContactIcon } from "../Icons";

const Header = () => {
  return (
    <header className="w-full p-4 px-10">
        <Logo />
        <nav className="w-max py-3 px-8 border-2 border-solid border-dark rounded-full font-medium capitalize flex
        items-center
        fixed top-6 right-1/2 translate-x-1/2 bg-light/80 backdrop-blur-sm">
            <Link href="/" className="mr-2">Home</Link>
            <Link href="/about" className="mr-2">About</Link>
            <Link href="/contact" className="mr-2">Contact</Link>
            <button>
                <SunIcon />
            </button>
        </nav>
        <div className="flex justify-end fixed top-6 right-6">
            <div>
                <a href="https://example.com" className="inline-block w-8 h-8 mr-3"><ContactIcon
                className="hover:scale-125 transition-all ease duration-200"/></a>
                <a href="https://example.com" className="inline-block w-8 h-8 mr-2"><GithubIcon
                className="hover:scale-125 transition-all ease duration-200"/></a>
            </div>
            <a href="https://example.com" className="inline-block w-12 h-12"><HeartIcon
            className="hover:scale-125 transition-all ease duration-200"/></a>
        </div>
    </header>
  )
}

export default Header;