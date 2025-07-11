"use client";

import Link from "next/link";
import Image from "next/image";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";
import { Suspense, useTransition } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
	CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Loader2Icon, LoaderIcon } from "lucide-react";

const signUpSchema = z.object({
	username: z.string().min(1, { message: "Username is required" }),
	email: z.email({ message: "Enter a valid email" }),
	password: z.string().min(6, { message: "Min 6 characters are required" }),
});

export const SignUpCard = () => {
	const [isLoading, startTransition] = useTransition();

	const form = useForm<z.infer<typeof signUpSchema>>({
		resolver: zodResolver(signUpSchema),
		defaultValues: { username: "", email: "", password: "" },
	});

	function onSubmit(values: z.infer<typeof signUpSchema>) {
		startTransition(() => {
			console.log(values);
			toast.success(
				`user "${values.username}" with email ${values.email}" and password "${values.password}" logged in.`
			);
		});
	}

	return (
		<>
			<Suspense fallback={<Loader2Icon className="animate-spin" />}>
				<Card className="max-h-full md:w-[447px] max-w-[447px] w-[90%]  border-none shadow-sm dark:shadow-accent-foreground/20">
					<CardHeader className="gap-2 flex justify-center items-center text-center flex-col mb-4">
						<CardTitle className="text-xl">Sign Up</CardTitle>
						<CardDescription className="text-xs">
							By signing up you agree to our{" "}
							<Link
								className="text-indigo-500"
								href={"/privacy-policy"}
								target="_blank"
							>
								Privacy Policy
							</Link>{" "}
							and <br />
							<Link
								className="text-indigo-500"
								href={"/terms-of-service"}
								target="_blank"
							>
								Terms of Service
							</Link>{" "}
						</CardDescription>
					</CardHeader>
					<CardContent>
						<Form {...form}>
							<form
								onSubmit={form.handleSubmit(onSubmit)}
								className="space-y-6 flex flex-col justify-center items-center"
							>
								<FormField
									control={form.control}
									name="username"
									render={({ field }) => (
										<FormItem className="w-[90%]">
											<FormLabel>Username</FormLabel>
											<FormControl>
												<Input placeholder="Dohn Joe" {...field} autoFocus />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
									disabled={isLoading}
								/>
								<FormField
									control={form.control}
									name="email"
									render={({ field }) => (
										<FormItem className="w-[90%]">
											<FormLabel>Email</FormLabel>
											<FormControl>
												<Input placeholder="your@email.here" {...field} />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
									disabled={isLoading}
								/>
								<FormField
									control={form.control}
									name="password"
									render={({ field }) => (
										<FormItem className="w-[90%]">
											<FormLabel>Password</FormLabel>
											<FormControl>
												<Input
													placeholder="******"
													{...field}
													type="password"
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
									disabled={isLoading}
								/>
								<Button
									type="submit"
									className="w-[90%] bg-indigo-700 cursor-pointer text-white hover:bg-indigo-500"
									disabled={isLoading}
								>
									{isLoading ? (
										<LoaderIcon className="animate-spin" />
									) : (
										"Submit"
									)}
								</Button>
							</form>
						</Form>
					</CardContent>
					<div className="w-full flex justify-center items-center text-neutral-500 text-xs gap-3 px-6 my-2">
						<div className="w-full h-[0.2px] bg-neutral-500/40" />
						<p>OR</p>
						<div className="w-full h-[0.2px] bg-neutral-500/40" />
					</div>
					<CardContent className="flex flex-col justify-center items-center gap-4">
						<Button
							className="w-[90%] cursor-pointer flex justify-center items-center gap-4"
							variant={"secondary"}
						>
							<FcGoogle /> Sign in with Google
						</Button>
						<Button
							className="w-[90%] cursor-pointer  flex justify-center items-center gap-4"
							variant={"secondary"}
						>
							<FaGithub /> Sign in with Github
						</Button>
					</CardContent>
					<CardFooter className="flex justify-center items-center text-center">
						<Link href={"/sign-in"}>
							<Button variant={"link"} className="cursor-pointer">
								Already have an account?
							</Button>
						</Link>
					</CardFooter>
				</Card>
			</Suspense>
		</>
	);
};
