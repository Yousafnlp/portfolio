/* eslint-disable @next/next/no-sync-scripts */
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Yousaf Ijaz Munawar",
  description: "Frontend Developer - Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
      </head>
      <body className={`${inter.className} bg-[#0a0a0a]`}>
        {children}
        <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
        <script
          dangerouslySetInnerHTML={{ __html: "AOS.init({ once: true });" }}
        />
      </body>
    </html>
  );
}
