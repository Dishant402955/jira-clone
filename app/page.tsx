import { getLoggedInUser } from "@/actions/auth.actions";
import { User } from "@/components/user";

const Home = async () => {
	const user = await getLoggedInUser();

	return (
		<>
			<div className="flex justify-center items-center h-full w-full">
				{user ? <User {...user} /> : "Unauthorized"}
			</div>
		</>
	);
};

export default Home;
