"use client";

import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Badge className="mb-4">Our Services</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Comprehensive Software Solutions for Modern Businesses
          </h1>
          <p className="text-xl text-muted-foreground">
            From custom software development to cloud solutions, we deliver cutting-edge 
            technology services tailored to your unique business needs.
          </p>
        </motion.div>
      </div>
      <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
    </section>
  );
}