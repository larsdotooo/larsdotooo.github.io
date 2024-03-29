import { sortBlogs } from '@/src/utils';
import Link from 'next/link';
import React from 'react';
import BlogLayoutThree from '@/src/components/Blog/BlogLayoutThree';

const RecentPosts = ({blogs}) => {
    const sortedBlogs = sortBlogs(blogs);
  return (
    <section className='w-full mt-16 sm:mt-24 md:mt-32 px-5 sm:px-10 md:px-24 sxl:px-32 flex flex-col items-center justify-center'>
        <div className='flex w-full'>
        <h2 className='w-full font-bold text-3xl lg:text-4xl text-dark dark:text-light pr-8'>
            Worüber ich nachdenke...
        </h2>
        <Link href='/kategorien/alle' className='font-medium text-orange-500 dark:text-orange-400 underline underline-offset-2
        text-base md:text-lg'>
        Kategorien
        </Link>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xxl:grid-cols-4 gap-16 mt-16'>
            {
                sortedBlogs.slice(1, 13).map((blog, index) => {
                    return <article key={index} className='col-span-1 row-span-1 relative'>
                        <BlogLayoutThree blog={blog} />
                    </article>
                })
            }
        </div>
    </section>
  )
}

export default RecentPosts