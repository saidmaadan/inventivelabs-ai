import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Building2,
  ShoppingBag,
  Stethoscope,
  Landmark,
  Truck,
  Lightbulb,
  Factory,
  GraduationCap,
} from "lucide-react";

const industries = [
  {
    icon: Building2,
    name: "Enterprise",
    description: "Digital transformation solutions for large organizations"
  },
  {
    icon: ShoppingBag,
    name: "Retail",
    description: "Omnichannel commerce and inventory management systems"
  },
  {
    icon: Stethoscope,
    name: "Healthcare",
    description: "HIPAA-compliant healthcare technology solutions"
  },
  {
    icon: Landmark,
    name: "Finance",
    description: "Secure fintech and banking applications"
  },
  {
    icon: Truck,
    name: "Logistics",
    description: "Supply chain and fleet management solutions"
  },
  {
    icon: Lightbulb,
    name: "Startups",
    description: "Scalable solutions for growing businesses"
  },
  {
    icon: Factory,
    name: "Manufacturing",
    description: "Industry 4.0 and IoT implementations"
  },
  {
    icon: GraduationCap,
    name: "Education",
    description: "E-learning and educational technology platforms"
  }
];

export function IndustriesSection() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Badge className="mb-4">Industries</Badge>
          <h2 className="text-3xl font-bold mb-4">
            Solutions Across Industries
          </h2>
          <p className="text-muted-foreground">
            We deliver tailored software solutions for diverse industries, 
            each with its unique challenges and requirements.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <Card key={index} className="group hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <industry.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{industry.name}</h3>
                <p className="text-sm text-muted-foreground">
                  {industry.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}