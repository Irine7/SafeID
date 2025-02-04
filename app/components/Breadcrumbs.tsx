"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Breadcrumbs() {
  const pathname = usePathname();
  const pathSegments = pathname.split('/').filter(segment => segment);

  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link href="/">Home</Link>
        </li>
        {pathSegments.map((segment, index) => {
          const path = '/' + pathSegments.slice(0, index + 1).join('/');
          return (
            <li key={index} className="breadcrumb-item">
              <Link href={path}>{decodeURIComponent(segment)}</Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
