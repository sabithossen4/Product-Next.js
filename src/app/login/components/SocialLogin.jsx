"use client";
import {  FaGithub, FaGoogle } from "react-icons/fa6";

import toast from "react-hot-toast";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";



export default function SocialLogin() {
  const router = useRouter();
  const session = useSession();
  // console.log(session);

  const handleSocialLogin = (providerName) => {
    signIn(providerName);
  };

  useEffect(() => {
    if (session?.status == "authenticated") {
      router.push("/");
      toast("Successfully Logged IN");
    }
  }, [session?.status]);

  return (
    <div className="flex justify-center gap-8">
      <p
        onClick={() => handleSocialLogin("google")}
        className=" rounded-full p-3"
      >
        <FaGoogle type="button" />
      </p>
      <p
        onClick={() => handleSocialLogin("github")}
        className=" rounded-full p-3"
      >
        <FaGithub type="button" />
      </p>
    </div>
  );
}