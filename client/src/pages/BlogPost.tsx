import { useRoute } from "wouter";
import { portfolioData } from "@/data/portfolioData"; 
import NotFound from "./not-found";

const BlogPost = () => {
  // Use a type cast or check if params exists to satisfy the build
  const [match, params] = useRoute("/blog/:slug");

  // Vercel build will fail if you try to access params.slug without checking 'match'
  if (!match || !params || !params.slug) {
    return <NotFound />;
  }

  const article = portfolioData.blog.articles.find((a) => 
    a.link === `/blog/${params.slug}`
  );

  if (!article) return <NotFound />;

  return (
    <div className="container mx-auto py-10">
       <h1 className="text-3xl font-bold">{article.title}</h1>
       <div className="mt-6 prose prose-slate" dangerouslySetInnerHTML={{ __html: article.content }} />
    </div>
  );
};

export default BlogPost;