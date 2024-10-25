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
import { ArrowRight, ExternalLink, Github } from "lucide-react";

const categories = [
  { value: "all", label: "All Projects" },
  { value: "web", label: "Web Development" },
  { value: "mobile", label: "Mobile Apps" },
  { value: "cloud", label: "Cloud Solutions" },
  { value: "ai", label: "AI & ML" },
];

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A modern e-commerce platform with real-time inventory management and AI-powered recommendations.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    category: "web",
    tags: ["Next.js", "PostgreSQL", "Stripe"],
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com",
    featured: true
  },
  {
    id: 2,
    title: "Healthcare Mobile App",
    description: "Patient management and telemedicine app for healthcare providers.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop",
    category: "mobile",
    tags: ["React Native", "Firebase", "WebRTC"],
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com"
  },
  {
    id: 3,
    title: "Cloud Analytics Platform",
    description: "Real-time data analytics and visualization platform for business intelligence.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    category: "cloud",
    tags: ["AWS", "Kubernetes", "GraphQL"],
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com",
    featured: true
  },
  {
    id: 4,
    title: "AI Content Generator",
    description: "AI-powered platform for generating and optimizing marketing content.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
    category: "ai",
    tags: ["Python", "TensorFlow", "GPT-3"],
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com"
  },
  {
    id: 5,
    title: "Smart Home Dashboard",
    description: "IoT dashboard for monitoring and controlling smart home devices.",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=2070&auto=format&fit=crop",
    category: "web",
    tags: ["React", "Node.js", "MQTT"],
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com"
  },
  {
    id: 6,
    title: "Fitness Tracking App",
    description: "Mobile app for tracking workouts and nutrition with social features.",
    image: "https://images.unsplash.com/photo-1461773518188-b3e86f98242f?q=80&w=2069&auto=format&fit=crop",
    category: "mobile",
    tags: ["Flutter", "Firebase", "HealthKit"],
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com"
  }
];

export function ProjectsGrid() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProjects = selectedCategory === "all"
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section className="py-20">
      <div className="container">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-12">
          <h2 className="text-3xl font-bold mb-4 sm:mb-0">
            Featured Projects
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
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="group h-full flex flex-col">
                <CardContent className="p-0">
                  <div className="relative aspect-video">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                    {project.featured && (
                      <Badge className="absolute top-4 right-4" variant="secondary">
                        Featured
                      </Badge>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, index) => (
                        <Badge key={index} variant="outline">{tag}</Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0 mt-auto">
                  <div className="flex justify-between items-center w-full">
                    <Button variant="outline" size="sm" asChild>
                      <Link href={project.githubUrl}>
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Link>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <Link href={project.demoUrl}>
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                      </Link>
                    </Button>
                    <Button size="sm" asChild>
                      <Link href={`/projects/${project.id}`}>
                        Details
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
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