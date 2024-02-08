import Logo from "./Logo";
import Link from "next/link";
import { SunIcon, MoonIcon, GithubIcon, HeartIcon, ContactIcon } from "../Icons";

const Header = () => {
  return (
    <header className="w-full p-4 px-10">
        <Logo />
        <nav className="w-max py-2 px-8 border-2 border-solid border-dark rounded-full font-medium capitalize flex
        items-center
        fixed top-4 right-12 bg-light/80 backdrop-blur-sm z-50">
            <Link href="/gedanken" className="mr-2">Gedanken</Link>
            <Link href="/projekte" className="mx-2">Projekte</Link>
            <button className='mr-5 ml-3'>
                <SunIcon/>
            </button>
            <a href="/kontakt" className="inline-block w-6 h-6 mr-2"><ContactIcon
            className="hover:scale-125 transition-all ease duration-200"/></a>
            <a href="https://github.com/larsdotooo/larsdotooo.github.io" className="inline-block w-6 h-6 mr-1"><GithubIcon
            className="hover:scale-125 transition-all ease duration-200"/></a>
            <a href="/liebe" className="w-8 h-8 mt-2"><HeartIcon
            className="hover:scale-125 transition-all ease duration-200"/></a>
        </nav>
    </header>
  )
}

export default Header;