import { ProjectsList } from "@/components/admin/projects/projects-list";

export const metadata = {
  title: "Manage Projects - Admin Dashboard",
  description: "Create, edit, and manage portfolio projects.",
};

export default function ProjectsPage() {
  return <ProjectsList />;
}