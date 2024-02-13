import React from 'react'
import { ContactIcon, GithubIcon, HeartIcon } from '../Icons';
import Link from "next/link";
import siteMetadata from '@/src/utils/siteMetaData';

const Footer = () => {

  return (
    <footer className="mt-16 mx-10 flex flex-col items-center text-dark dark:text-light">
        
        

        <div className="w-full relative font-medium text-sm lg:text-base border-2 border-solid rounded-full py-2 md:py-4 px-4 lg:px-8 flex
        items-center justify-between">
            <span className="w-full text-center">Der Inhalt auf dieser Seite ist lizenziert unter <a href="https://creativecommons.org/licenses/by-sa/4.0/" className="underline">
            CC BY-SA 4.0 Lizenz</a>
            . Also macht damit was ihr wollt!</span>
        </div>
        <div className="flex items-center my-5">
            <a href="/kontakt" className="inline-block w-6 h-6 mr-2"><ContactIcon
            className="hover:scale-125 transition-all ease duration-200 dark:fill-light"/></a>
            <a href={siteMetadata.github} className="inline-block w-6 h-6 mr-1"><GithubIcon
            className="hover:scale-125 transition-all ease duration-200 dark:fill-light"/></a>
            <a href="/liebe" className="w-8 h-8 mt-2"><HeartIcon
            className="hover:scale-125 transition-all ease duration-200 dark:fill-light"/></a>
            <Link href="/sitemap.xml" className="text-center ml-5 underline font-medium text-sm lg:text-base">
                sitemap.xml
            </Link>
        </div>

    </footer>
  )
}

export default Footer