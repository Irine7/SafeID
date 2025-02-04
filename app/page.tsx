"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Shield, UserCircle, FileCheck, Settings, LogIn } from "lucide-react";
import Link from "next/link";
import { useAuth } from "@/components/auth-provider";

export default function Home() {
  const { isAuthenticated, login, loading } = useAuth();

  return (
    <div className="text-center mb-16">
      <div>
        
      </div>
      <p className="text-xl text-muted-foreground mx-auto mb-8">
        Secure, decentralized identity verification system with privacy at its core
      </p>

      {!loading && (
        <>
          {isAuthenticated ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-col items-center text-center">
                  <UserCircle className="h-12 w-12 text-primary mb-4" />
                  <h2 className="text-xl font-semibold mb-2">Identity Management</h2>
                  <p className="text-muted-foreground mb-4">
                    Create and manage your self-sovereign identity with complete control
                  </p>
                  <Link href="/identity">
                    <Button>Get Started</Button>
                  </Link>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-col items-center text-center">
                  <FileCheck className="h-12 w-12 text-primary mb-4" />
                  <h2 className="text-xl font-semibold mb-2">Verification Center</h2>
                  <p className="text-muted-foreground mb-4">
                    Request and manage identity verifications with zero-knowledge proofs
                  </p>
                  <Link href="/verify">
                    <Button>Verify Identity</Button>
                  </Link>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-col items-center text-center">
                  <Settings className="h-12 w-12 text-primary mb-4" />
                  <h2 className="text-xl font-semibold mb-2">Privacy Controls</h2>
                  <p className="text-muted-foreground mb-4">
                    Manage your data access permissions and consent settings
                  </p>
                  <Link href="/privacy">
                    <Button>Manage Settings</Button>
                  </Link>
                </div>
              </Card>
            </div>
          ) : (
            <div className="max-w-md mx-auto text-center mb-16">
              <Card className="p-8">
                <LogIn className="h-12 w-12 text-primary mx-auto mb-4" />
                <h2 className="text-xl font-semibold mb-4">Connect Your Identity</h2>
                <p className="text-muted-foreground mb-6">
                  Sign in with Internet Computer to access identity management features
                </p>
                <Button onClick={() => login()} className="w-full">
                  Connect Identity
                </Button>
              </Card>
            </div>
          )}
        </>
      )}

      <div className="mt-16 text-center">
        <h2 className="text-2xl font-semibold mb-8">Why Choose SafeID?</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div>
            <h3 className="font-semibold mb-2">Decentralized</h3>
            <p className="text-muted-foreground">
              Your identity remains under your control, not stored in centralized databases
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Private</h3>
            <p className="text-muted-foreground">
              Zero-knowledge proofs ensure your data stays private while proving claims
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Secure</h3>
            <p className="text-muted-foreground">
              End-to-end encryption and advanced security measures protect your identity
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}