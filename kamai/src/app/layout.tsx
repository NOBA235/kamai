import "./globals.css";
import type { Metadata } from "next";
export const metadata: Metadata = { title: "Kamai — what riders really get paid", description: "Anonymous, confirmable gig-worker payouts on Arkiv. Nobody can delete them." };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en"><body className="min-h-screen">{children}</body></html>);
}
