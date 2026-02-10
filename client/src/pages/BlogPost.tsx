import { useRoute } from "wouter";
import { portfolioData } from "@/data/portfolioData"; // Ensure this path is correct
import NotFound from "./not-found";

const BlogPost = () => {
  // 1. Get the 'slug' parameter from the URL defined in App.tsx
  const [match, params] = useRoute("/blog/:slug");

  if (!match) return <NotFound />;

  // 2. Find the article in your data. 
  // We look for an article whose 'link' ends with the slug in the URL.
  const article = portfolioData.blog.articles.find((a) => 
    a.link === `/blog/${params.slug}`
  );

  // 3. If no article is found, show 404
  if (!article) return <NotFound />;

  return (
    <article className="max-w-4xl mx-auto px-6 py-12">
      <header className="mb-10">
        <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
        <div className="text-gray-500 text-sm">
          {article.publishedDate} • {article.readTime} min read
        </div>
      </header>
      
      {/* 4. Render the content (use dangerouslySetInnerHTML if you have HTML strings) */}
      <div 
        className="prose lg:prose-xl"
        dangerouslySetInnerHTML={{ __html: article.content }} 
      />
      
      <div className="mt-12 pt-8 border-t">
        <p className="font-semibold">By {article.author}</p>
        <a href={portfolioData.personalInfo.linkedin} className="text-blue-600 hover:underline">
          Connect with me on LinkedIn
        </a>
      </div>
    </article>
  );
};

export default BlogPost;