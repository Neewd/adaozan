import Link from "next/link";
import Image from "next/image";

export function Menu() {
	return (
		<>
			<div className="flex h-20 border-y border-cream-100 z-20 sticky top-[-2px] bg-brown-100">
				<div className="basis-4/12 border-r flex items-center bg-brown-100 text-cream-100">
					<div className="w-full px-4 h-full items-center flex">
						<Link href="/" className="flex w-24 relative">
							<Image
								className="flex"
								src="/img/logo-tilde-white.png"
								alt="Link to home page"
								width={40}
								height={35}
							/>
						</Link>
					</div>
				</div>
				<div className="basis-8/12 flex justify-around items-center h-full bg-brown-100/40">
					<div className="text-cream-100 group text-lg flex-1 flex items-center justify-center cursor-pointer">
						<Link
							href="/produits"
							className="group-hover:font-bold"
						>
							Produits
						</Link>
					</div>
					<div className="text-cream-100 text-lg group flex-1 px-4  flex items-center justify-center cursor-pointer">
						<Link
							href="/a-propos"
							className="group-hover:font-bold"
						>
							A propos
						</Link>
					</div>
					<div className="text-cream-100 text-lg group flex-1 flex px-4 items-center justify-center cursor-pointer">
						<Link href="/contact" className="group-hover:font-bold">
							Contact
						</Link>
					</div>
				</div>
			</div>
		</>
	);
}
