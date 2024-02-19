import { allBlogs } from "@/.contentlayer/generated";
import BlogLayoutThree from "@/src/components/Blog/BlogLayoutThree";
import Categories from "@/src/components/Blog/Categories";
import { sortBlogs } from "@/src/utils";
import GithubSlugger, { slug } from "github-slugger";

const slugger = new GithubSlugger();

export async function generateStaticParams() {
    const categories = [];
    const paths = [{slug: "alle"}];

    allBlogs.map((blog) => {
        if(blog.isPublished){
            blog.tags.map((tag) => {
                let slugified = slugger.slug(tag);
                if(!categories.includes(slugified)){
                    categories.push(slugified);
                    paths.push({slug: slugified});
                }
            });
        }
    });

   
    return paths;
}

export async function generateMetadata({ params }) {
    return {
      title: `Gedanken zu: ${params.slug === "alle" ? "Philosophie, Gesundheit, Geld und so weiter" : params.slug.replaceAll("-"," ")}`,
      description: `Mehr über #${params.slug === "alle" ? "alle meine Beiträge" : params.slug} lesen`,
    };
  }


const CategoryPage = ({params}) => {

    const allCategories = ["alle"];
    const blogs = allBlogs.filter((blog) => {
        return blog.tags.some((tag) => {
            const slugified = slug(tag);
            if(!allCategories.includes(slugified)){
                allCategories.push(slugified)
            }
            if(params.slug === "alle"){
                return true;
            }
            return slugified === params.slug
        })
    })

    const sortedBlogs = sortBlogs(blogs);

    return <article className='mt-12 flex flex-col text-dark dark:text-light'>
        <div className='px-5 sm:px-10 md:px-24 sxl:px-32 flex flex-col'>
            <h1 className='mt-6 font-semibold text-2xl md:text-4xl lg:text-5xl'>
                #{params.slug}
            </h1>
        </div>

        <Categories categories={allCategories} currentSlug={params.slug} />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-16 mt-5 sm:mt-10 md:mt-24 px-5 sm:px-10 md:px-24 sxl:px-32">
            {
                sortedBlogs.map((blog, index) => 
                <article key={index} className='col-span-1 row-span-1 relative'>
                    <BlogLayoutThree blog={blog} />
                </article>)
            }
        </div>
    </article>
}

export default CategoryPage;