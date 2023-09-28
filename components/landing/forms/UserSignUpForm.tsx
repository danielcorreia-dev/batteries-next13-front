"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Label, TextInput } from "flowbite-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

type FormValues = {
  username: string;
  email: string;
  password: string;
};

const schema = z.object({
  username: z
    .string()
    .min(3, { message: "Seu nickname deve ter mais que 3 caracteres" })
    .max(20, { message: "Seu nickname deve ter no máximo 20 caracteres" })
    .refine(
      (value) => /[a-zA-Z0-9]+$/.test(value),
      "O nickname não pode conter caracteres especiais",
    ),
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: "Sua senha deve ter no mínimo 8 caracteres" }),
});

const UserSignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormValues) => {
    const { username, email, password } = data;

    const res = await fetch("/nest-api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, email, password }),
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="-mx-3 mb-4 flex max-w-md flex-wrap">
        <div className="w-full px-3">
          <div className="mb-1">
            <Label htmlFor="username">
              Nickname <span className="text-red-600">*</span>
            </Label>
          </div>
          <TextInput
            sizing={"sm"}
            id="username"
            type="text"
            placeholder="Insira seu nickname"
            {...register("username", { required: true })}
          />
          {errors.username && (
            <span className="text-sm text-red-600">
              {errors.username?.message}
            </span>
          )}
        </div>
      </div>
      <div className="-mx-3 mb-4 flex flex-wrap">
        <div className="w-full px-3">
          <div className="mb-1">
            <Label htmlFor="email">
              Email <span className="text-red-600">*</span>
            </Label>
          </div>
          <TextInput
            sizing={"sm"}
            id="email"
            type="email"
            placeholder="Insira seu email"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span className="text-sm text-red-600">
              {errors.email?.message}
            </span>
          )}
        </div>
      </div>
      <div className="-mx-3 mb-4 flex flex-wrap">
        <div className="w-full px-3">
          <div className="mb-1">
            <Label htmlFor="password">
              Senha <span className="text-red-600">*</span>
            </Label>
          </div>

          <TextInput
            sizing={"sm"}
            id="password"
            type="password"
            placeholder="Insira sua senha"
            required
            {...register("password", { required: true, minLength: 8 })}
          />
          {errors.password && (
            <span className="text-sm text-red-600">
              {errors.password.message}
            </span>
          )}
        </div>
      </div>
      <div className="-mx-3 mt-6 flex flex-wrap">
        <div className="w-full px-3">
          <button className="btn w-full bg-blue-600 text-white hover:bg-blue-700">
            Cadastrar-se
          </button>
        </div>
      </div>
      {/* <div className="mt-3 text-center text-sm text-gray-500">
                By creating an account, you agree to the{" "}
                <a className="underline" href="#0">
                  terms & conditions
                </a>
                , and our{" "}
                <a className="underline" href="#0">
                  privacy policy
                </a>
                .
              </div> */}
    </form>
  );
};

export default UserSignUpForm;
