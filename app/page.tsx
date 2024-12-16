"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "@/page.module.css";
import { Button } from "@/components/ui/button";
import { LoginButton } from "@/components/auth/login-button";

export default function Home() {
  return <>
  <main className="flex h-screen flex-col items-center justify-center bg-[#DFFFF7]">
    <div className="space-y-4 text-center">
      <h1 className="text-6xl font-semibold text-[#058565] drop-shadow-md">
        Fresko
      </h1>
      <p className="text-[#058565] text-sm ">
        Welcome to Fresko Authentication page
      </p>
      <div>
        <LoginButton>
        <Button variant={"secondary"} className="w-full bg-[#9E896A] text-white hover:bg-[#2a8929c4]">
          Sign In
        </Button>
        </LoginButton>
      </div>
    </div>
  </main>
  </>;
}
