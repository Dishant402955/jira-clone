import { getLoggedInUser } from "@/actions/auth.actions";
import { SignInCard } from "@/components/auth/sign-in-card";
import { redirect } from "next/navigation";

const SignInPage = async () => {
	const user = await getLoggedInUser();

	if (user) {
		redirect("/");
	}
	return (
		<>
			<SignInCard />
		</>
	);
};

export default SignInPage;
