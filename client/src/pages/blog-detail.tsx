import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Clock, ExternalLink } from "lucide-react";
import type { BlogPost } from "@shared/schema";

export default function BlogDetail() {
  const { slug } = useParams();

  const { data: post, isLoading, error } = useQuery<BlogPost>({
    queryKey: ["/api/blog", slug],
    enabled: !!slug,
  });

  if (isLoading) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <div className="glass-effect w-12 h-12 rounded-full mx-auto mb-4 animate-pulse"></div>
          <p className="text-white/70">Loading blog post...</p>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Blog Post Not Found</h1>
          <p className="text-white/70 mb-6">
            The blog post you're looking for doesn't exist.
          </p>
          <Link href="/blog">
            <Button variant="outline" className="border-white/30 text-white hover:bg-white/5">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Back Button */}
        <Link href="/blog">
          <Button
            variant="ghost"
            className="text-white/70 hover:text-white hover:bg-white/5 mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Button>
        </Link>

        {/* Article Header */}
        <article className="fade-in">
          <div className="mb-8">
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full h-64 md:h-96 object-cover rounded-lg mb-6"
            />

            <div className="flex flex-wrap items-center gap-4 mb-6">
              {post.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="bg-white/10 text-white/90 border-none"
                >
                  {tag}
                </Badge>
              ))}
            </div>

            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-white/60 mb-8">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                {new Date(post.createdAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                {post.readTime}
              </div>
            </div>
          </div>

          {/* Article Content */}
          <div className="prose prose-invert prose-lg max-w-none">
            <div
              className="text-white/90 leading-relaxed"
              dangerouslySetInnerHTML={{
                __html: post.content.replace(/\n/g, "<br />"),
              }}
            />
          </div>

          {/* Author Box */}
          <div className="glass-effect p-6 rounded-lg mt-12">
            <div className="flex items-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mr-4">
                <div className="w-8 h-8 bg-white/20 rounded-full"></div>
              </div>
              <div className="flex-1">
                <h4 className="text-lg font-semibold mb-1">{post.author}</h4>
                <p className="text-white/70 mb-2">Cybersecurity Professional & Trainer</p>
                {post.authorLink && (
                  <a
                    href={post.authorLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-white/60 hover:text-white transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 mr-1" />
                    LinkedIn Profile
                  </a>
                )}
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
