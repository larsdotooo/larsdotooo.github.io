import { allBlogs } from "contentlayer/generated"
import Image from "next/image"
import BlogDetails from "@/src/components/Blog/BlogDetails"
import RenderMdx from "@/src/components/Blog/RenderMdx"


export async function generateStaticParams() {

    return allBlogs.map((blog) => ({slug: blog._raw.flattenedPath}));
}


export default function BlogPage({ params }) {

    const blog = allBlogs.find((blog) => blog._raw.flattenedPath === params.slug)

    return ( 
        <article>
            <div className='mb-8 text-center relative w-full h-[50vh] bg-dark'>
                
                <div className="absolute top-0 left-0 right-0 bottom-0 h-full bg-dark/30" />
                    <Image
                    src={blog.image.filePath.replace("../public", "")}
                    placeholder='blur'
                    blurDataURL={blog.image.blurhashDataUrl}
                    alt={blog.title}
                    width={blog.image.width}
                    height={blog.image.height}
                    className='aspect-square w-full h-full object-cover object-center'
                    />
            </div>
            
            <div className='m-10'>
                <h1 className="mt-6 font-semibold text-dark text-4xl text-center">
                    {blog.title}
                </h1>
            </div>

           

            <BlogDetails blog={blog} slug={params.slug} />

            <div className="mt-8 px-10 flex flex-col items-center">
                <div className="max-w-[1200px]">
                <RenderMdx blog={blog} />
                </div>
            </div>
        </article>
    )
}