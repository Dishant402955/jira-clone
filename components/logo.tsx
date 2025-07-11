import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface LOGO_PROPS {
	className?: string | undefined;
}

const Logo = ({ className }: LOGO_PROPS) => {
	return (
		<Link
			className={cn(
				"flex justify-center items-center gap-4 p-2 hover:bg-neutral-500/30 rounded-lg dark:hover:bg-accent-foreground/30 font-bold text-[1.4rem]",
				className
			)}
			href={"/"}
		>
			<Image src={"/13.svg"} alt="logo" height={35} width={35} />
			<p>Zira</p>
		</Link>
	);
};

export default Logo;
