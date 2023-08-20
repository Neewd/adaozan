import Image from "next/image";

export const LogoCloud = ({ logos }: { logos: string[] }) => {
	return (
		<div className="flex w-full bg-cream-100 ">
			{logos.map((logo) => {
				return (
					<div
						className="px-12 py-12 border-b border-r border-brown-100"
						key={logo}
					>
						Logo
					</div>
				);
			})}
		</div>
	);
};
