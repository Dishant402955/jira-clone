"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ModeToggle() {
	const { setTheme, theme } = useTheme();

	return (
		<div className="absolute top-4 right-2">
			{theme === "light" ? (
				<Button
					onClick={() => {
						setTheme("dark");
					}}
					className="cursor-pointer border-2"
					variant={"secondary"}
				>
					<Sun />
				</Button>
			) : (
				<Button
					onClick={() => {
						setTheme("light");
					}}
					className="cursor-pointer border-2"
					variant={"secondary"}
				>
					<Moon />
				</Button>
			)}
		</div>
	);
}
