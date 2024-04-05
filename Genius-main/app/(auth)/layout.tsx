//to get sign in sign up which are in auth middle

const AuthLayout = ({
    children
}: {
    children: React.ReactNode;
}) => {
    return (
        <div className="flex items-center justify-center h-full">
          {children}
        </div>
    );
}
export default AuthLayout;