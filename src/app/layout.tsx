import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({ weight: '400', subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My application main title",
  description: "This is the main description of the application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <header className="px-8 py-5 text-xl border-b">
          Codewithguillaume.com
        </header>
        <div>{children}</div>
      </body>
    </html>
  );
}
