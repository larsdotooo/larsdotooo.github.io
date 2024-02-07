import {allBlogs} from "contentlayer/generated"
import ThoughtBox from "@/src/components/Home/ThoughtBox";
import NoteSection from "@/src/components/Home/NoteSection";

export default function Home() {
  console.log(allBlogs);
  return (
    <main className="flex flex-col items-center justify-center">
      <ThoughtBox />
      <NoteSection blogs={allBlogs} />
    </main>
  )
}
