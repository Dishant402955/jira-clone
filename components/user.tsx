import { Popover, PopoverTrigger, PopoverContent } from "./ui/popover";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { SignOut } from "./auth/sign-out";
import { Button } from "./ui/button";
import { LogOutIcon, SettingsIcon } from "lucide-react";
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
	$createdAt,
	$updatedAt,
	accessedAt,
	email,
	emailVerification,
	mfa,
	name,
}: USER_PROPS) => {
	return (
		<>
			<Popover>
				<PopoverTrigger>
					<div className="size-9 rounded-full bg-emerald-700 cursor-pointer border-2 border-neutral-400 flex justify-center items-center ">
						<p className="text-2xl text-white font-bold">
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
						<CardHeader className="flex justify-start items-center gap-4 pl-8">
							<div className="size-9 rounded-full bg-emerald-700 cursor-pointer border-2 border-neutral-400 flex justify-center items-center">
								<p className="text-2xl text-white font-bold">
									{name[0].toUpperCase()}
								</p>
							</div>
							<div className="flex flex-col justify-center items-start">
								<p className="text-xl">{name}</p>
								<p className="text-sm">{email}</p>
							</div>
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
										<p className="w-[30%]">Name</p>
										<p>:</p>
										<p className="w-[50%] truncate flex justify-end">{name}</p>
									</div>
									<div className="flex justify-between items-center w-full">
										<p className="w-[30%]">Email</p>
										<p>:</p>
										<p className="w-[50%] truncate flex justify-end">{email}</p>
									</div>
									<div className="flex justify-between items-center w-full">
										<p className="w-[30%]">Created at</p>
										<p>:</p>
										<p className="w-[50%] truncate flex justify-end">
											{format(parseISO($createdAt), "MMMM d, yyyy 'at' h:mm a")}
										</p>
									</div>
									<div className="flex justify-between items-center w-full">
										<p className="w-[30%]">Updated at</p>
										<p>:</p>
										<p className="w-[50%] truncate flex justify-end">
											{format(parseISO($updatedAt), "MMMM d, yyyy 'at' h:mm a")}
										</p>
									</div>
									<div className="flex justify-between items-center w-full">
										<p className="w-[30%]">Last accessed</p>
										<p>:</p>
										<p className="w-[50%] truncate flex justify-end">
											{format(parseISO(accessedAt), "MMMM d, yyyy 'at' h:mm a")}
										</p>
									</div>
									<div className="flex justify-between items-center w-full">
										<p className="w-[30%]">Email Verified</p>
										<p>:</p>
										<p className="w-[50%] truncate flex justify-end">
											{emailVerification ? "Yes" : "No"}
										</p>
									</div>
									<div className="flex justify-between items-center w-full">
										<p className="w-[30%]">Multifactor Enabled</p>
										<p>:</p>
										<p className="w-[50%] truncate flex justify-end">
											{mfa ? "Yes" : "No"}
										</p>
									</div>
								</DialogContent>
							</Dialog>
						</CardContent>
						<CardFooter className="w-full">
							<SignOut>
								<Button
									variant={"secondary"}
									className="w-full cursor-pointer text-[#d54c4c] border border-[#8b5b5b]"
								>
									<LogOutIcon color="#d54c4c" /> Sign Out
								</Button>
							</SignOut>
						</CardFooter>
					</Card>
				</PopoverContent>
			</Popover>
		</>
	);
};
