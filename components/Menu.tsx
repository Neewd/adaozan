"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import classNames from "classnames";

export function Menu({ className }: { className?: string }) {
	const currentRoute = usePathname();
	return (
		<div className={className}>
			<div className="flex h-20 border-y border-cream-100 z-20 sticky top-[-2px] bg-brown-100 flex-1">
				<div className="basis-4/12 border-r flex items-center bg-brown-100 text-cream-100">
					<div className="w-full px-4 h-full items-center flex">
						<Link
							href="/"
							className={classNames("flex w-24 relative", {
								"font-bold": currentRoute === "/",
							})}
						>
							<Image
								className="flex"
								src="/img/logo-tilde-white.webp"
								alt="Link to home page"
								width={25}
								height={35}
							/>
						</Link>
					</div>
				</div>
				<div className="basis-8/12 flex justify-around items-center h-full bg-brown-100/40">
					<div className="text-cream-100 group text-lg flex-1 flex items-center justify-center cursor-pointer border-r border-r-cream-100 h-full">
						<Link
							href="/produits"
							className={classNames("group-hover:font-semibold", {
								"font-bold": currentRoute === "/produits",
							})}
						>
							Produits
						</Link>
					</div>
					<div className="text-cream-100 text-lg group flex-1 px-4  flex items-center justify-center cursor-pointer border-r border-r-cream-100 h-full">
						<Link
							href="/a-propos"
							className={classNames("group-hover:font-semibold", {
								"font-bold": currentRoute === "/a-propos",
							})}
						>
							À propos
						</Link>
					</div>
					<div className="text-cream-100 text-lg group flex-1 flex px-4 items-center justify-center cursor-pointer">
						<Link
							href="/contact"
							className={classNames("group-hover:font-semibold", {
								"font-bold": currentRoute === "/contact",
							})}
						>
							Contact
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
