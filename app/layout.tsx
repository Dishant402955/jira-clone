import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { ModeToggle } from "@/components/mode-toggle";
import Logo from "@/components/logo";
import { Toaster } from "@/components/ui/sonner";
import { getLoggedInUser } from "@/actions/auth.actions";
import { User } from "@/components/user";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
	title: "Zira",
	description: "A Minimalist jira clone, for humans and by humans",
};

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const user = await getLoggedInUser();
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={` antialiased relative`}>
				<ThemeProvider
					attribute="class"
					defaultTheme="dark"
					disableTransitionOnChange
				>
					{children}
					<div className="flex justify-center items-center gap-4 absolute top-4 right-8 p-2">
						{user ? (
							<User {...user} />
						) : (
							<>
								<Link href={"/sign-in"}>
									<Button variant={"ghost"} className="cursor-pointer">
										Sign In
									</Button>
								</Link>
								<Link href={"/sign-up"}>
									<Button className="cursor-pointer">Sign Up</Button>
								</Link>
							</>
						)}
					</div>
					<ModeToggle />
					<Toaster />
					<Logo className="absolute top-4 left-6" />
				</ThemeProvider>
			</body>
		</html>
	);
}
