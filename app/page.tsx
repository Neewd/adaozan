import { Metadata } from "next";
import { LogoCloud } from "@/components/LogoCloud";
import { ContactHero } from "@/components/ContactHero";
import { Menu } from "@/components/Menu";
import Image from "next/image";
import Products from "@/components/Products";
import Abouts from "@/components/Abouts";
import { PrestationsHero } from "@/components/PrestationsHero";
import Logo from "@/components/Logo";
import Header from "@/components/Header";

export const metadata: Metadata = {
	title: "Adaozañ",
	description: "Terme breton, définition: recycler, revaloriser",
};

export default async function Home() {
	return (
		<div className="w-full bg-brown-100 relative h-min min-h-full overflow-hidden">
			<Header />
			<Products withDescription={false} />
			<Abouts />
			<LogoCloud />
			<PrestationsHero />
			<ContactHero />
		</div>
	);
}
