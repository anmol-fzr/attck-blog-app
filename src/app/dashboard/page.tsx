import { BlogCard, LoadingBlogCard, LoginProtected } from "@/components";

const blogs = Array.from(new Array(1));

export default function Page() {
  return (
    <LoginProtected>
      <main className="p-8">
        <h1>My Blogs</h1>
        {/*
        <div>{blogs.length > 0 ? <>render blogs</> : <></>}</div>
        p*/}

        <div className="flex flex-col gap-4">
          {blogs.map((_, i) => (
            <LoadingBlogCard key={i} />
          ))}
          {blogs.map((_, i) => (
            <BlogCard key={i} />
          ))}
        </div>
      </main>
    </LoginProtected>
  );
}
