import { Navbar } from "@/components/Navbar";
import "./globals.css";

export const metadata = {
    title: "Fysikboken",
    icons: {
        icon: "./favicon.png",
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="sv">
            <body>
                <Navbar />
                {children}
            </body>
        </html>
    );
}
