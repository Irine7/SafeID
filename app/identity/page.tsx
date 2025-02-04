"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { UserCircle, Upload, Key } from "lucide-react";

export default function IdentityPage() {
  const [loading, setLoading] = useState(false);

  const handleCreateIdentity = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate identity creation
    await new Promise(resolve => setTimeout(resolve, 1500));
    setLoading(false);
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center mb-8">
          <UserCircle className="h-8 w-8 text-primary mr-4" />
          <h1 className="text-3xl font-bold">Identity Management</h1>
        </div>

        <Tabs defaultValue="create" className="space-y-8">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="create">Create Identity</TabsTrigger>
            <TabsTrigger value="documents">Documents</TabsTrigger>
            <TabsTrigger value="recovery">Recovery</TabsTrigger>
          </TabsList>

          <TabsContent value="create">
            <Card className="p-6">
              <form onSubmit={handleCreateIdentity} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="Enter your full name" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Enter your email" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="dob">Date of Birth</Label>
                  <Input id="dob" type="date" />
                </div>

                <Button type="submit" className="w-full" disabled={loading}>
                  {loading ? "Creating Identity..." : "Create Identity"}
                </Button>
              </form>
            </Card>
          </TabsContent>

          <TabsContent value="documents">
            <Card className="p-6">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">Identity Documents</h3>
                    <p className="text-muted-foreground">
                      Upload and manage your identity documents
                    </p>
                  </div>
                  <Button>
                    <Upload className="h-4 w-4 mr-2" />
                    Upload New
                  </Button>
                </div>

                <div className="border rounded-lg p-4 text-center text-muted-foreground">
                  No documents uploaded yet
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="recovery">
            <Card className="p-6">
              <div className="space-y-6">
                <div className="flex items-center">
                  <Key className="h-6 w-6 text-primary mr-4" />
                  <div>
                    <h3 className="text-lg font-semibold">Recovery Settings</h3>
                    <p className="text-muted-foreground">
                      Set up recovery methods for your identity
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="recovery-email">Recovery Email</Label>
                    <Input
                      id="recovery-email"
                      type="email"
                      placeholder="Enter recovery email"
                    />
                  </div>

                  <Button className="w-full">Save Recovery Settings</Button>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}