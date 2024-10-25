import { BlogHero } from "@/components/blog/blog-hero";
import { BlogGrid } from "@/components/blog/blog-grid";
import { NewsletterSection } from "@/components/blog/newsletter-section";

export const metadata = {
  title: "Blog - DevCraft",
  description: "Insights and articles about software development, technology trends, and digital innovation.",
};

export default function BlogPage() {
  return (
    <>
      <BlogHero />
      <BlogGrid />
      <NewsletterSection />
    </>
  );
}