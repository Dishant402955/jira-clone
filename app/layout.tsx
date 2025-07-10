import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { ModeToggle } from "@/components/mode-toggle";
import Logo from "@/components/logo";

export const metadata: Metadata = {
	title: "Zira",
	description: "A Minimalist jira clone, for humans and by humans",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={` antialiased relative`}>
				<ThemeProvider
					attribute="class"
					defaultTheme="dark"
					disableTransitionOnChange
				>
					{children}
					<ModeToggle />
					<Logo className="absolute top-2 left-2 text-xl" />
				</ThemeProvider>
			</body>
		</html>
	);
}
