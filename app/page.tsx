import { getLoggedInUser } from "@/actions/auth.actions";
import { User } from "@/components/user";

const Home = async () => {
	const user = await getLoggedInUser();

	return (
		<>
			<div className="flex justify-center items-center h-full w-full">
				{user ? (
					<div className="absolute top-5 right-16">
						<User {...user} />
					</div>
				) : (
					"Unauthorized"
				)}
			</div>
		</>
	);
};

export default Home;
