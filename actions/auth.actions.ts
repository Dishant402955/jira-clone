"use server";

import { Account, Client, ID, OAuthProvider } from "node-appwrite";
import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";

import { createAdminClient, createSessionClient } from "@/lib/appwrite";

interface SIGNUP_PROPS {
	username: string;
	email: string;
	password: string;
}

interface SIGNIN_PROPS {
	email: string;
	password: string;
}

export const signUp = async ({ email, password, username }: SIGNUP_PROPS) => {
	const { account } = await createAdminClient();
	const user = await account.create(ID.unique(), email, password, username);

	const session = await account.createEmailPasswordSession(email, password);

	(await cookies()).set("zira-auth-cookie", session.secret, {
		path: "/",
		httpOnly: true,
		sameSite: "strict",
		secure: true,
	});

	redirect("/");
};

export const signIn = async ({ email, password }: SIGNIN_PROPS) => {
	const { account } = await createAdminClient();

	const session = await account.createEmailPasswordSession(email, password);

	(await cookies()).set("zira-auth-cookie", session.secret, {
		path: "/",
		httpOnly: true,
		sameSite: "strict",
		secure: true,
		expires: new Date(session.expire),
	});

	redirect("/");
};

export const signUpwithGithub = async () => {
	const { account } = await createAdminClient();

	const origin = (await headers()).get("origin");

	const redirectUrl = await account.createOAuth2Token(
		OAuthProvider.Github,
		`${origin}/oauth`,
		`${origin}/sign-up`
	);

	return redirect(redirectUrl);
};

export const signUpwithGoogle = async () => {
	const { account } = await createAdminClient();

	const origin = (await headers()).get("origin");

	const redirectUrl = await account.createOAuth2Token(
		OAuthProvider.Google,
		`${origin}/oauth`,
		`${origin}/sign-up`
	);

	return redirect(redirectUrl);
};

export const getLoggedInUser = async () => {
	try {
		const client = new Client()
			.setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
			.setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!);

		const session = (await cookies()).get("zira-auth-cookie");

		if (!session) {
			return null;
		}

		client.setSession(session.value);
		const account = new Account(client);

		const {
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
		} = await account.get();

		return {
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
		};
	} catch (error) {
		return null;
	}
};

export const signOut = async () => {
	const { account } = await createSessionClient();

	(await cookies()).delete("zira-auth-cookie");
	await account.deleteSession("current");

	redirect("/sign-in");
};
