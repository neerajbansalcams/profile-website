import { useState } from "react";
import { Calendar, ArrowRight, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { portfolioData } from "@/data/portfolioData";

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const articles = portfolioData.blog.articles;
  const categories = portfolioData.blog.categories;

  const filteredArticles = articles.filter((article) => {
    const matchesSearch =
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const isExternalLink = (link: string) => link.startsWith("http");

  return (
    <section id="blog" className="py-20 bg-background relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Blog & Articles
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Latest insights and updates on Financial Crime Compliance, RegTech, and AML trends
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-12">
          <div className="relative mb-6">
            <Search className="absolute left-3 top-3 text-gray-500" size={20} />
            <Input
              type="text"
              placeholder="Search articles..."
              className="pl-10 bg-background/50 border-white/10 text-white placeholder:text-gray-600"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            <Button
              variant={selectedCategory === null ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(null)}
              className={
                selectedCategory === null
                  ? "bg-primary text-background hover:bg-primary/90"
                  : "border-white/10 text-gray-300 hover:text-primary"
              }
            >
              All
            </Button>
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={
                  selectedCategory === category
                    ? "bg-primary text-background hover:bg-primary/90"
                    : "border-white/10 text-gray-300 hover:text-primary"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Articles Grid */}
        {filteredArticles.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((article, index) => (
              <article
                key={index}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:border-primary/50 transition-all duration-300 hover:bg-white/10"
              >
                {/* Category Badge */}
                <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
                  {article.category}
                </Badge>

                {/* Title */}
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-primary transition-colors">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {article.excerpt}
                </p>

                {/* Meta Information */}
                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <Calendar size={16} className="mr-2" />
                  <span>{new Date(article.publishedDate).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}</span>
                  {article.readTime && (
                    <>
                      <span className="mx-2">•</span>
                      <span>{article.readTime} min read</span>
                    </>
                  )}
                </div>

                {/* Read More Link */}
                <a
                  href={article.link}
                  {...(isExternalLink(article.link) && {
                    target: "_blank",
                    rel: "noopener noreferrer",
                  })}
                  className="inline-flex items-center text-primary text-sm font-medium hover:gap-2 transition-all group"
                >
                  Read Article
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-400">No articles found. Try adjusting your search.</p>
          </div>
        )}
      </div>
    </section>
  );
}
