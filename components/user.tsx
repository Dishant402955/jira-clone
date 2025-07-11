import { PopoverContent } from "@radix-ui/react-popover";
import { Popover, PopoverTrigger } from "./ui/popover";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "./ui/card";
import { SignOut } from "./auth/sign-out";
import { Button } from "./ui/button";
import { ArrowRight, SettingsIcon } from "lucide-react";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "./ui/dialog";
import { format, parseISO } from "date-fns";

interface USER_PROPS {
	$id: string;
	$createdAt: string;
	$updatedAt: string;
	accessedAt: string;
	email: string;
	emailVerification: boolean;
	labels: string[];
	mfa: boolean;
	name: string;
	passwordUpdate: string;
	className?: string;
}

export const User = ({
	$id,
	$createdAt,
	$updatedAt,
	accessedAt,
	email,
	emailVerification,
	labels,
	mfa,
	name,
	passwordUpdate,
	className,
}: USER_PROPS) => {
	return (
		<>
			<Popover>
				<PopoverTrigger>
					<div className="size-8 rounded-full bg-gradient-to-r from-fuchsia-400  to-indigo-400 cursor-pointer border-2 border-neutral-400 flex justify-center items-center">
						<p className="text-2xl text-black font-bold">
							{name[0].toUpperCase()}
						</p>
					</div>
				</PopoverTrigger>
				<PopoverContent
					side="left"
					align="start"
					alignOffset={20}
					className="w-[360px]"
				>
					<Card className="border-none w-full">
						<CardHeader>
							<CardTitle>
								{name} | {email}
							</CardTitle>
						</CardHeader>
						<CardContent>
							<Dialog>
								<DialogTrigger className="w-full" asChild>
									<Button variant={"secondary"} className="cursor-pointer">
										<SettingsIcon />
										Account
									</Button>
								</DialogTrigger>
								<DialogTitle></DialogTitle>
								<DialogContent className="flex justify-center items-center flex-col pt-10">
									<div className="flex justify-between items-center w-full">
										<p className="w-[40%]">Name</p>
										<p>:</p>
										<p className="w-[40%] truncate flex justify-end">{name}</p>
									</div>
									<div className="flex justify-between items-center w-full">
										<p className="w-[40%]">Email</p>
										<p>:</p>
										<p className="w-[40%] truncate flex justify-end">{email}</p>
									</div>
									<div className="flex justify-between items-center w-full">
										<p className="w-[40%]">Created at</p>
										<p>:</p>
										<p className="w-[40%] truncate flex justify-end">
											{format(parseISO($createdAt), "MMMM d, yyyy 'at' h:mm a")}
										</p>
									</div>
									<div className="flex justify-between items-center w-full">
										<p className="w-[40%]">Updated at</p>
										<p>:</p>
										<p className="w-[40%] truncate flex justify-end">
											{format(parseISO($updatedAt), "MMMM d, yyyy 'at' h:mm a")}
										</p>
									</div>
									<div className="flex justify-between items-center w-full">
										<p className="w-[40%]">Last accessed</p>
										<p>:</p>
										<p className="w-[40%] truncate flex justify-end">
											{format(parseISO(accessedAt), "MMMM d, yyyy 'at' h:mm a")}
										</p>
									</div>
									<div className="flex justify-between items-center w-full">
										<p className="w-[40%]">Email Verified</p>
										<p>:</p>
										<p className="w-[40%] truncate flex justify-end">
											{emailVerification ? "Yes" : "No"}
										</p>
									</div>
									<div className="flex justify-between items-center w-full">
										<p className="w-[40%]">Last Password Update</p>
										<p>:</p>
										<p className="w-[40%] truncate flex justify-end">
											{format(
												parseISO(passwordUpdate),
												"MMMM d, yyyy 'at' h:mm a"
											)}
										</p>
									</div>
									<div className="flex justify-between items-center w-full">
										<p className="w-[40%]">Multifactor Auth Enabled</p>
										<p>:</p>
										<p className="w-[40%] truncate flex justify-end">
											{mfa ? "Yes" : "No"}
										</p>
									</div>
								</DialogContent>
							</Dialog>
						</CardContent>
						<CardFooter className="w-full">
							<SignOut>
								<Button variant={"outline"} className="w-full cursor-pointer">
									Sign Out <ArrowRight />
								</Button>
							</SignOut>
						</CardFooter>
					</Card>
				</PopoverContent>
			</Popover>
		</>
	);
};
