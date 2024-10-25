import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const highlights = [
  "10+ Years of Experience",
  "100+ Successful Projects",
  "Global Client Base",
  "Expert Development Team"
];

export function AboutSection() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Badge>About Us</Badge>
            <h2 className="text-3xl md:text-4xl font-bold">
              Crafting Digital Excellence Since 2014
            </h2>
            <p className="text-muted-foreground">
              We're a team of passionate developers, designers, and strategists dedicated to 
              delivering innovative software solutions that drive business growth and user engagement.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
            <Button asChild>
              <Link href="/about">
                Learn More About Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Card className="p-6">
              <CardContent className="p-0 space-y-2">
                <h3 className="text-3xl font-bold text-primary">100+</h3>
                <p className="text-sm text-muted-foreground">Projects Completed</p>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent className="p-0 space-y-2">
                <h3 className="text-3xl font-bold text-primary">50+</h3>
                <p className="text-sm text-muted-foreground">Happy Clients</p>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent className="p-0 space-y-2">
                <h3 className="text-3xl font-bold text-primary">25+</h3>
                <p className="text-sm text-muted-foreground">Team Members</p>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent className="p-0 space-y-2">
                <h3 className="text-3xl font-bold text-primary">5+</h3>
                <p className="text-sm text-muted-foreground">Countries Served</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}