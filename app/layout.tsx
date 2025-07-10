import type { Metadata } from "next";
import "./globals.css";

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
		<html lang="en">
			<body className={` antialiased`}>{children}</body>
		</html>
	);
}
