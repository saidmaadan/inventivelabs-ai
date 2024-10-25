"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";
import { Mail } from "lucide-react";

interface ViewInquiryDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  inquiry: any;
}

export function ViewInquiryDialog({
  open,
  onOpenChange,
  inquiry,
}: ViewInquiryDialogProps) {
  if (!inquiry) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Inquiry Details</DialogTitle>
          <DialogDescription>
            View the complete inquiry information.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-semibold">{inquiry.subject}</h3>
              <p className="text-sm text-muted-foreground">
                Received on {format(inquiry.createdAt, "PPP")}
              </p>
            </div>
            <Badge
              variant={
                inquiry.status === "new"
                  ? "default"
                  : inquiry.status === "in-progress"
                  ? "warning"
                  : "secondary"
              }
            >
              {inquiry.status === "new"
                ? "New"
                : inquiry.status === "in-progress"
                ? "In Progress"
                : "Archived"}
            </Badge>
          </div>

          <div className="space-y-2">
            <div>
              <span className="text-sm font-medium">From:</span>
              <p>{inquiry.name}</p>
            </div>
            <div>
              <span className="text-sm font-medium">Email:</span>
              <p>{inquiry.email}</p>
            </div>
          </div>

          <div>
            <span className="text-sm font-medium">Message:</span>
            <p className="mt-2 whitespace-pre-wrap">{inquiry.message}</p>
          </div>

          <div className="flex justify-end space-x-2">
            <Button
              variant="outline"
              onClick={() => onOpenChange(false)}
            >
              Close
            </Button>
            <Button
              onClick={() =>
                window.location.href = `mailto:${inquiry.email}`
              }
            >
              <Mail className="mr-2 h-4 w-4" />
              Reply via Email
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}