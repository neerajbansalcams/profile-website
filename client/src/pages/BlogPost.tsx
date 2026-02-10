import { useRoute } from "wouter";
import { portfolioData } from "@/data/portfolioData"; 
import NotFound from "./not-found";

const BlogPost = () => {
  // 1. Explicitly define the expected route parameters for TypeScript
  const [match, params] = useRoute<{ slug: string }>("/blog/:slug");

  // 2. Comprehensive check to satisfy the Vercel build environment
  if (!match || !params?.slug) {
    return <NotFound />;
  }

  // 3. Find the article matching the current URL slug
  const article = portfolioData.blog.articles.find((a) => 
    a.link === `/blog/${params.slug}`
  );

  // 4. Handle cases where the slug exists but doesn't match an article
  if (!article || !article.content) {
    return <NotFound />;
  }

  return (
    <article className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Breadcrumb/Back link can go here */}
        
        <header className="mb-10 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
            {article.title}
          </h1>
          <div className="flex justify-center items-center text-gray-400 text-sm">
            <span>{new Date(article.publishedDate).toLocaleDateString("en-US", { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}</span>
            {article.readTime && (
              <>
                <span className="mx-3">•</span>
                <span>{article.readTime} min read</span>
              </>
            )}
          </div>
        </header>

        <hr className="border-white/10 mb-12" />

        {/* Content Area */}
        <div 
          className="prose prose-invert prose-primary max-w-none 
                     prose-headings:font-heading prose-headings:font-bold 
                     prose-p:text-gray-300 prose-p:leading-relaxed 
                     prose-strong:text-primary prose-a:text-primary"
          dangerouslySetInnerHTML={{ __html: article.content }} 
        />
      </div>
    </article>
  );
};

export default BlogPost;