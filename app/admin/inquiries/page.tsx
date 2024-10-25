import { InquiriesList } from "@/components/admin/inquiries/inquiries-list";

export const metadata = {
  title: "Manage Inquiries - Admin Dashboard",
  description: "View and manage contact form submissions.",
};

export default function InquiriesPage() {
  return <InquiriesList />;
}