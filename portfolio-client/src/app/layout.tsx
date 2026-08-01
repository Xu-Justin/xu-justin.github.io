import { fontMono, fontSans } from '@/config/font';
import { ReactNode } from 'react';
import './globals.css';

export { metadata } from '@/config/metadata';

export default function RootLayout({
    children,
}: Readonly<{
    children: ReactNode;
}>) {
    return (
        <html lang="en" className={`${fontSans.variable} ${fontMono.variable} min-h-svh max-w-screen font-sans text-neutral-900 text-pretty bg-background antialiased overflow-x-hidden`}>
        <body className="min-h-full flex flex-col">
        {children}
        </body>
        </html>
    );
}
