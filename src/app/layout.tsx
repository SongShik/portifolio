import 'bootstrap/dist/css/bootstrap.css'
import '@/styles/globals.css'
import '@/styles/bootstrap.css'

import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "../styles/globals.css";
import SmoothScroll from '@/components/utils/smoothScroll';
import CursorCool from '@/components/utils/cursorCool';
import { GoogleTagManager } from '@next/third-parties/google'


const roboto = Roboto({
	weight: ['700', '500', '400', '300'],
	variable: '--font-roboto',
	subsets: ['latin'],
	display: 'swap',
});


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Portfólio",
	description: "Confira meus projetos e entre em contato comigo.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pt-br" suppressHydrationWarning={true}>
			<head>
				<GoogleTagManager gtmId="GTM-PBWBTR6K" />
			</head>
			<body className={inter.className}>
				<SmoothScroll>
					{children}
				</SmoothScroll>
				<CursorCool></CursorCool>
			</body>
		</html>
	);
}
