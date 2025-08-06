import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import GlassCard from "@/components/glass-card";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import type { BlogPost } from "@shared/schema";

export default function Blog() {
  const [activeTag, setActiveTag] = useState("all");

  const { data: blogPosts = [], isLoading } = useQuery<BlogPost[]>({
    queryKey: ["/api/blog"],
  });

  const allTags = ["all", ...Array.from(new Set(blogPosts.flatMap((post) => post.tags)))];

  const filteredPosts = blogPosts.filter(
    (post) => activeTag === "all" || post.tags.includes(activeTag)
  );

  if (isLoading) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <div className="glass-effect w-12 h-12 rounded-full mx-auto mb-4 animate-pulse"></div>
          <p className="text-white/70">Loading blog posts...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 fade-in">
              Latest Blog Posts
            </h1>
            <p className="text-xl text-white/70 mb-8 fade-in">
              Insights and updates from the cybersecurity world
            </p>

            {/* Blog Filter Tags */}
            <div className="flex flex-wrap justify-center gap-3 mb-12 fade-in">
              {allTags.map((tag) => (
                <Button
                  key={tag}
                  variant={activeTag === tag ? "default" : "outline"}
                  size="sm"
                  className={`glass-effect glow-button transition-all duration-300 rounded-full ${
                    activeTag === tag
                      ? "bg-white/10 text-white"
                      : "border-white/30 text-white/70 hover:bg-white/5"
                  }`}
                  onClick={() => setActiveTag(tag)}
                >
                  {tag === "all" ? "All Posts" : tag.charAt(0).toUpperCase() + tag.slice(1)}
                </Button>
              ))}
            </div>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`}>
                <GlassCard className="overflow-hidden scale-hover fade-in">
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <Badge
                        variant="secondary"
                        className="bg-white/10 text-white/90 border-none"
                      >
                        {post.tags[0]}
                      </Badge>
                      <div className="flex items-center ml-3 text-xs text-white/60">
                        <Calendar className="w-3 h-3 mr-1" />
                        {new Date(post.createdAt).toLocaleDateString()}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-white/70 text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-xs text-white/60">
                        <Clock className="w-3 h-3 mr-1" />
                        {post.readTime}
                      </div>
                      <ArrowRight className="w-4 h-4 text-white/60" />
                    </div>
                  </div>
                </GlassCard>
              </Link>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-white/70">No blog posts found for the selected tag.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
