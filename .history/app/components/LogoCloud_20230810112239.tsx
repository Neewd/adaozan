import Image from "next/image";

export const LogoCloud = ({ logos }: { logos: string[] }) => {
	return (
		<div className="flex w-full h-[500px] bg-cream-100 cursor-pointer">
			{logos.map((logo) => {
				return <div key={logo}>Logo</div>;
			})}
		</div>
	);
};
