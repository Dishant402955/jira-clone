import "server-only";

import { Client, Account } from "node-appwrite";

export const createAdminClient = async () => {
	const client = new Client()
		.setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
		.setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!)
		.setKey(process.env.APPWRITE_AUTH_API_SECRET!);

	return {
		get account() {
			return new Account(client);
		},
	};
};
