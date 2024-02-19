import HomeCoverSection from "@/src/components/Home/HomeCoverSection";
import FeaturedPosts from "@/src/components/Home/FeaturedPosts";
import RecentPosts from "@/src/components/Home/RecentPosts";
import {allBlogs} from "contentlayer/generated"


export default function Gedanken() {
    return <>
    
    <RecentPosts blogs={allBlogs} />
    
    </>
}
