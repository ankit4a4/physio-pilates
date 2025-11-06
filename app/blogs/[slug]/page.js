import { articles } from "@/data/articles";
import BlogDetails from "./BlogDetails";

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export default function BlogPage({ params }) {
  const blog = articles.find((b) => b.slug === params.slug);
  if (!blog) return <div className="text-center py-20 text-gray-600">Blog not found</div>;
  return <BlogDetails blog={blog} />;
}
