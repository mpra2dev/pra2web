"use client";

import { usePathname } from "next/navigation";

import { Footer } from "@/components/Footer";
import { NexumFooter } from "@/components/NexumFooter";

export function FooterRouter() {
  const pathname = usePathname();

  if (pathname === "/nexum-industries") {
    return <NexumFooter />;
  }

  return <Footer />;
}
