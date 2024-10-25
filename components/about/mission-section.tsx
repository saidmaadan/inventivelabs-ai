import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Lightbulb, Target, Users } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Excellence",
    description: "We strive for excellence in every line of code, every design decision, and every client interaction."
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We believe in the power of teamwork and open communication with our clients and partners."
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We constantly explore new technologies and approaches to solve complex challenges."
  },
  {
    icon: Heart,
    title: "Integrity",
    description: "We maintain the highest standards of honesty, transparency, and ethical conduct."
  }
];

export function MissionSection() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Badge className="mb-4">Our Mission</Badge>
          <h1 className="text-4xl font-bold mb-6">
            Empowering Businesses Through Technology
          </h1>
          <p className="text-xl text-muted-foreground">
            At DevCraft, we're dedicated to transforming businesses through innovative software solutions. 
            Our mission is to deliver exceptional digital experiences that drive growth and success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div>
            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
            <p className="text-muted-foreground mb-6">
              To be the leading force in digital transformation, recognized globally for our innovative solutions 
              and commitment to excellence. We envision a future where technology seamlessly enhances every aspect 
              of business operations.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Our Approach</h2>
            <p className="text-muted-foreground mb-6">
              We combine technical expertise with creative problem-solving to deliver solutions that exceed expectations. 
              Our agile methodology ensures transparent communication and rapid delivery while maintaining the highest 
              quality standards.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <Card key={index} className="text-center">
              <CardContent className="pt-6">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <value.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}