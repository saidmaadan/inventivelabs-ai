import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { CalendarDays, Clock, ArrowLeft, Twitter, Linkedin, Facebook } from "lucide-react";

// This would typically come from a database or CMS
const posts = [
  {
    id: 1,
    title: "The Future of Web Development: What's Next in 2024",
    content: `
      <p class="lead">The web development landscape is constantly evolving, bringing new technologies and methodologies that shape how we build digital experiences.</p>

      <h2>The Rise of WebAssembly</h2>
      <p>WebAssembly (Wasm) continues to gain traction, enabling high-performance code execution in the browser. This technology allows developers to write code in languages like Rust and C++ and run it alongside JavaScript, opening new possibilities for web applications.</p>

      <h2>Edge Computing Takes Center Stage</h2>
      <p>Edge computing is revolutionizing how we deploy and run web applications. By moving computation closer to the end user, we can achieve better performance and reduced latency.</p>

      <h2>The Evolution of Frontend Frameworks</h2>
      <p>Frontend frameworks are becoming more sophisticated, with a focus on performance and developer experience. Server components, streaming, and partial hydration are becoming standard features.</p>

      <h2>AI-Powered Development Tools</h2>
      <p>Artificial intelligence is transforming the development process, from code completion to automated testing. These tools are making developers more productive and helping to catch issues earlier in the development cycle.</p>

      <h2>Conclusion</h2>
      <p>The future of web development is exciting, with new technologies and approaches making it possible to build better, faster, and more sophisticated applications.</p>
    `,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop",
    category: "Development",
    author: {
      name: "John Doe",
      image: "https://github.com/shadcn.png",
      role: "Lead Developer",
      bio: "John is a full-stack developer with 10+ years of experience in web development."
    },
    date: "Mar 15, 2024",
    readTime: "5 min read"
  }
  // Add more posts as needed
];

export function generateMetadata({ params }: { params: { id: string } }) {
  const post = posts.find(p => p.id === parseInt(params.id));
  
  if (!post) {
    return {
      title: "Post Not Found",
      description: "The requested blog post could not be found."
    };
  }

  return {
    title: `${post.title} - DevCraft Blog`,
    description: post.content.substring(0, 160)
  };
}

export default function BlogPost({ params }: { params: { id: string } }) {
  const post = posts.find(p => p.id === parseInt(params.id));

  if (!post) {
    notFound();
  }

  return (
    <article className="py-20">
      <div className="container max-w-4xl">
        <div className="mb-8">
          <Button variant="ghost" asChild className="mb-8">
            <Link href="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </Button>

          <Badge className="mb-4">{post.category}</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {post.title}
          </h1>

          <div className="flex items-center gap-6 mb-8">
            <div className="flex items-center gap-2">
              <CalendarDays className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">{post.readTime}</span>
            </div>
          </div>

          <div className="relative aspect-[2/1] mb-8">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>

          <div className="flex items-center gap-4 mb-8">
            <Avatar>
              <AvatarImage src={post.author.image} alt={post.author.name} />
              <AvatarFallback>{post.author.name[0]}</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium">{post.author.name}</p>
              <p className="text-sm text-muted-foreground">{post.author.role}</p>
            </div>
          </div>

          <Separator className="mb-8" />
        </div>

        <div 
          className="prose prose-neutral dark:prose-invert max-w-none mb-12"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <Separator className="mb-8" />

        <div className="flex items-center justify-between">
          <div>
            <p className="font-medium mb-2">Share this article</p>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Facebook className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="text-right">
            <p className="font-medium mb-2">Written by</p>
            <p className="text-sm text-muted-foreground">{post.author.bio}</p>
          </div>
        </div>
      </div>
    </article>
  );
}