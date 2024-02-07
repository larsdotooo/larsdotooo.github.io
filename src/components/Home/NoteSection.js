import RenderMdx from "@/src/components/Blog/RenderMdx"
import { sortBlogs } from "@/src/utils";
import { CoffeeIcon } from "../Icons";

const NoteSection = ({blogs}) => {

    const sortedBlogs = sortBlogs(blogs);
    const blog = sortedBlogs[0];
    return (
        <article>
            
            <div className="grid grid-cols-12 gap-16 mt-8 px-10">
                <div className='col-span-4'>
                    <details className='border-[2px] border-solid border-dark text-dark rounded-2xl p-1 sticky top-6
                    max-h-[80vh] overflow-hidden overflow-y-auto flex justify-items-center' open >
                        <summary className='text-lg text-center font-semibold cursor-pointer mt-1'>
                            Notizbuch
                            <CoffeeIcon className="inline-block w-10 h-10 py-2 px-2 mb-1"/>
                        </summary>
                        <ul className='font-in text-base'>
                            {
                                blog.toc.map((heading) => {

                                    return <li key={`#${heading.slug}`} className="py-1">
                                        <a href={`#${heading.slug}`}
                                            data-level={heading.level}
                                            className='data-[level=two]:pl-2 data-[level=two]:pt-2
                                            data-[level=two]:border-t data-[level=two]:text-lg
                                            border-solid border-dark/40

                                            data-[level=three]:pl-6
                                            flex items-center justify-start
                                            '
                                        >
                                            {
                                                heading.level === "three" ? <span className='flex w-1 h-1 rounded-full bg-dark mr-2'>&nbsp;</span> : null
                                            }
                                            <span className="hover:underline">{heading.text}</span>
                                        </a>
                                    </li>
                                })
                            }
                        </ul>
                    </details>
                </div>
                <div className='col-span-8'>
                    <RenderMdx blog={blog} />
                </div>
            </div>
        </article>
      )
}

export default NoteSection