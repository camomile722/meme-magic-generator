import { Box } from "@chakra-ui/react";
import type { Metadata } from "next";
import { Inter, Quicksand } from "next/font/google";
import { Header } from "./components/layout/Header";
import { Providers } from "./providers";
import { Footer } from "./components/layout/Footer";

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Meme Generator App",
  description: "Meme Generator App, built with Next.js und Chakra UI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={quicksand.className}>
        {" "}
        <Providers>
          <Header />
          <Box>{children}</Box>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
