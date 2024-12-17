import { Button } from "@/components/ui/button"
import { ExclamationTriangleIcon } from "@radix-ui/react-icons"

const logoutPage = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-y-6 ">
        <div className="bg-destructive/15 p-4 rounded-md flex items-center gap-x-5 text-6xl text-destructive">
                <ExclamationTriangleIcon className="h-9 w-9"/>
                <p>Access Denied</p>
            </div>
            <div>
                <a href="https://authfresko.vercel.app/auth/login">
            <Button className="w-[460px] bg-[#9E896A] hover:bg-[#2a8929c4]">
               Go To Login Page
            </Button>
            </a>
            </div>
    </div>
  )
}

export default logoutPage