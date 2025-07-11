import "server-only";

import { Client, Account, Users } from "node-appwrite";
import { cookies } from "next/headers";

export const createAdminClient = async () => {
	const client = new Client()
		.setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
		.setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!)
		.setKey(process.env.APPWRITE_AUTH_API_SECRET!);

	return {
		get account() {
			return new Account(client);
		},
		get user() {
			return new Users(client);
		},
	};
};

export async function createSessionClient() {
	const cookieStore = await cookies();
	const sessionToken = cookieStore.get("zira-auth-cookie")?.value;

	if (!sessionToken) throw new Error("No session token found");

	const client = new Client()
		.setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
		.setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!);

	client.setSession(sessionToken);
	return {
		get account() {
			return new Account(client);
		},
	};
}
