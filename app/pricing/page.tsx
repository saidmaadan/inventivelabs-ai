import { PricingPlans } from "@/components/pricing/pricing-plans";
import { PricingFAQ } from "@/components/pricing/pricing-faq";

export const metadata = {
  title: "Pricing - DevCraft",
  description: "Choose the perfect plan for your business needs.",
};

export default function PricingPage() {
  return (
    <>
      <section className="py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-muted-foreground">
              Choose the perfect plan for your business needs. All plans include a 14-day free trial.
            </p>
          </div>
          <PricingPlans />
        </div>
      </section>
      <PricingFAQ />
    </>
  );
}