import { UseCasesHero } from "@/components/use-cases/hero-section";
import { UseCasesList } from "@/components/use-cases/cases-list";
import { IndustriesSection } from "@/components/use-cases/industries-section";
import { CTASection } from "@/components/use-cases/cta-section";

export const metadata = {
  title: "Use Cases - DevCraft",
  description: "Explore real-world applications of our software solutions across various industries.",
};

export default function UseCasesPage() {
  return (
    <>
      <UseCasesHero />
      <UseCasesList />
      <IndustriesSection />
      <CTASection />
    </>
  );
}