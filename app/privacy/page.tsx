"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Settings, Lock, Eye, History } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function PrivacyPage() {
  const [permissions, setPermissions] = useState({
    shareEmail: false,
    shareAge: false,
    shareAddress: false,
    notifications: true,
  });

  const togglePermission = (key: keyof typeof permissions) => {
    setPermissions(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center mb-8">
          <Settings className="h-8 w-8 text-primary mr-4" />
          <h1 className="text-3xl font-bold">Privacy Settings</h1>
        </div>

        <div className="grid gap-8">
          <Card className="p-6">
            <div className="flex items-center mb-6">
              <Lock className="h-6 w-6 text-primary mr-4" />
              <div>
                <h2 className="text-xl font-semibold">Data Sharing Preferences</h2>
                <p className="text-muted-foreground">
                  Control how your identity information is shared
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <label className="text-sm font-medium">Share Email Address</label>
                  <p className="text-sm text-muted-foreground">
                    Allow verified services to access your email
                  </p>
                </div>
                <Switch
                  checked={permissions.shareEmail}
                  onCheckedChange={() => togglePermission("shareEmail")}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <label className="text-sm font-medium">Share Age Verification</label>
                  <p className="text-sm text-muted-foreground">
                    Allow age verification without revealing exact date
                  </p>
                </div>
                <Switch
                  checked={permissions.shareAge}
                  onCheckedChange={() => togglePermission("shareAge")}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <label className="text-sm font-medium">Share Address</label>
                  <p className="text-sm text-muted-foreground">
                    Allow address verification for services
                  </p>
                </div>
                <Switch
                  checked={permissions.shareAddress}
                  onCheckedChange={() => togglePermission("shareAddress")}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <label className="text-sm font-medium">Verification Notifications</label>
                  <p className="text-sm text-muted-foreground">
                    Receive alerts for verification requests
                  </p>
                </div>
                <Switch
                  checked={permissions.notifications}
                  onCheckedChange={() => togglePermission("notifications")}
                />
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center mb-6">
              <Eye className="h-6 w-6 text-primary mr-4" />
              <div>
                <h2 className="text-xl font-semibold">Access Log</h2>
                <p className="text-muted-foreground">
                  Recent identity verification requests
                </p>
              </div>
            </div>

            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Service</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Example Service</TableCell>
                  <TableCell>Age Verification</TableCell>
                  <TableCell>2024-03-20</TableCell>
                  <TableCell>
                    <span className="text-green-600 dark:text-green-400">
                      Approved
                    </span>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Test App</TableCell>
                  <TableCell>Identity Check</TableCell>
                  <TableCell>2024-03-19</TableCell>
                  <TableCell>
                    <span className="text-red-600 dark:text-red-400">
                      Denied
                    </span>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Card>

          <Card className="p-6">
            <div className="flex items-center mb-6">
              <History className="h-6 w-6 text-primary mr-4" />
              <div>
                <h2 className="text-xl font-semibold">Data Retention</h2>
                <p className="text-muted-foreground">
                  Manage how long your data is stored
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-sm">
                Your identity data is stored securely and can be removed at any time.
                Verification history is kept for 30 days by default.
              </p>
              <Button variant="destructive">
                Delete All Data
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}