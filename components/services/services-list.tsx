"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  Code2,
  Cloud,
  Smartphone,
  Globe,
  Brain,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const services = [
  {
    id: "custom-software",
    icon: Code2,
    title: "Custom Software Development",
    description: "Tailored software solutions designed to address your specific business challenges.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop",
    features: [
      "Scalable Architecture",
      "Modern Tech Stack",
      "Agile Development",
      "Quality Assurance"
    ],
    benefits: [
      "Increased Efficiency",
      "Competitive Advantage",
      "Enhanced Productivity",
      "Cost Optimization"
    ]
  },
  {
    id: "cloud-solutions",
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Secure and scalable cloud infrastructure to power your digital transformation.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
    features: [
      "Cloud Migration",
      "DevOps Services",
      "Microservices",
      "Serverless Computing"
    ],
    benefits: [
      "Improved Scalability",
      "Reduced Costs",
      "Enhanced Security",
      "Global Reach"
    ]
  },
  {
    id: "mobile-development",
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop",
    features: [
      "iOS Development",
      "Android Development",
      "Cross-Platform Apps",
      "Mobile UI/UX"
    ],
    benefits: [
      "Market Reach",
      "User Engagement",
      "Brand Presence",
      "Revenue Growth"
    ]
  },
  {
    id: "web-development",
    icon: Globe,
    title: "Web Development",
    description: "Modern web applications built with cutting-edge technologies and best practices.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    features: [
      "Responsive Design",
      "Progressive Web Apps",
      "E-commerce Solutions",
      "CMS Development"
    ],
    benefits: [
      "Global Accessibility",
      "SEO Optimization",
      "Fast Performance",
      "Cross-browser Support"
    ]
  },
  {
    id: "ai-ml",
    icon: Brain,
    title: "AI & Machine Learning",
    description: "Intelligent solutions that leverage the power of AI to drive business innovation.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
    features: [
      "Predictive Analytics",
      "Natural Language Processing",
      "Computer Vision",
      "Machine Learning Models"
    ],
    benefits: [
      "Data-Driven Insights",
      "Process Automation",
      "Enhanced Decision Making",
      "Competitive Edge"
    ]
  },
  {
    id: "security",
    icon: ShieldCheck,
    title: "Cybersecurity Solutions",
    description: "Comprehensive security measures to protect your digital assets and data.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
    features: [
      "Security Audits",
      "Penetration Testing",
      "Compliance Solutions",
      "Security Training"
    ],
    benefits: [
      "Data Protection",
      "Risk Mitigation",
      "Regulatory Compliance",
      "Peace of Mind"
    ]
  }
];

export function ServicesList() {
  const [activeTab, setActiveTab] = useState("custom-software");

  return (
    <section className="py-20">
      <div className="container">
        <Tabs defaultValue="custom-software" onValueChange={setActiveTab}>
          <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mb-12">
            {services.map((service) => (
              <TabsTrigger
                key={service.id}
                value={service.id}
                className="flex flex-col items-center gap-2 p-4"
              >
                <service.icon className={`h-6 w-6 ${
                  activeTab === service.id ? "text-primary" : "text-muted-foreground"
                }`} />
                <span className="text-sm text-center">{service.title}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {services.map((service) => (
            <TabsContent key={service.id} value={service.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="grid md:grid-cols-2 gap-12"
              >
                <div>
                  <Badge className="mb-4">{service.title}</Badge>
                  <h2 className="text-3xl font-bold mb-6">{service.description}</h2>
                  
                  <div className="space-y-8">
                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-semibold mb-4">Key Features</h3>
                        <ul className="grid grid-cols-2 gap-3">
                          {service.features.map((feature, index) => (
                            <li key={index} className="flex items-center text-sm">
                              <CheckCircle2 className="h-4 w-4 text-primary mr-2" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-semibold mb-4">Benefits</h3>
                        <ul className="grid grid-cols-2 gap-3">
                          {service.benefits.map((benefit, index) => (
                            <li key={index} className="flex items-center text-sm">
                              <CheckCircle2 className="h-4 w-4 text-primary mr-2" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                      <CardFooter className="pt-6">
                        <Button className="w-full">
                          Learn More About {service.title}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>
                </div>

                <div className="relative aspect-video rounded-lg overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}