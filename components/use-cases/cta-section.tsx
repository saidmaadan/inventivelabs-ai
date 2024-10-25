import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, MessageCircle } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-20">
      <div className="container">
        <Card className="bg-primary text-primary-foreground">
          <CardContent className="p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">
                  Ready to Build Your Success Story?
                </h2>
                <p className="text-primary-foreground/90 mb-8">
                  Let's discuss how we can help transform your business with our 
                  innovative software solutions. Schedule a consultation with our experts.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" variant="secondary" asChild>
                    <Link href="/contact">
                      Start Your Project
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="/contact">
                      <MessageCircle className="mr-2 h-4 w-4" />
                      Book a Call
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="hidden md:block">
                <ul className="space-y-4 text-primary-foreground/90">
                  <li className="flex items-center">
                    <ArrowRight className="mr-2 h-4 w-4" />
                    Custom Solution Design
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="mr-2 h-4 w-4" />
                    Expert Consultation
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="mr-2 h-4 w-4" />
                    Flexible Engagement Models
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="mr-2 h-4 w-4" />
                    Proven Track Record
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}