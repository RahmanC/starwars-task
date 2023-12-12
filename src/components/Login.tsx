"use client";

import React from "react";
import Image from "next/image";
import { AppField } from "@/components/form/AppField";
import { AppForm } from "@/components/form/AppForm";
import AppButton from "./form/AppButton";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();

  const handleSubmit = () => {
    router.push("/overview");
  };

  const validationSchema = {};
  return (
    <div className="flex h-screen">
      <div className="w-1/3 bg-primary flex items-center justify-center">
        <Image src="/logo.svg" alt="starwars" width={385} height={167} />
      </div>
      <div className="w-2/3 flex items-center justify-center">
        <div className="border border-border rounded-[8px] px-16 py-8 w-[467px]">
          <p className="text-2xl text-[#434854] font-semibold mb-2">Login</p>
          <p className="text-base font-[400] mb-16">
            Kindly enter your details to log in{" "}
          </p>
          <AppForm
            initialValues={{ username: "", password: "" }}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
          >
            <AppField name="email" label="email address" />
            <AppField name="password" label="password" />
            <AppButton label="Log in" type={"submit"} />
            <Link
              href={"/overview"}
              className="text-center text-secondary text-sm font-normal"
            >
              Forgot your password?
            </Link>
          </AppForm>
          <p className="text-[#B0B9C8] text-xs font-normal text-center mt-24">
            <span className="border-b border-[#303B54] text-[#303B54]">
              Privacy Policy
            </span>{" "}
            and{" "}
            <span className="border-b border-[#303B54] text-[#303B54]">
              Terms of services
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
