import Head from "next/head";
import localFont from "next/font/local";
import "./globals.css";

// Import custom fonts with Tailwind-compatible variables
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Metadata for SEO
export const metadata = {
  title: "Owambe",
  description: "Plan events with friends and family",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        {/* Add the viewport meta tag for mobile responsiveness */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
