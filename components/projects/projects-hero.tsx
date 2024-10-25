"use client";

import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

export function ProjectsHero() {
  return (
    <section className="py-20">
      <div className="container">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Badge className="mb-4">Our Portfolio</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Transforming Ideas into Digital Reality
          </h1>
          <p className="text-xl text-muted-foreground">
            Explore our collection of successful projects that showcase our expertise 
            in delivering innovative software solutions.
          </p>
        </motion.div>
      </div>
      <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
    </section>
  );
}