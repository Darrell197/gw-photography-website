import type { Metadata } from "next";
import "./globals.css";
import Footer from "./components/footer";

export const metadata: Metadata = {
  title: {
    default: "GW Photography — Grace Westray",
    template: "%s — GW Photography",
  },
  description:
    "Manchester wedding, event, lifestyle and studio photography by Grace Westray — editorially minded, personal and made to last.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}<Footer /></body>
    </html>
  );
}
