import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'William Justin — Backend Software Engineer & AI Tooling',
    description:
        'Portfolio of William Justin, a backend software engineer specializing in scalable systems, computer vision, and AI tooling built with Claude and MCP. Projects include GAN-based face generation, image colorization, and open-source ML tools.',
    keywords: [
        'William Justin',
        'Backend Software Engineer',
        'Software Engineer Portfolio',
        'MCP',
        'Claude AI Tooling',
        'GAN',
        'Computer Vision',
        'Machine Learning Engineer',
        'Traveloka',
        'Samsung Research Indonesia',
    ],
    authors: [{ name: 'William Justin', url: 'https://xu-justin.github.io' }],
    metadataBase: new URL('https://xu-justin.github.io'),
    alternates: {
        canonical: '/',
    },
    openGraph: {
        title: 'William Justin — Backend Software Engineer & AI Tooling',
        description:
            'Backend engineer building scalable systems and AI tooling. See projects in computer vision, GANs, and Claude-powered internal tools.',
        url: 'https://xu-justin.github.io',
        siteName: 'William Justin',
        images: [
            {
                url: '/og-image.png',
                width: 1200,
                height: 630,
                alt: 'William Justin — Backend Software Engineer',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'William Justin — Backend Software Engineer & AI Tooling',
        description:
            'Backend engineer building scalable systems and AI tooling with Claude and MCP.',
        images: ['/og-image.png'],
    },
    icons: {
        icon: '/favicon.ico',
    },
};