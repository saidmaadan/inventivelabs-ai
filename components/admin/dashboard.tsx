"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  FileText, 
  Briefcase, 
  MessageSquare, 
  Users,
  TrendingUp,
  Clock
} from "lucide-react";

const stats = [
  {
    label: "Total Posts",
    value: "24",
    icon: FileText,
    description: "Blog posts published"
  },
  {
    label: "Projects",
    value: "12",
    icon: Briefcase,
    description: "Active projects"
  },
  {
    label: "Inquiries",
    value: "48",
    icon: MessageSquare,
    description: "New inquiries this month"
  },
  {
    label: "Users",
    value: "3",
    icon: Users,
    description: "Admin users"
  }
];

const recentActivity = [
  {
    action: "New inquiry received",
    time: "5 minutes ago",
    icon: MessageSquare
  },
  {
    action: "Blog post published",
    time: "2 hours ago",
    icon: FileText
  },
  {
    action: "Project updated",
    time: "4 hours ago",
    icon: Briefcase
  }
];

export function AdminDashboard() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold mb-8">Dashboard Overview</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.label}
                </CardTitle>
                <stat.icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground">
                  {stat.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4" />
              Performance Overview
            </CardTitle>
          </CardHeader>
          <CardContent>
            {/* Add charts/graphs here */}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              Recent Activity
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-center gap-4">
                  <activity.icon className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">{activity.action}</p>
                    <p className="text-xs text-muted-foreground">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}