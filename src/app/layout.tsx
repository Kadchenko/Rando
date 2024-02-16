import '@styles/globals.css';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rando | Get rid from procrastination',
  description: 'Get rid from procrastination, randomize your daily tasks',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="text-body-1 font-Roboto flex h-dvh flex-col justify-stretch text-black">{children}</body>
    </html>
  );
}
