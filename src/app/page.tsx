import { BlogCard, Navbar } from "@/components";

const blogs = Array.from(new Array(30));
const cats = ["programming", "music", "science", "psychology"];

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="p-8 space-y-4">
        {/*
        <h1 className="font-geist text-3xl font-extrabold tracking-tight lg:text-4xl sticky top-14 backdrop-blur p-4 border-b !z-[2]">
          Latest Blogs
        </h1>
        */}

        <div className="flex gap-6">
          <div className="flex flex-col gap-4">
            {blogs.map((_, i) => (
              <BlogCard key={i} />
            ))}
          </div>
          <aside className="h-96 sticky top-24 px-4 bg-background/50 border p-4 rounded-lg w-3/12">
            <h2 className="pb-4 text-3xl font-semibold tracking-tight transition-colors">
              Categories
            </h2>
            <ul className="flex flex-col gap-1 capitalize font-medium">
              {cats.map((cat) => (
                <li key={cat}>{cat}</li>
              ))}
            </ul>
          </aside>
        </div>
      </main>
    </>
  );
}
