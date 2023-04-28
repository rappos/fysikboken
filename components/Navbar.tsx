import { NavbarLink } from "./NavbarLink";
import Link from "next/link";

export const Navbar = () => {
    return (
        <nav className="flex flex-wrap items-center justify-center bg-gray-800 p-6 lg:justify-between">
            <div className="flex flex-shrink-0 items-center text-white lg:mr-6">
                <Link href="/" className="text-2xl font-semibold tracking-tight">
                    Fysikboken
                </Link>
            </div>
            <div className="mx-10 block w-full flex-grow lg:flex lg:w-auto lg:items-center">
                <div className="text-sm lg:flex-grow">
                    <NavbarLink href="#0" title="Kapitel 0" subtitle="Vågrörelselära och akustik" />
                    <NavbarLink href="#1" title="Kapitel 1" subtitle="Geometrisk optik" />
                    <NavbarLink
                        href="#2"
                        title="Kapitel 2"
                        subtitle="Begränsningar i optiska system"
                    />
                    <NavbarLink href="#3" title="Kapitel 3" subtitle="Laser och laserteknik" />
                    <NavbarLink href="#4" title="Kapitel 4" subtitle="Vågoptik" />
                    <NavbarLink href="#5" title="Kapitel 5" subtitle="Modern optronik" />
                </div>
            </div>
        </nav>
    );
};
