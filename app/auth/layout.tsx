const AuthLayout =({children}:{children:React.ReactNode})=>{
    return(
        <div className="h-screen flex items-center justify-center bg-[#C2B0B0]">
            {children}
        </div>
    )
};
export default AuthLayout;