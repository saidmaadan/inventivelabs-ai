import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const stats = [
  { label: "Client Satisfaction", value: "98%", progress: 98 },
  { label: "Projects Completed", value: "500+", progress: 95 },
  { label: "Team Growth", value: "40%", progress: 40 },
  { label: "Code Quality", value: "99%", progress: 99 }
];

export function StatsSection() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <div className="text-center mb-4">
                  <h3 className="text-4xl font-bold text-primary mb-2">
                    {stat.value}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
                <Progress value={stat.progress} className="h-2" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}