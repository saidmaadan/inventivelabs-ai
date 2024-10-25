import { PostsList } from "@/components/admin/posts/posts-list";

export const metadata = {
  title: "Manage Blog Posts - Admin Dashboard",
  description: "Create, edit, and manage blog posts.",
};

export default function PostsPage() {
  return <PostsList />;
}