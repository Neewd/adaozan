import Link from "next/link";
import Image from "next/image";

export default function Logo() {
	return (
		<Link href="/">
			<Image
				src="/img/logo-description-white.webp"
				width={500}
				height={500}
				alt="Logo Adaozan"
				priority={true}
				className="object-cover"
			/>
		</Link>
	);
}
