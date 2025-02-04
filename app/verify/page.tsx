"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FileCheck, Shield, Clock } from "lucide-react";
import { Progress } from "@/components/ui/progress";

export default function VerifyPage() {
  const [verificationStatus, setVerificationStatus] = useState<string>("idle");
  const [progress, setProgress] = useState(0);

  const startVerification = async () => {
    setVerificationStatus("processing");
    setProgress(0);
    
    // Simulate verification process
    for (let i = 0; i <= 100; i += 20) {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setProgress(i);
    }
    
    setVerificationStatus("complete");
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center mb-8">
          <FileCheck className="h-8 w-8 text-primary mr-4" />
          <h1 className="text-3xl font-bold">Verification Center</h1>
        </div>

        <div className="grid gap-8">
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Request Verification</h2>
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">Verification Type</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select verification type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="age">Age Verification</SelectItem>
                    <SelectItem value="identity">Identity Verification</SelectItem>
                    <SelectItem value="address">Address Verification</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Verification Provider</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select provider" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="gov">Government ID</SelectItem>
                    <SelectItem value="bank">Bank Statement</SelectItem>
                    <SelectItem value="utility">Utility Bill</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button
                className="w-full"
                onClick={startVerification}
                disabled={verificationStatus === "processing"}
              >
                Start Verification
              </Button>
            </div>
          </Card>

          {verificationStatus !== "idle" && (
            <Card className="p-6">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    {verificationStatus === "processing" ? (
                      <Clock className="h-5 w-5 text-primary mr-2" />
                    ) : (
                      <Shield className="h-5 w-5 text-green-500 mr-2" />
                    )}
                    <h3 className="font-semibold">
                      {verificationStatus === "processing"
                        ? "Verification in Progress"
                        : "Verification Complete"}
                    </h3>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {progress}%
                  </span>
                </div>

                <Progress value={progress} className="w-full" />

                {verificationStatus === "complete" && (
                  <div className="bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 p-4 rounded-lg">
                    <p className="text-sm">
                      Verification completed successfully. Your identity has been verified
                      with zero-knowledge proof.
                    </p>
                  </div>
                )}
              </div>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}