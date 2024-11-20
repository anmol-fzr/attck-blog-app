"use client";
import { Card, CardContent } from "@/components/ui/card";
import { FormHeader } from "@/components";
import { useForm } from "react-hook-form";
import { signUpSchema } from "@/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { AuthForm } from "./AuthForm";
import { AuthFormFooter } from "./AuthFormFooter";
import { useMutation } from "@tanstack/react-query";
import * as API from "@/services";

type FormType = z.infer<typeof signUpSchema>;

export function SignupForm() {
  const form = useForm<FormType>({
    resolver: zodResolver(signUpSchema),
  });

  const { mutate, isPending } = useMutation({
    mutationFn: API.AUTH.LOGIN,
  });

  function onSubmit(values: FormType) {
    mutate(values);
  }

  return (
    <Card className="mx-auto max-w-md w-full">
      <FormHeader
        title="Signup"
        desc="Enter your email below to create a new account"
      />
      <CardContent>
        <AuthForm
          methods={form}
          onSubmit={onSubmit}
          isPending={isPending}
          btnTitle="Sign up"
        />
        <AuthFormFooter
          message="Already have an account?"
          href="/login"
          title="Login"
        />
      </CardContent>
    </Card>
  );
}
