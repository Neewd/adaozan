import Abouts from "@/components/Abouts";
import { ContactHero } from "@/components/ContactHero";
import Header from "@/components/Header";
import { LogoCloud } from "@/components/LogoCloud";
import { PrestationsHero } from "@/components/PrestationsHero";
import Products from "@/components/Products";
import { Analytics } from "@vercel/analytics/react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Adaozañ",
  description: "Terme breton, définition: recycler, revaloriser",
};

export default async function Home() {
  return (
    <div className="w-full bg-brown-100 relative h-min min-h-full overflow-hidden">
      <Analytics />
      <Header />
      <Products withDescription={false} />
      <Abouts />
      <LogoCloud />
      <PrestationsHero />
      <ContactHero />
    </div>
  );
}
