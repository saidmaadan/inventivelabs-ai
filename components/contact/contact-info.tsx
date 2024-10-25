import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Clock, ArrowUpRight } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "contact@devcraft.com",
    link: "mailto:contact@devcraft.com"
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+1 (555) 123-4567",
    link: "tel:+15551234567"
  },
  {
    icon: MapPin,
    title: "Address",
    value: "123 Tech Street, Silicon Valley, CA 94025",
    link: "https://maps.google.com"
  },
  {
    icon: Clock,
    title: "Business Hours",
    value: "Mon - Fri: 9:00 AM - 6:00 PM",
  }
];

export function ContactInfo() {
  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="p-6">
          <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
          <div className="space-y-6">
            {contactInfo.map((item, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="mt-1">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">{item.title}</h3>
                  {item.link ? (
                    <Button 
                      variant="link" 
                      className="h-auto p-0 text-muted-foreground hover:text-primary"
                      asChild
                    >
                      <a href={item.link} target={item.link.startsWith("http") ? "_blank" : undefined}>
                        {item.value}
                        {item.link.startsWith("http") && (
                          <ArrowUpRight className="ml-1 h-4 w-4" />
                        )}
                      </a>
                    </Button>
                  ) : (
                    <p className="text-muted-foreground">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <h2 className="text-2xl font-bold mb-4">Follow Us</h2>
          <p className="text-muted-foreground mb-6">
            Stay connected with us on social media for the latest updates and insights.
          </p>
          <div className="flex space-x-4">
            <Button variant="outline" className="flex-1">LinkedIn</Button>
            <Button variant="outline" className="flex-1">Twitter</Button>
            <Button variant="outline" className="flex-1">GitHub</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}