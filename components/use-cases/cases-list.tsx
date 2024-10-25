"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowRight, Building2, LineChart, Shield, Users } from "lucide-react";

const useCases = [
  {
    id: 1,
    client: "HealthTech Solutions",
    industry: "Healthcare",
    icon: Users,
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop",
    challenge: "Needed a secure telemedicine platform to connect patients with healthcare providers remotely.",
    solution: "Developed a HIPAA-compliant telemedicine platform with real-time video consultations, appointment scheduling, and electronic health records integration.",
    technologies: ["React Native", "Node.js", "WebRTC", "AWS", "MongoDB"],
    outcomes: [
      "50% reduction in patient wait times",
      "30% increase in appointment completion rates",
      "95% patient satisfaction rate",
      "Successful deployment across 100+ healthcare facilities"
    ]
  },
  {
    id: 2,
    client: "FinanceFlow",
    industry: "Financial Services",
    icon: LineChart,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    challenge: "Required a real-time trading platform with advanced analytics capabilities.",
    solution: "Built a high-performance trading platform with real-time market data integration, AI-powered analytics, and automated trading features.",
    technologies: ["Next.js", "Python", "TensorFlow", "PostgreSQL", "Redis"],
    outcomes: [
      "Sub-millisecond trade execution",
      "40% improvement in trading accuracy",
      "2x increase in daily trading volume",
      "99.99% platform uptime"
    ]
  },
  {
    id: 3,
    client: "RetailTech",
    industry: "Retail",
    icon: Building2,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    challenge: "Needed an omnichannel e-commerce solution with real-time inventory management.",
    solution: "Developed a unified commerce platform integrating online and offline channels with AI-powered inventory optimization.",
    technologies: ["React", "Node.js", "GraphQL", "Elasticsearch", "Azure"],
    outcomes: [
      "35% increase in online sales",
      "60% reduction in stockouts",
      "25% improvement in inventory turnover",
      "Seamless integration across 500+ stores"
    ]
  },
  {
    id: 4,
    client: "SecureBank",
    industry: "Banking",
    icon: Shield,
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
    challenge: "Required a secure mobile banking solution with advanced fraud detection.",
    solution: "Created a secure mobile banking app with biometric authentication and AI-powered fraud detection system.",
    technologies: ["Flutter", "Spring Boot", "TensorFlow", "PostgreSQL", "GCP"],
    outcomes: [
      "90% reduction in fraudulent transactions",
      "2M+ active mobile users",
      "45% increase in digital transactions",
      "99.9% security incident prevention rate"
    ]
  }
];

export function UseCasesList() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="grid gap-8">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative aspect-video md:aspect-auto">
                    <Image
                      src={useCase.image}
                      alt={useCase.client}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <useCase.icon className="h-5 w-5 text-primary" />
                      <Badge variant="secondary">{useCase.industry}</Badge>
                    </div>
                    <h2 className="text-2xl font-bold mb-4">{useCase.client}</h2>
                    
                    <Accordion type="single" collapsible className="mb-4">
                      <AccordionItem value="challenge">
                        <AccordionTrigger>Challenge</AccordionTrigger>
                        <AccordionContent>
                          {useCase.challenge}
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="solution">
                        <AccordionTrigger>Solution</AccordionTrigger>
                        <AccordionContent>
                          {useCase.solution}
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="tech">
                        <AccordionTrigger>Technologies Used</AccordionTrigger>
                        <AccordionContent>
                          <div className="flex flex-wrap gap-2">
                            {useCase.technologies.map((tech, i) => (
                              <Badge key={i} variant="outline">{tech}</Badge>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="outcomes">
                        <AccordionTrigger>Key Outcomes</AccordionTrigger>
                        <AccordionContent>
                          <ul className="space-y-2">
                            {useCase.outcomes.map((outcome, i) => (
                              <li key={i} className="flex items-center gap-2">
                                <ArrowRight className="h-4 w-4 text-primary" />
                                {outcome}
                              </li>
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>

                    <CardFooter className="px-0">
                      <Button asChild>
                        <Link href={`/use-cases/${useCase.id}`}>
                          View Full Case Study
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </CardContent>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}