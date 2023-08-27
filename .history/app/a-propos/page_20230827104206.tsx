import { Metadata } from "next";
import Abouts from "../components/Abouts";
import { LogoCloud } from "../components/LogoCloud";
import { Menu } from "../components/Menu";
import { ContactHero } from "../components/ContactHero";

export const metadata: Metadata = {
	title: "Adaozañ",
	description: "Terme breton, définition: recycler, revaloriser",
};

export default function About() {
	return (
		<>
			<div className="flex top-0 sticky w-full z-1 h-[60vh] bg-cream-100 text-brown-100">
				<div className="basis-4/12 p-12 border-r border-brown-100">
					<h1 className="text-3xl font-heading font-bold">
						A propos
					</h1>
				</div>
				<div className="basis-8/12 relative">
					<div className="flex h-full w-full">
						<span className="p-10 self-end text-3xl font-bold font-heading">
							Pour en apprendre plus sur ce projet à impact
							envrionnemental
						</span>
					</div>
				</div>
			</div>
			<Menu />
			<Abouts />
			<LogoCloud />
			<ContactHero />
		</>
	);
}
