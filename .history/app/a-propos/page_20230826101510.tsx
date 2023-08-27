import Image from "next/image";
import ImageCovered from "../components/ImageCovered";

export default function About() {
	return (
		<>
			<div className="flex top-0 sticky w-full z-1 h-[90vh] border-b border-brown-100 bg-cream-100 text-brown-100">
				<div className="basis-4/12 p-12 border-r border-brown-100">
					<h1 className="">A propos</h1>
				</div>
				<div className="basis-8/12 relative">
					<div className="flex h-full w-full">
						<span>
							Pour en apprendre plus sur ce projet à impact
							envrionnemental
						</span>
					</div>
				</div>
			</div>
		</>
	);
}
