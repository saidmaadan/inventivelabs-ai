import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Code2, Rocket, Users } from "lucide-react";

const milestones = [
  {
    year: "2014",
    title: "Company Founded",
    description: "DevCraft was established with a vision to transform digital experiences.",
    icon: Rocket
  },
  {
    year: "2016",
    title: "First Major Project",
    description: "Successfully delivered our first enterprise-scale application.",
    icon: Code2
  },
  {
    year: "2019",
    title: "International Expansion",
    description: "Opened our first international office and expanded our team globally.",
    icon: Users
  },
  {
    year: "2023",
    title: "Industry Recognition",
    description: "Received multiple awards for innovation in software development.",
    icon: Award
  }
];

export function TimelineSection() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Badge className="mb-4">Our Journey</Badge>
          <h2 className="text-3xl font-bold mb-4">
            A Decade of Innovation
          </h2>
          <p className="text-muted-foreground">
            From our humble beginnings to becoming a leading software development company, 
            here are the key milestones that shaped our journey.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-border" />
          
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "justify-start" : "justify-end"
                }`}
              >
                <Card className={`w-1/2 ${index % 2 === 0 ? "mr-8" : "ml-8"}`}>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                          <milestone.icon className="h-6 w-6 text-primary" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold text-primary mb-1">
                          {milestone.year}
                        </div>
                        <h3 className="font-semibold mb-2">{milestone.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}