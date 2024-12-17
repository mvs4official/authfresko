import { CheckCircledIcon } from "@radix-ui/react-icons"
import { Button } from "@/components/ui/button"
import  Link  from "next/link"
const SettingsPage = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-y-6">
        <div className="bg-emerald-500/15 p-4 rounded-md flex items-center gap-x-2 text-6xl text-emerald-500">
                <CheckCircledIcon className="h-9 w-9"/>
                <p>Authenticated</p>
            </div>
            <div>
                <a href="https://auth-homefresko.netlify.app/">
            <Button className="w-[460px] bg-[#9E896A] hover:bg-[#2a8929c4]">
               Continue
            </Button>
            </a>
            </div>
    </div>
  )
}

export default SettingsPage