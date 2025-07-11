"use client";

import { Suspense } from "react";
import { Skeleton } from "../ui/skeleton";
import { Button } from "../ui/button";
import { signOut } from "@/actions/auth.actions";
import { toast } from "sonner";

interface SIGNOUT_PROPS {
	children?: React.ReactNode;
	fallback?: React.ReactNode;
}

export const SignOut = ({ children, fallback }: SIGNOUT_PROPS) => {
	const handleSignOut = async () => {
		await signOut();
		toast("Logged out successfully");
	};

	return (
		<>
			<Suspense
				fallback={
					fallback ? (
						fallback
					) : (
						<Skeleton>
							<Button disabled>Sign Out</Button>
						</Skeleton>
					)
				}
			>
				{children ? (
					<div className="cursor-pointer w-full" onClick={handleSignOut}>
						{children}
					</div>
				) : (
					<Button onClick={handleSignOut}>SignOut</Button>
				)}
			</Suspense>
		</>
	);
};
