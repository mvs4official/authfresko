import React from 'react'
import { CheckCircledIcon} from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import  Link  from 'next/link';

const PassPage = () => {
  return (
    <div className='h-screen flex flex-col gap-y-4 justify-center items-center'>
        <div className="bg-emerald-500/15 p-3 rounded-md flex items-center gap-x-2 text-2xl text-emerald-500">
            <CheckCircledIcon className="h-6 w-6"/>
            <p>Sucess ! You Are Logined</p>
        </div>
        <div>
            <Link href="https://homefresko.netlify.app/">
            <Button>Continue</Button>
            </Link>
        </div>
    </div>
  )
}

export default PassPage