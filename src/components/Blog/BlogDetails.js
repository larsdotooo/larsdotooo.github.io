import { format, parseISO } from 'date-fns'
import { slug } from 'github-slugger'
import Link from 'next/link'
import React from 'react'

const BlogDetails = ({blog, blogSlug}) => {
    console.log(blog)
  return (
    <div className='px-10 bg-light text-dark flex items-center justify-around flex-wrap text-xl
    font-medium mx-10 border-2 border-dark rounded-full'>
        <time className="m-3">
            {format(parseISO(blog.publishedAt), "d. LLLL, yyyy")}
        </time>
        <span className="m-3">10 Aufrufe</span>
        <div className="m-3">
            {blog.readingTime.words} Wörter
        </div>
        <Link href={`/categories/${slug(blog.tags[0])}`} className="m-3">
        #{blog.tags[0]}
        </Link>
    </div>
  )
}

export default BlogDetails