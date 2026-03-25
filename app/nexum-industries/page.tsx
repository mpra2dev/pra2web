import type { Metadata } from "next";

import { NexumIndustriesLanding } from "./NexumIndustriesLanding";

export const metadata: Metadata = {
  title: "Nexum Industries | Mantenimiento y fabricación industrial",
  description:
    "Servicios de mantenimiento industrial, fabricación y soporte técnico para plantas, líneas de producción e instalaciones industriales.",
  alternates: {
    canonical: "/nexum-industries",
  },
};

export default function Page() {
  return <NexumIndustriesLanding />;
}
