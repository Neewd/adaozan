import { Metadata } from "next";
import { LogoCloud } from "@/components/LogoCloud";
import { ContactHero } from "@/components/ContactHero";
import { Menu } from "@/components/Menu";
import Image from "next/image";
import Products from "@/components/Products";
import Abouts from "@/components/Abouts";
import { PrestationsHero } from "@/components/PrestationsHero";
import Logo from "@/components/Logo";

export const metadata: Metadata = {
	title: "Adaozañ",
	description: "Terme breton, définition: recycler, revaloriser",
};

export default async function Home() {
	return (
		<div className="w-full bg-brown-100 relative h-min min-h-full">
			<div className="flex top-0 sticky w-full z-1 h-[90vh]">
				<div className="basis-4/12 p-6 flex flex-col justify-between">
					<Logo />
					<div className="flex flex-col gap-4 text-2xl font-heading">
						<span className="text-cream-100">
							Un éco-matériau local et innovant valorisant les
							déchets de pommes issus de l’industrie du cidre pour
							des objets artisanaux éthiques et naturels
						</span>
						<span className="text-cream-100 font-heading-italic italic">
							Quimperlé, Finistère Sud
						</span>
					</div>
				</div>
				<div className="basis-8/12 relative p-12">
					<Image
						className="p-4 object-cover"
						src="/img/valorisation-marc-de-pomme.webp"
						alt="Valorisation marc de pomme"
						fill={true}
						priority={true}
					/>
				</div>
			</div>
			<Menu />
			<Products withDescription={false} />
			<Abouts />
			<LogoCloud />
			<PrestationsHero />
			<ContactHero />
		</div>
	);
}
