import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { ModeToggle } from "@/components/helpers/mode-toggle";

export const metadata: Metadata = {
	title: "Jira Clone",
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
				</ThemeProvider>
			</body>
		</html>
	);
}
