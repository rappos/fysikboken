import Link from "next/link";

interface NavbarLinkProps {
    href: string;
    title: string;
    subtitle: string;
}

export const NavbarLink = ({ href, title, subtitle }: NavbarLinkProps) => {
    return (
        <Link
            className="mt-4 block text-gray-400 hover:text-white lg:mr-10 lg:mt-0 lg:inline-block"
            href={href}
            passHref>
            <div className="flex flex-col items-center">
                <p className="text-lg">{title}</p>
                <p className="hidden text-sm lg:block">{subtitle}</p>
            </div>
        </Link>
    );
};
