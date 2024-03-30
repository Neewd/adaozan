'use client';

import Logo from "@/components/Logo";
import Link from "next/link";
import classNames from "classnames";
import Image from "next/image";
import {ReactNode, useRef, useState} from "react";
import {usePathname} from "next/navigation";
import {useOnClickOutside} from "usehooks-ts";

export default function HeaderMobile({ children }: { children?: ReactNode }) {

    const menuRef = useRef(null)
    const buttonMenuRef = useRef(null)
    const currentRoute = usePathname();
    const [isMenuOpen, setMenuOpen] = useState(false);

    const openMenu = () => {
        setMenuOpen(isMenuOpen => !isMenuOpen);
    }

    const handleClickOutside = (event: MouseEvent | TouchEvent | FocusEvent) => {
        if (isMenuOpen) {
            event.stopImmediatePropagation();
            setMenuOpen(false);
        }
    }

    useOnClickOutside([menuRef, buttonMenuRef], handleClickOutside);


    return (
        <>
            <div className="flex sm:hidden justify-between items-center px-4 pt-2 relative">
                <div className="basis-8/12">
                    <Logo/>
                </div>
                <div className="h-full w-10" onClick={() => openMenu()}>
                    <svg ref={buttonMenuRef} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                         fill="none">
                        <path d="M4 18L20 18" stroke="#ffffff" strokeWidth="2" strokeLinecap="round"/>
                        <path d="M4 12L20 12" stroke="#ffffff" strokeWidth="2" strokeLinecap="round"/>
                        <path d="M4 6L20 6" stroke="#ffffff" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                    {isMenuOpen && (
                        <>
                            <div className="absolute left-0 w-full bg-brown-100 z-10 pt-4"
                                 ref={menuRef}>
                                <div
                                    className="text-cream-100 group text-lg flex-1 flex items-center justify-center cursor-pointer border-b border-t border-cream-100 h-full py-4">
                                    <Link
                                        href="/produits"
                                        className={classNames("group-hover:font-semibold", {
                                            "font-bold": currentRoute === "/produits",
                                        })}
                                    >
                                        Produits
                                    </Link>
                                </div>
                                <div
                                    className="text-cream-100 text-lg group flex-1 px-4  flex items-center justify-center cursor-pointer border-b border-b-cream-100 h-full py-4">
                                    <Link
                                        href="/a-propos"
                                        className={classNames("group-hover:font-semibold", {
                                            "font-bold": currentRoute === "/a-propos",
                                        })}
                                    >
                                        À propos
                                    </Link>
                                </div>
                                <div
                                    className="text-cream-100 text-lg group flex-1 flex px-4 items-center justify-center cursor-pointer border-b border-b-cream-100 py-4">
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
                        </>
                    )
                    }
                </div>

            </div>
            <div className="flex sm:hidden flex-col">
                <div className="w-full relative h-64">
                    <Image
                        className="px-4 pt-4 object-cover"
                        src="/img/valorisation-marc-de-pomme.webp"
                        alt="Valorisation marc de pomme"
                        fill={true}
                        priority={true}
                    />
                </div>
                <div className="flex flex-col gap-1 text-lg font-heading p-2 text-center">
                    {
                        children
                    }
                </div>
            </div>

        </>
    )
}