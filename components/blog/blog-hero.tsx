"use client";

import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

export function BlogHero() {
  return (
    <section className="py-20">
      <div className="container">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Badge className="mb-4">Our Blog</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Insights & Innovation
          </h1>
          <p className="text-xl text-muted-foreground">
            Stay updated with the latest trends in software development, technology insights, 
            and digital transformation strategies.
          </p>
        </motion.div>
      </div>
      <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
    </section>
  );
}