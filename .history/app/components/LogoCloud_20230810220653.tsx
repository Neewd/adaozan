import Image from "next/image";

export const LogoCloud = ({ logos }: { logos: string[] }) => {
	return (
		<div className="flex w-full bg-cream-100 z-20">
			{logos.map((logo) => {
				return (
					<div
						className="px-12 py-12 flex-1 border-r bg-cream-100 border-brown-100"
						key={logo}
					>
						<Image src={logo} width={200} height={200} alt="" />
					</div>
				);
			})}
		</div>
	);
};
