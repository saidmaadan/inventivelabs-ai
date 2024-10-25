import { ProjectsGrid } from "@/components/projects/projects-grid";
import { ProjectsHero } from "@/components/projects/projects-hero";

export const metadata = {
  title: "Our Projects - DevCraft",
  description: "Explore our portfolio of successful software development projects.",
};

export default function ProjectsPage() {
  return (
    <>
      <ProjectsHero />
      <ProjectsGrid />
    </>
  );
}