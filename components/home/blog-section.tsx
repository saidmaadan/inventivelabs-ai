import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const posts = [
  {
    title: "The Future of Web Development: What's Next in 2024",
    excerpt: "Explore the latest trends and technologies shaping the future of web development.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop",
    author: "John Doe",
    date: "Mar 15, 2024",
    category: "Technology"
  },
  {
    title: "Building Scalable Cloud Solutions: Best Practices",
    excerpt: "Learn how to design and implement scalable cloud architectures for modern applications.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
    author: "Jane Smith",
    date: "Mar 10, 2024",
    category: "Cloud"
  },
  {
    title: "Mobile App Development: Native vs Cross-Platform",
    excerpt: "A comprehensive comparison of native and cross-platform mobile development approaches.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop",
    author: "Mike Johnson",
    date: "Mar 5, 2024",
    category: "Mobile"
  }
];

export function BlogSection() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="flex justify-between items-center mb-12">
          <div>
            <Badge className="mb-4">Latest Insights</Badge>
            <h2 className="text-3xl font-bold">From Our Blog</h2>
          </div>
          <Button variant="outline" asChild>
            <Link href="/blog">
              View All Posts
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <Card key={index} className="group">
              <CardContent className="p-0">
                <div className="relative aspect-video">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <Badge variant="secondary" className="mb-4">
                    {post.category}
                  </Badge>
                  <h3 className="text-xl font-semibold mb-2 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                </div>
              </CardContent>
              <CardFooter className="px-6 py-4 border-t flex justify-between items-center">
                <div className="text-sm text-muted-foreground">
                  By {post.author}
                </div>
                <div className="text-sm text-muted-foreground">
                  {post.date}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}