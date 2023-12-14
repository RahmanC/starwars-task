"use client";

import React from "react";
import Image from "next/image";
import { AppField } from "@/components/form/AppField";
import { AppForm } from "@/components/form/AppForm";
import AppButton from "./form/AppButton";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { loginSchema } from "@/libs/schema";
import { useDispatch, useSelector } from "react-redux";
import { LoginUser } from "@/redux/slices/auth";

const Login = () => {
  const router = useRouter();
  const dispatch: any = useDispatch();
  const { isLoading } = useSelector((state: any) => state.auth);

  const handleSubmit = (values: { email: string; password: string }) => {
    const username = values.email.split("@")[0];
    dispatch(LoginUser(username, router.push("/overview")));
  };

  return (
    <div className="flex h-screen">
      <div className="hidden w-1/3 bg-primary md:flex items-center justify-center">
        <Image
          src="/logo.svg"
          alt="starwars"
          width={385}
          height={167}
          priority
        />
      </div>
      <div className="w-full md:w-2/3 p-4 md:p-0 flex items-center justify-center">
        <div className="border border-border rounded-[8px] px-5 md:px-16 py-8 w-full md:w-[467px]">
          <p className="text-2xl text-[#434854] font-semibold mb-2">Login</p>
          <p className="text-base font-[400] mb-16">
            Kindly enter your details to log in{" "}
          </p>
          <AppForm
            initialValues={{ email: "", password: "" }}
            onSubmit={handleSubmit}
            validationSchema={loginSchema}
          >
            <AppField name="email" label="email address" />
            <AppField name="password" label="password" type="password" />
            <AppButton label="Log in" type={"submit"} loading={isLoading} />
            <Link
              href={""}
              className="text-center text-secondary text-sm font-normal"
            >
              Forgot your password?
            </Link>
          </AppForm>
          <p className="text-[#B0B9C8] text-xs font-normal text-center mt-24">
            <span className="border-b border-[#303B54] text-[#303B54] cursor-pointer">
              Privacy Policy
            </span>{" "}
            and{" "}
            <span className="border-b border-[#303B54] text-[#303B54] cursor-pointer">
              Terms of services
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
