import { getLoggedInUser } from "@/actions/auth.actions";
import { SignUpCard } from "@/components/auth/sign-up-card";
import { redirect } from "next/navigation";

const SignUpPage = async () => {
	const user = await getLoggedInUser();

	if (user) {
		redirect("/");
	}
	return (
		<>
			<SignUpCard />
		</>
	);
};

export default SignUpPage;
