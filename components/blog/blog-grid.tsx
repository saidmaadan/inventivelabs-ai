"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CalendarDays } from "lucide-react";

const categories = [
  { value: "all", label: "All Posts" },
  { value: "development", label: "Development" },
  { value: "design", label: "Design" },
  { value: "technology", label: "Technology" },
  { value: "business", label: "Business" },
];

const posts = [
  {
    id: 1,
    title: "The Future of Web Development: What's Next in 2024",
    excerpt: "Explore the latest trends and technologies shaping the future of web development, from WebAssembly to Edge Computing.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop",
    category: "development",
    author: {
      name: "John Doe",
      image: "https://github.com/shadcn.png",
      role: "Lead Developer"
    },
    date: "Mar 15, 2024",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "Designing for Scale: Microservices Architecture Patterns",
    excerpt: "Learn how to design and implement scalable microservices architectures for modern applications.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
    category: "technology",
    author: {
      name: "Jane Smith",
      image: "https://github.com/shadcn.png",
      role: "System Architect"
    },
    date: "Mar 12, 2024",
    readTime: "8 min read"
  },
  {
    id: 3,
    title: "AI in Software Development: Practical Applications",
    excerpt: "Discover how artificial intelligence is transforming the software development lifecycle.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
    category: "technology",
    author: {
      name: "Mike Johnson",
      image: "https://github.com/shadcn.png",
      role: "AI Specialist"
    },
    date: "Mar 10, 2024",
    readTime: "6 min read"
  },
  {
    id: 4,
    title: "Building Accessible Web Applications",
    excerpt: "Best practices and guidelines for creating inclusive web applications that work for everyone.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    category: "development",
    author: {
      name: "Sarah Wilson",
      image: "https://github.com/shadcn.png",
      role: "Frontend Developer"
    },
    date: "Mar 8, 2024",
    readTime: "7 min read"
  },
  {
    id: 5,
    title: "The Rise of Edge Computing in Modern Applications",
    excerpt: "Understanding the impact of edge computing on application architecture and user experience.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop",
    category: "technology",
    author: {
      name: "Alex Chen",
      image: "https://github.com/shadcn.png",
      role: "Cloud Architect"
    },
    date: "Mar 5, 2024",
    readTime: "6 min read"
  },
  {
    id: 6,
    title: "Effective State Management in React Applications",
    excerpt: "Compare different state management approaches and learn when to use each one.",
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?q=80&w=2074&auto=format&fit=crop",
    category: "development",
    author: {
      name: "Emily Brown",
      image: "https://github.com/shadcn.png",
      role: "React Developer"
    },
    date: "Mar 3, 2024",
    readTime: "9 min read"
  }
];

export function BlogGrid() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredPosts = selectedCategory === "all"
    ? posts
    : posts.filter(post => post.category === selectedCategory);

  return (
    <section className="py-20">
      <div className="container">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-12">
          <h2 className="text-3xl font-bold mb-4 sm:mb-0">
            Latest Articles
          </h2>
          <Select
            value={selectedCategory}
            onValueChange={setSelectedCategory}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category.value} value={category.value}>
                  {category.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group h-full flex flex-col">
                <CardContent className="p-0">
                  <Link href={`/blog/${post.id}`}>
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                      />
                      <Badge className="absolute top-4 left-4" variant="secondary">
                        {post.category}
                      </Badge>
                    </div>
                  </Link>
                  <div className="p-6">
                    <Link href={`/blog/${post.id}`}>
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                    </Link>
                    <p className="text-muted-foreground mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-4">
                      <Avatar>
                        <AvatarImage src={post.author.image} alt={post.author.name} />
                        <AvatarFallback>{post.author.name[0]}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <p className="text-sm font-medium">{post.author.name}</p>
                        <p className="text-sm text-muted-foreground">{post.author.role}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0 mt-auto">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <CalendarDays className="mr-2 h-4 w-4" />
                    {post.date} · {post.readTime}
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}