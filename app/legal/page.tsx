import Image from "next/image";
import { ContactHero } from "@/components/ContactHero";
import { Menu } from "@/components/Menu";
import Logo from "@/components/Logo";

export default function Legal() {
	return (
		<>
			<div className="w-full bg-brown-100 relative h-min min-h-full">
				<div className="flex top-0 sticky w-full z-1 h-[20vh]">
					<div className="basis-4/12 p-6 flex flex-col justify-between">
						<Logo />
					</div>
					<div className="basis-8/12 relative p-6 flex flex-col justify-between items-end">
						<span className="text-lg font-heading text-cream-100">
							Mentions Légales
						</span>
						<span className="text-lg font-heading text-cream-100">
							Propriétaire du site, Crédit et hébergements
						</span>
					</div>
				</div>
				<Menu />

				<div className="flex border-b border-r-brown-100 bg-cream-100 relative text-brown-100 font-heading">
					<div className="flex flex-1 border-r border-brown-100 p-6 flex-col">
						<h2 className="font-bold mb-4">Propriétaire du site</h2>
						<span>ADAOZAN SAS</span>
						<span>3 Place Charles de Gaulle</span>
						<span>29300 Quimperlé</span>
						<br />
						<span className="font-bold">contact@adaozan.fr</span>
						<br />
						<span>Dénomination sociale: Adaozan SAS</span>
						<span>
							Forme juridiqu: Société par actions simpliiée
						</span>
						<span>Capital social: 15.000€</span>
						<br />
						<span>SIREN: 949724066</span>
						<span>RCS: Quimper B 848 724 066</span>
						<span>TVA: FR37949724066</span>
					</div>
					<div className="flex flex-1 flex-col">
						<div className="flex p-6 flex-col border-b border-brown-100">
							<h2 className="mb-4 font-bold">CREDITS</h2>
							<span>Conception du site: Clément Bacouelle</span>
							<span>Identité graphique: ADAOZAN SAS</span>
							<span>Photographies: ADAOZAN SAS</span>
							<span>Textes: ADAOZAN SAS</span>
						</div>
						<div className="flex flex-col p-6 ">
							<h2 className="mb-4 font-bold">HEBERGEMENTS</h2>
							<span>IONOS 1&1 Internet SARL</span>
							<span>7, place de la Gare BP70109</span>
							<span>57201 Sarreguemines Cedex</span>
							<span>www.ionos.fr</span>
						</div>
					</div>
				</div>
				<ContactHero />
			</div>
		</>
	);
}
