interface USER_PROPS {
	$id: string;
	$createdAt: string;
	$updatedAt: string;
	accessedAt: string;
	email: string;
	emailVerification: boolean;
	labels: string[];
	mfa: boolean;
	name: string;
	passwordUpdate: string;
}

export const User = ({}: USER_PROPS) => {
	return <></>;
};
