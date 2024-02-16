"use client"
import Logo from "./Logo";
import Link from "next/link";
import { SunIcon, MoonIcon, GithubIcon, HeartIcon, ContactIcon } from "../Icons";
import siteMetadata from "@/src/utils/siteMetaData";
import { useThemeSwitch } from "../Hooks/useThemeSwitch";
import { useState } from "react";

const Header = () => {

  const [mode, setMode] = useThemeSwitch();
  const [click, setClick] = useState(true);

  const toggle = () => {
    setClick(!click)
  }

  return (
    <header className="w-full p-4 px-5 sm:px-10 flex items-center justify-between">
   
        <Logo />
        
        <button className="inline-block px-4 sm:hidden z-50" onClick={toggle} aria-label="Hamburger Menü">
          <div className="w-7 cursor-pointer transition-all ease duration-300">
            <div className="relative">
            <span className="absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200" 
            style={{
             transform: click ? "rotate(-45deg) translateY(0)" : "rotate(0deg) translateY(6px)"
            }}
            
            >&nbsp;</span>
            <span className="absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200"
            style={{
              opacity: click ? 0 : 1
             }}
            >&nbsp;</span>
            <span className="absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200"
            style={{
              transform: click ? "rotate(45deg) translateY(0)" : "rotate(0deg) translateY(-6px)"
             }}
            >&nbsp;</span>
            </div>

          </div>
        </button>
        
        
        <nav className="w-max py-2 px-3 border-2 border-solid border-dark rounded-full font-medium capitalize
        items-center flex sm:hidden
        fixed bg-light/80 backdrop-blur-sm z-50
        transition-all ease duration-1000
        right-1/2 translate-x-1/2
        "
        style={{
          bottom: click ? "1.5rem" : "-6rem"
         }}
        >
            <Link href="/gedanken" className="mr-2">Gedanken</Link>
            <Link href="/projekte" className="mx-2">Projekte</Link>
            <button className="mr-4 ml-3" onClick={() => setMode(mode === "light" ? "dark" : "light") }>
                <SunIcon/>
            </button>
            <a href="/kontakt" className="inline-block w-6 h-6 mr-2"><ContactIcon
            className="hover:scale-125 transition-all ease duration-200"/></a>
            <a href={siteMetadata.github} className="inline-block w-6 h-6 mr-1"><GithubIcon
            className="hover:scale-125 transition-all ease duration-200"/></a>
            <a href="/liebe" className="w-8 h-8 mt-2"><HeartIcon
            className="hover:scale-125 transition-all ease duration-200"/></a>
        </nav>


        <nav className="w-max py-2 px-8 border-2 border-solid border-dark rounded-full font-medium capitalize
        items-center hidden sm:flex
        fixed top-4 right-10 bg-light/80 backdrop-blur-sm z-50">
            <Link href="/gedanken" className="mr-2">Gedanken</Link>
            <Link href="/projekte" className="mx-2">Projekte</Link>
            <button className="mr-4 ml-3" onClick={() => setMode(mode === "light" ? "dark" : "light") }>
                <SunIcon/>
            </button>
            <a href="/kontakt" className="inline-block w-6 h-6 mr-2"><ContactIcon
            className="hover:scale-125 transition-all ease duration-200"/></a>
            <a href={siteMetadata.github} className="inline-block w-6 h-6 mr-1"><GithubIcon
            className="hover:scale-125 transition-all ease duration-200"/></a>
            <a href="/liebe" className="w-8 h-8 mt-2"><HeartIcon
            className="hover:scale-125 transition-all ease duration-200"/></a>
        </nav>
    </header>
  )
}

export default Header;