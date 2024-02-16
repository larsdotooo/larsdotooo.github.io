import { allBlogs } from "contentlayer/generated";
import Image from "next/image";
import BlogDetails from "@/src/components/Blog/BlogDetails";
import RenderMdx from "@/src/components/Blog/RenderMdx";
import siteMetadata from "@/src/utils/siteMetaData";


export async function generateStaticParams() {

    return allBlogs.map((blog) => ({slug: blog._raw.flattenedPath}));
}


export async function generateMetadata({ params }) {
    const blog = allBlogs.find((blog) => blog._raw.flattenedPath === params.slug);
    if (!blog) {
      return;
    }
  
    const publishedAt = new Date(blog.publishedAt).toISOString();
    const modifiedAt = new Date(blog.updatedAt || blog.publishedAt).toISOString();
  
    let imageList = [siteMetadata.socialBanner];
    if (blog.image) {
      imageList =
        typeof blog.image.filePath === "string"
          ? [siteMetadata.siteUrl + blog.image.filePath.replace("../public", "")]
          : blog.image;
    }
    const ogImages = imageList.map((img) => {
      return { url: img.includes("http") ? img : siteMetadata.siteUrl + img };
    });
  
    const authors = blog?.author ? [blog.author] : siteMetadata.author;
  
    return {
      title: blog.title,
      description: blog.description,
      openGraph: {
        title: blog.title,
        description: blog.description,
        url: siteMetadata.siteUrl + blog.url,
        siteName: siteMetadata.title,
        locale: "de",
        type: "article",
        publishedTime: publishedAt,
        modifiedTime: modifiedAt,
        images: ogImages,
        authors: authors.length > 0 ? authors : [siteMetadata.author],
      },
      twitter: {
        card: "summary_large_image",
        title: blog.title,
        description: blog.description,
        images: ogImages,
      },
    };
  }


export default function BlogPage({ params }) {

    const blog = allBlogs.find((blog) => blog._raw.flattenedPath === params.slug)

    return ( 
        <article>
            <div className='mb-8 text-center relative w-full h-[40vh] sm:h-[50vh] bg-dark'>
                
                <div className="absolute top-0 left-0 right-0 bottom-0 h-full bg-dark/40 dark:bg-dark/30" />
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
                <h1 className="mt-6 font-semibold text-dark dark:text-light text-2xl md:text-3xl lg:text-4xl text-center">
                    {blog.title}
                </h1>
            </div>

           

            <BlogDetails blog={blog} slug={params.slug} />

            <div className="mt-8 px-10 flex flex-col items-center">
                <div className="w-full lg:max-w-[1200px]">
                <RenderMdx blog={blog} />
                </div>
            </div>
        </article>
    )
}