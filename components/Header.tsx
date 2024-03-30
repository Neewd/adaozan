'use client';

import Image from "next/image";
import Logo from "@/components/Logo";
import {Menu} from "@/components/Menu";
import HeaderMobile from "@/components/HeaderMobile";

export default function Header() {


    return (
        <>
            <div className="hidden sm:flex top-0 sticky w-full z-1 h-[90vh] ">
                <div className="w-full h-full flex flex-col">
                    <div className="flex flex-row flex-1">
                        <div className="basis-4/12 p-6 flex flex-col justify-between">
                            <Logo/>
                        <div className="flex flex-col gap-4 text-2xl font-heading">
						<span className="text-cream-100">
							Un éco-matériau local et innovant valorisant les
							déchets de pommes issus de l’industrie du cidre pour
							des objets artisanaux éthiques et naturels
						</span>
                        <span className="text-cream-100 font-heading-italic italic">
							Quimperlé, Finistère Sud
						</span>
                    </div>
                </div>
                <div className="basis-8/12 relative p-12">
                    <Image
                        className="p-4 object-cover"
                        src="/img/valorisation-marc-de-pomme.webp"
                        alt="Valorisation marc de pomme"
                        fill={true}
                        priority={true}
                    />
                </div>
                    </div>
                    <Menu/>
                </div>
            </div>

            <HeaderMobile>
                <span className="text-cream-100">
                    Valorisation des déchets naturels
                </span>
                <span className="text-cream-100 font-heading-italic italic">
                    Quimperlé, Finistère Sud
                </span>
            </HeaderMobile>

        </>
    );
}
