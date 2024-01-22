"use client";
import { Card, Input, Button, Typography } from "@material-tailwind/react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useLogin } from "@/hooks/useLogin";

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = handleSubmit((data) => {
    useLogin(data);
  });
  return (
    <main className="flex w-full justify-center pt-16">
      <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray">
          Login
        </Typography>
        <form
          className=" mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
          onSubmit={onSubmit}
        >
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Your Email
            </Typography>
            <Input
              size="lg"
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              {...register("email", { required: "請輸入Email" })}
            ></Input>
            {errors.password && (
              <p className="text-red-500 text-xs italic">
                {errors.password.message}
              </p>
            )}
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Your Password
            </Typography>
            <Input
              size="lg"
              placeholder="password"
              type="password"
              className="!border-t-blue-gray-200 focus:!border-t-gray-900"
              {...register("password", {
                required: "請輸入Password",
              })}
            ></Input>
            {errors.password && (
              <p className="text-red-500 text-xs italic">
                {errors.password.message}
              </p>
            )}
          </div>
          <Button className="mt-6 w-full" type="submit">
            {" "}
            登入
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            沒有帳號?{""}
            <Link href="/signUp" className=" font-medium text-gray-900">
              Sign Up
            </Link>
          </Typography>
        </form>
      </Card>
    </main>
  );
}
