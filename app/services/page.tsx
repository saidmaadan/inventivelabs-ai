import { HeroSection } from "@/components/services/hero-section";
import { ServicesList } from "@/components/services/services-list";
import { ProcessSection } from "@/components/services/process-section";
import { CTASection } from "@/components/services/cta-section";

export const metadata = {
  title: "Our Services - DevCraft",
  description: "Explore our comprehensive software development services tailored to your business needs.",
};

export default function ServicesPage() {
  return (
    <>
      <HeroSection />
      <ServicesList />
      <ProcessSection />
      <CTASection />
    </>
  );
}