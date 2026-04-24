import { useRoute, Link } from "wouter";
import { Calendar, Clock, ArrowLeft, ArrowRight } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";
import NotFound from "./not-found";

const BlogPost = () => {
  const [match, params] = useRoute<{ slug: string }>("/blog/:slug");

  if (!match || !params?.slug) return <NotFound />;

  const articles = portfolioData.blog.articles;
  const article = articles.find((a) => a.link === `/blog/${params.slug}`);

  if (!article || !article.content) return <NotFound />;

  const internalArticles = articles.filter((a) => a.link.startsWith("/blog/"));
  const currentIndex = internalArticles.findIndex((a) => a.link === article.link);
  const prevArticle = currentIndex > 0 ? internalArticles[currentIndex - 1] : null;
  const nextArticle = currentIndex < internalArticles.length - 1 ? internalArticles[currentIndex + 1] : null;

  return (
    <div className="blog-article-page">

      {/* Top navigation bar */}
      <nav className="blog-nav sticky top-0 z-50">
        <div style={{ maxWidth: "720px", margin: "0 auto", padding: "0 1.5rem", height: "52px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Link href="/#blog">
            <a className="blog-nav" style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
              <ArrowLeft size={13} />
              All Articles
            </a>
          </Link>
          <span className="nav-category">{article.category}</span>
        </div>
      </nav>

      {/* Article */}
      <article style={{ maxWidth: "720px", margin: "0 auto", padding: "0 1.5rem 6rem" }}>

        {/* Header */}
        <header className="blog-header" style={{ paddingTop: "3.5rem" }}>
          <div style={{ display: "flex", alignItems: "center", marginBottom: "1.25rem" }}>
            <span className="blog-category-pill">{article.category}</span>
            {article.readTime && (
              <span className="blog-readtime">
                <Clock size={11} />
                {article.readTime} min read
              </span>
            )}
          </div>

          <h1 className="blog-title">{article.title}</h1>

          {article.excerpt && (
            <p className="blog-excerpt">{article.excerpt}</p>
          )}

          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div className="blog-author-avatar">NB</div>
            <div>
              <div className="blog-author-name">{article.author}</div>
              <div className="blog-author-date" style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                <Calendar size={10} />
                {new Date(article.publishedDate).toLocaleDateString("en-US", {
                  year: "numeric", month: "long", day: "numeric",
                })}
              </div>
            </div>
          </div>
        </header>

        {/* Body — content is static, hardcoded in portfolioData.ts (trusted source) */}
        <div
          className="blog-content"
          style={{ paddingTop: "2.5rem" }}
          dangerouslySetInnerHTML={{ __html: article.content }}
        />

        {/* Prev / Next navigation */}
        {(prevArticle || nextArticle) && (
          <div className="blog-prevnext" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
            {prevArticle ? (
              <Link href={prevArticle.link}>
                <a>
                  <span className="pn-label"><ArrowLeft size={11} /> Previous</span>
                  <span className="pn-title">{prevArticle.title}</span>
                </a>
              </Link>
            ) : <div />}

            {nextArticle ? (
              <Link href={nextArticle.link}>
                <a style={{ textAlign: "right" }}>
                  <span className="pn-label" style={{ justifyContent: "flex-end" }}>Next <ArrowRight size={11} /></span>
                  <span className="pn-title">{nextArticle.title}</span>
                </a>
              </Link>
            ) : <div />}
          </div>
        )}

        {/* Back to all articles */}
        <div style={{ marginTop: "2.5rem", textAlign: "center" }}>
          <Link href="/#blog">
            <a className="back-link">
              <ArrowLeft size={12} />
              Back to all articles
            </a>
          </Link>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;