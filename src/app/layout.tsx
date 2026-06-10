import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";



export const metadata: Metadata = {
  title: "Luckyw0lf.nl",
  description: "An info page about Luckyw0lf.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        <Header/>
        {children}
      </body>
    </html>
  );
}
