import { Loader2Icon } from "lucide-react";

const Loading = () => {
	return (
		<div className="h-full w-full flex justify-center items-center">
			<Loader2Icon className="animate-spin" />
		</div>
	);
};

export default Loading;
