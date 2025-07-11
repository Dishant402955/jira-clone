import { createAdminClient } from "@/lib/appwrite";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

// @ts-expect-error cause there is no proper types are found for that
export const GET = async (req) => {
	const userId = req.nextUrl.searchParams.get("userId");
	const secret = req.nextUrl.searchParams.get("secret");

	const { account } = await createAdminClient();
	const session = await account.createSession(userId, secret);

	(await cookies()).set("zira-auth-cookie", session.secret, {
		path: "/",
		httpOnly: true,
		secure: true,
		sameSite: "strict",
	});

	return NextResponse.redirect(`${req.nextUrl.origin}/`);
};
