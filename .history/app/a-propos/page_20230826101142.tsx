import Image from "next/image";
import ImageCovered from "../components/ImageCovered";

function About() {
	return (
		<>
			<div className="flex top-0 sticky w-full z-1 h-[90vh]">
				<div className="basis-4/12 p-12 border-r border-brown-100">
					<Image
						src="/img/logo.png"
						width={500}
						height={500}
						alt="Logo Adaozan"
					/>
				</div>
				<div className="basis-8/12 relative">
					<ImageCovered
						imageUrl="/img/valorisation-marc-de-pomme.webp"
						imageAlt="Valorisation marc de pomme"
					/>
				</div>
			</div>
		</>
	);
}
