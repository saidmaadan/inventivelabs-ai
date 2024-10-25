import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Lightbulb,
  Code,
  TestTube,
  Rocket,
} from "lucide-react";

const steps = [
  {
    icon: Lightbulb,
    title: "Discovery & Planning",
    description: "We analyze your requirements and create a detailed project roadmap."
  },
  {
    icon: Code,
    title: "Development",
    description: "Our team implements the solution using modern technologies and best practices."
  },
  {
    icon: TestTube,
    title: "Testing & QA",
    description: "Rigorous testing ensures the highest quality and reliability."
  },
  {
    icon: Rocket,
    title: "Deployment & Support",
    description: "We deploy your solution and provide ongoing maintenance and support."
  }
];

export function ProcessSection() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Badge className="mb-4">Our Process</Badge>
          <h2 className="text-3xl font-bold mb-4">
            How We Deliver Excellence
          </h2>
          <p className="text-muted-foreground">
            Our proven development process ensures high-quality solutions 
            delivered on time and within budget.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <Card key={index} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-8 h-px bg-border" />
              )}
              <CardContent className="pt-6 text-center">
                <div className="mb-4 mx-auto inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <step.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}