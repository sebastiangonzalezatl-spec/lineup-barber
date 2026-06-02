import './globals.css';

export const metadata = {
  title: 'LineUp — Book your barber, skip the wait',
  description: 'LineUp connects you with solo barbers in your city. Book in seconds, join the ASAP waitlist, and never miss a last-minute slot again.',
  keywords: 'barber, booking, haircut, ASAP queue, appointment',
  openGraph: {
    title: 'LineUp — Book your barber, skip the wait',
    description: 'Find and book top-rated barbers near you. Join the ASAP queue for last-minute slots.',
    url: 'https://getlineup.us',
    siteName: 'LineUp',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/tabler-icons.min.css"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
