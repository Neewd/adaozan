import Link from "next/link";

export function Menu() {
	return (
		<>
			<div className="flex h-20 border-y border-brown-100 z-20 sticky top-[-2px] bg-cream-100">
				<div className="basis-4/12 border-r px-6 flex items-center bg-cream-100 text-brown-100">
					<Link href="/" className="px-6 font-bold">
						Adaozan
					</Link>
				</div>
				<div className="basis-8/12 flex justify-around items-center h-full bg-cream-100/40">
					<div className="text-brown-100 group text-lg flex-1 flex items-center justify-center cursor-pointer">
						<Link
							href="/produits"
							className="group-hover:font-bold"
						>
							Produits
						</Link>
					</div>
					<div className="text-brown-100 text-lg group flex-1 px-4  flex items-center justify-center cursor-pointer">
						<Link
							href="/a-propos"
							className="group-hover:font-bold"
						>
							A propos
						</Link>
					</div>
					<div className="text-brown-100 text-lg group flex-1 flex px-4 items-center justify-center cursor-pointer">
						<Link href="/contact" className="group-hover:font-bold">
							Contact
						</Link>
					</div>
				</div>
			</div>
		</>
	);
}
