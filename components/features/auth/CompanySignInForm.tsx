"use client";

import LoadingButton from "@/components/ui/LoadingButton";
import { zodResolver } from "@hookform/resolvers/zod";
import { Checkbox, Label, TextInput } from "flowbite-react";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import z from "zod";

const schema = z.object({
  username: z
    .string()
    .min(3, {
      message: "Seu email deve ter mais que 3 caracteres",
    })
    .email(),
  password: z.string(),
});

interface FormValues {
  username: string;
  password: string;
}

const CompanySignInForm = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormValues) => {
    const { username, password } = data;

    setLoading(true);

    const result = await signIn("credentials", {
      username,
      password,
      userType: "company",
      redirect: false,
    });

    if (result?.error) {
      setLoading(false);
      setError("password", {
        message: "Usuário ou senha incorretos",
      });
    } else {
      setLoading(false);

      router.push("/system/company/profile");
    }
  };

  return (
    <div className="mx-auto max-w-sm">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="-mx-3 mb-4 flex flex-wrap">
          <div className="w-full px-3">
            <Label htmlFor="username" className="dark:text-gray-600">
              Email
            </Label>
            <TextInput
              type="text"
              sizing={"sm"}
              id="email"
              placeholder="Insira seu email"
              required
              {...register("username", { required: true })}
            />
            {errors && (
              <span className="text-sm text-red-500">
                {errors.username?.message}
              </span>
            )}
          </div>
        </div>
        <div className="-mx-3 mb-4 flex flex-wrap">
          <div className="w-full px-3">
            <div className="flex justify-between">
              <div className="text-gray">
                <Label htmlFor="password" color="text-gray">
                  Senha
                </Label>
              </div>
              <Link
                href="/reset-password"
                className="text-sm font-medium text-blue-600 hover:underline"
              >
                Esqueceu a sua senha?
              </Link>
            </div>
            <div>
              <TextInput
                id="password"
                sizing={"sm"}
                type="password"
                placeholder="Insira sua senha"
                required
                {...register("password", { required: true })}
              />
              {errors && (
                <span className="text-sm text-red-500">
                  {errors.password?.message}
                </span>
              )}
            </div>
          </div>
        </div>
        <div className="-mx-3 mb-4 flex flex-wrap">
          <div className="w-full px-3">
            <div className="flex justify-between">
              <label className="flex items-center">
                <Checkbox id="remember" className="form-checkbox" />
                <span className="ml-2 text-gray-600">Lembre-se de mim</span>
              </label>
            </div>
          </div>
        </div>
        <div className="-mx-3 mt-6 flex flex-wrap">
          <div className="w-full px-3">
            <button
              disabled={loading}
              className={`btn w-full bg-blue-600 text-white hover:bg-blue-700 ${
                loading && "cursor-not-allowed opacity-75"
              }`}
            >
              {loading ? <LoadingButton /> : "Entrar"}
            </button>
          </div>
        </div>
      </form>
      <div className="mt-6 text-center text-gray-600">
        Não tem uma conta como empresa?{" "}
        <Link
          href="/auth/signup/company"
          className="text-blue-600 transition duration-150 ease-in-out hover:underline"
        >
          Cadastre-se
        </Link>
      </div>
      <div className="mt-2 text-center">
        <Link
          href="/auth/signin"
          className="text-sm font-medium text-blue-600 hover:underline"
        >
          Logar como usuário
        </Link>
      </div>
    </div>
  );
};

export default CompanySignInForm;
