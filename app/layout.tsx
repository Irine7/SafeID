import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { AuthProvider } from '@/components/auth-provider';
import Header from './components/Header';
import { AuthButton } from '@/components/auth-button';
import { Shield } from 'lucide-react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'SafeID - Secure Identity Verification',
	description:
		'Secure, decentralized identity verification system with privacy at its core',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<AuthProvider>
					<main className="min-h-screen">
						<div className="container mx-auto px-4 py-16 ">
							<div className="flex justify-between">
								<a href="/" className="flex items-center justify-center mb-6">
									<Shield className="h-12 w-12 text-primary" />
									<h1 className="text-4xl font-bold ml-4">SafeID</h1>
								</a>
								<AuthButton />
							</div>
							{children}
						</div>
					</main>
				</AuthProvider>
			</body>
		</html>
	);
}
