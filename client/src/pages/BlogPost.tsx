import { useRoute } from "wouter";
import { ArrowLeft, Calendar, User, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { portfolioData } from "@/data/portfolio";
import { useState, useEffect } from "react";

interface BlogArticle {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  publishedDate: string;
  readTime: number;
  link: string;
  author: string;
}

export default function BlogPost() {
  const [, params] = useRoute("/blog/:slug");
  const [article, setArticle] = useState<BlogArticle | null>(null);

  useEffect(() => {
    if (params?.slug) {
      const found = portfolioData.blog.articles.find(
        (a) => a.link === `/blog/${params.slug}`
      );
      setArticle(found || null);
    }
  }, [params?.slug]);

  if (!article) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Article not found</h1>
          <Button asChild variant="outline">
            <a href="/">Go back home</a>
          </Button>
        </div>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary/10 via-transparent to-transparent pt-20 pb-12">
        <div className="container mx-auto px-6">
          <Button
            asChild
            variant="ghost"
            className="mb-8 text-gray-400 hover:text-white"
          >
            <a href="/#blog" className="flex items-center gap-2">
              <ArrowLeft size={20} />
              Back to Blog
            </a>
          </Button>

          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium">
                {article.category}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
              {article.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-gray-400 text-sm">
              <div className="flex items-center gap-2">
                <User size={16} />
                <span>{article.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>{formatDate(article.publishedDate)}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span>{article.readTime} min read</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-invert max-w-none">
            <article className="text-gray-300 leading-relaxed space-y-6">
              {article.content.split("\n\n").map((paragraph, idx) => {
                // Handle markdown headers
                if (paragraph.startsWith("## ")) {
                  return (
                    <h2
                      key={idx}
                      className="text-2xl font-bold text-white mt-8 mb-4"
                    >
                      {paragraph.replace("## ", "")}
                    </h2>
                  );
                }
                if (paragraph.startsWith("### ")) {
                  return (
                    <h3
                      key={idx}
                      className="text-xl font-bold text-white mt-6 mb-3"
                    >
                      {paragraph.replace("### ", "")}
                    </h3>
                  );
                }
                // Handle markdown bold
                const processedText = paragraph
                  .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
                  .replace(/\*([^*]*)\*/g, "<em>$1</em>");

                return (
                  <p key={idx} dangerouslySetInnerHTML={{ __html: processedText }} />
                );
              })}

              {/* Render markdown tables */}
              {article.content.includes("|") && (
                <div className="overflow-x-auto my-6">
                  <table className="w-full border-collapse border border-gray-600">
                    <thead>
                      <tr className="bg-primary/10">
                        <th className="border border-gray-600 px-4 py-2 text-left font-semibold">
                          Feature
                        </th>
                        <th className="border border-gray-600 px-4 py-2 text-left font-semibold">
                          MAS (Singapore)
                        </th>
                        <th className="border border-gray-600 px-4 py-2 text-left font-semibold">
                          EU MiCA
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-600 px-4 py-2 font-semibold">
                          Stablecoin Stance
                        </td>
                        <td className="border border-gray-600 px-4 py-2">
                          Focus on Single-Currency Stablecoins (SCS) with individual risk
                          assessments.
                        </td>
                        <td className="border border-gray-600 px-4 py-2">
                          Strict ban on algorithmic stablecoins; rigorous reserve
                          requirements for ARTs/EMTs.
                        </td>
                      </tr>
                      <tr className="bg-gray-900/30">
                        <td className="border border-gray-600 px-4 py-2 font-semibold">
                          Retail Access
                        </td>
                        <td className="border border-gray-600 px-4 py-2">
                          Strict: Includes knowledge tests for retail traders and a ban on
                          credit card crypto purchases.
                        </td>
                        <td className="border border-gray-600 px-4 py-2">
                          Accessible: Focuses on standardized "White Papers" to ensure
                          investors are "better informed".
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-600 px-4 py-2 font-semibold">
                          Interoperability
                        </td>
                        <td className="border border-gray-600 px-4 py-2">
                          Core Objective: Developing "Global Layer One" (GL1) infrastructure
                          for cross-border institutional trading.
                        </td>
                        <td className="border border-gray-600 px-4 py-2">
                          Secondary: Focused on internal market integrity and preventing
                          fragmentation within the Eurozone.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}
            </article>
          </div>

          {/* Author Info */}
          <div className="mt-12 pt-8 border-t border-gray-700">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <User className="text-primary" size={24} />
              </div>
              <div>
                <p className="font-semibold text-white">{article.author}</p>
                <p className="text-sm text-gray-400">
                  Business Architect | AML | KYC | Anti-Fraud | RegTech
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
