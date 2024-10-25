"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ViewInquiryDialog } from "./view-inquiry-dialog";
import { format } from "date-fns";
import { MoreHorizontal } from "lucide-react";

const inquiries = [
  {
    id: 1,
    name: "John Smith",
    email: "john@example.com",
    subject: "Project Inquiry",
    message: "I'm interested in building a web application...",
    status: "new",
    createdAt: new Date(),
  },
  {
    id: 2,
    name: "Sarah Johnson",
    email: "sarah@example.com",
    subject: "Consultation Request",
    message: "Would like to schedule a consultation...",
    status: "in-progress",
    createdAt: new Date(),
  },
];

const statusMap = {
  new: { label: "New", variant: "default" },
  "in-progress": { label: "In Progress", variant: "warning" },
  completed: { label: "Completed", variant: "success" },
  archived: { label: "Archived", variant: "secondary" },
} as const;

export function InquiriesList() {
  const [selectedInquiry, setSelectedInquiry] = useState<any>(null);
  const [isViewOpen, setIsViewOpen] = useState(false);

  const handleView = (inquiry: any) => {
    setSelectedInquiry(inquiry);
    setIsViewOpen(true);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Inquiries</h2>
        <p className="text-muted-foreground">
          Manage and respond to contact form submissions.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Inquiries</CardTitle>
          <CardDescription>
            View and manage all incoming inquiries.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Subject</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date</TableHead>
                <TableHead className="w-[70px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {inquiries.map((inquiry) => (
                <TableRow key={inquiry.id}>
                  <TableCell className="font-medium">{inquiry.name}</TableCell>
                  <TableCell>{inquiry.email}</TableCell>
                  <TableCell>{inquiry.subject}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        statusMap[
                          inquiry.status as keyof typeof statusMap
                        ].variant as any
                      }
                    >
                      {statusMap[inquiry.status as keyof typeof statusMap].label}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    {format(inquiry.createdAt, "MMM d, yyyy")}
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => handleView(inquiry)}>
                          View Details
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() =>
                            window.location.href = `mailto:${inquiry.email}`
                          }
                        >
                          Reply via Email
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600">
                          Archive
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <ViewInquiryDialog
        open={isViewOpen}
        onOpenChange={setIsViewOpen}
        inquiry={selectedInquiry}
      />
    </div>
  );
}