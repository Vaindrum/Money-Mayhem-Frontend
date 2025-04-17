"use client";

import dynamic from 'next/dynamic';
import React, { useEffect } from 'react';

const MockServiceWorker = dynamic(
  async () => {
    if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
      const { worker } = await import('../mocks/browser');
      return () => {
        useEffect(() => {
          worker.start();
        }, []);
        return null; // This component doesn't render anything visible
      };
    } else {
      return () => null; // Don't load MSW if not enabled
    }
  },
  { ssr: false, loading: () => null } // No SSR, no loading UI needed
);

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <MockServiceWorker /> {/* Render the dynamic component */}
      {children}
    </>
  );
}