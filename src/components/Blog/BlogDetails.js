import { format, parseISO } from 'date-fns'
import { slug } from 'github-slugger'
import Link from 'next/link'
import React from 'react'
import ViewCounter from './ViewCounter'

const BlogDetails = ({blog, slug: blogSlug}) => {
    console.log(blog)
  return (
    <div className='px-10 bg-light text-dark flex items-center justify-around flex-wrap text-xl
    font-medium mx-10 border-2 border-dark rounded-full'>
        <time className="m-3">
            {format(parseISO(blog.publishedAt), "d. LLLL, yyyy")}
        </time>
        <span className="m-3">
          <ViewCounter slug={blogSlug} />
        </span>
        <div className="m-3">
            {blog.readingTime.words} Wörter
        </div>
        <Link href={`/kategorien/${slug(blog.tags[0])}`} className="m-3">
        #{blog.tags[0]}
        </Link>
    </div>
  )
}

export default BlogDetails