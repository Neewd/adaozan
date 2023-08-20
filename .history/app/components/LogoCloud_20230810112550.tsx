import Image from "next/image";

export const LogoCloud = ({ logos }: { logos: string[] }) => {
	return (
		<div className="flex w-full bg-cream-100 ">
			{logos.map((logo) => {
				return (
					<div classNam="" key={logo}>
						Logo
					</div>
				);
			})}
		</div>
	);
};
