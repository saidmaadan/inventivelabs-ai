"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  LayoutDashboard, 
  FileText, 
  Briefcase, 
  Wrench, 
  CaseStudy, 
  MessageSquare,
  Users,
  LogOut 
} from "lucide-react";
import { signOut } from "next-auth/react";

const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/admin",
  },
  {
    label: "Blog Posts",
    icon: FileText,
    href: "/admin/posts",
  },
  {
    label: "Projects",
    icon: Briefcase,
    href: "/admin/projects",
  },
  {
    label: "Services",
    icon: Wrench,
    href: "/admin/services",
  },
  {
    label: "Use Cases",
    icon: CaseStudy,
    href: "/admin/use-cases",
  },
  {
    label: "Inquiries",
    icon: MessageSquare,
    href: "/admin/inquiries",
  },
  {
    label: "Users",
    icon: Users,
    href: "/admin/users",
  },
];

export function AdminSidebar() {
  const pathname = usePathname();

  return (
    <div className="w-64 border-r bg-muted/50 min-h-screen">
      <div className="p-6">
        <h1 className="text-xl font-bold">Admin Panel</h1>
      </div>
      <ScrollArea className="h-[calc(100vh-8rem)]">
        <div className="space-y-1 p-4">
          {routes.map((route) => (
            <Button
              key={route.href}
              variant={pathname === route.href ? "secondary" : "ghost"}
              className="w-full justify-start"
              asChild
            >
              <Link href={route.href}>
                <route.icon className="mr-2 h-4 w-4" />
                {route.label}
              </Link>
            </Button>
          ))}
          <Button
            variant="ghost"
            className="w-full justify-start text-red-500 hover:text-red-600 hover:bg-red-100"
            onClick={() => signOut()}
          >
            <LogOut className="mr-2 h-4 w-4" />
            Sign Out
          </Button>
        </div>
      </ScrollArea>
    </div>
  );
}