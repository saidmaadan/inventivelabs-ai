"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { toast } from "sonner";
import { Check, Loader2 } from "lucide-react";

const plans = [
  {
    name: "Basic",
    description: "Perfect for small businesses and startups",
    priceMonthly: 99,
    priceYearly: 990,
    features: [
      "Up to 5 team members",
      "Basic project management",
      "24/7 email support",
      "10GB storage",
      "API access"
    ],
    stripePriceIdMonthly: "price_monthly_basic",
    stripePriceIdYearly: "price_yearly_basic"
  },
  {
    name: "Pro",
    description: "Ideal for growing businesses",
    priceMonthly: 199,
    priceYearly: 1990,
    features: [
      "Up to 20 team members",
      "Advanced project management",
      "Priority support",
      "50GB storage",
      "API access",
      "Custom integrations",
      "Advanced analytics"
    ],
    stripePriceIdMonthly: "price_monthly_pro",
    stripePriceIdYearly: "price_yearly_pro",
    popular: true
  },
  {
    name: "Enterprise",
    description: "For large organizations",
    priceMonthly: 399,
    priceYearly: 3990,
    features: [
      "Unlimited team members",
      "Enterprise project management",
      "24/7 phone support",
      "Unlimited storage",
      "API access",
      "Custom integrations",
      "Advanced analytics",
      "Custom development",
      "Dedicated account manager"
    ],
    stripePriceIdMonthly: "price_monthly_enterprise",
    stripePriceIdYearly: "price_yearly_enterprise"
  }
];

export function PricingPlans() {
  const [isYearly, setIsYearly] = useState(false);
  const [isLoading, setIsLoading] = useState<string | null>(null);
  const router = useRouter();

  const handleSubscribe = async (priceId: string, planName: string) => {
    try {
      setIsLoading(planName);
      const response = await fetch("/api/stripe/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          priceId,
          planName,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to create checkout session");
      }

      router.push(data.url);
    } catch (error) {
      toast.error("Failed to process subscription");
    } finally {
      setIsLoading(null);
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-center items-center gap-4">
        <span className={!isYearly ? "font-semibold" : "text-muted-foreground"}>
          Monthly
        </span>
        <Switch
          checked={isYearly}
          onCheckedChange={setIsYearly}
        />
        <span className={isYearly ? "font-semibold" : "text-muted-foreground"}>
          Yearly
          <Badge variant="secondary" className="ml-2">
            Save 20%
          </Badge>
        </span>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <Card key={plan.name} className={`relative ${plan.popular ? "border-primary" : ""}`}>
            {plan.popular && (
              <Badge className="absolute top-4 right-4">
                Most Popular
              </Badge>
            )}
            <CardHeader>
              <CardTitle>
                <h3 className="text-2xl font-bold">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mt-2">
                  {plan.description}
                </p>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <span className="text-4xl font-bold">
                  ${isYearly ? plan.priceYearly : plan.priceMonthly}
                </span>
                <span className="text-muted-foreground">
                  /{isYearly ? "year" : "month"}
                </span>
              </div>

              <ul className="space-y-3">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <Check className="h-4 w-4 text-primary mr-2" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button 
                className="w-full" 
                size="lg"
                disabled={!!isLoading}
                onClick={() => handleSubscribe(
                  isYearly ? plan.stripePriceIdYearly : plan.stripePriceIdMonthly,
                  plan.name
                )}
              >
                {isLoading === plan.name && (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                )}
                {isLoading === plan.name ? "Processing..." : "Subscribe Now"}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}