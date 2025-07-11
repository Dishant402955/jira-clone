interface AUTH_LAYOUT_PROPS {
	children?: React.ReactNode;
}

const AuthLayout = ({ children }: AUTH_LAYOUT_PROPS) => {
	return (
		<div className="h-full w-full flex justify-center items-center">
			{children}
		</div>
	);
};

export default AuthLayout;
