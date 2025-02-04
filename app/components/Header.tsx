"use client";

import Breadcrumbs from './Breadcrumbs';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="header flex items-center justify-between">
      <Breadcrumbs />
      <div className="flex items-center">
        <Image src="/path/to/logo.png" alt="Logo" width={40} height={40} />
        <div className="auth-button ml-4">
          <Link href="/auth/icp">Авторизация через ICP</Link>
        </div>
      </div>
    </header>
  );
}
