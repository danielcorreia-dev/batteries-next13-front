"use client";
import LoadingButton from "@/components/ui/LoadingButton";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import z from "zod";

interface FormValues {
  name: string;
  email: string;
  password: string;
  confirm: string;
}

const schema = z
  .object({
    name: z
      .string()
      .min(3, {
        message: "O nome da sua empresa deve ter mais que 3 caracteres",
      })
      .nonempty(),
    email: z
      .string()
      .min(3, {
        message: "Seu email deve ter mais que 3 caracteres",
      })
      .email({ message: "Insira um email válido" })
      .nonempty(),
    password: z
      .string()
      .min(8, { message: "Sua senha deve ter mais que 8 caracteres" })
      .nonempty(),
    confirm: z.string().nonempty({ message: "Confirme sua senha" }),
  })
  .refine((data) => data.password === data.confirm, {
    message: "As senhas devem ser iguais",
    path: ["confirm"],
  });

const CompanySignUpForm = () => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormValues) => {
    const { name, email, password } = data;
    setLoading(true);

    const res = await fetch("/nest-api/auth/register/company", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });

    if (res.ok) {
      setLoading(false);
      toast.success("Cadastro realizado com sucesso!");
      setTimeout(() => {
        router.push("/auth/signin");
      }, 500);
    } else {
      toast.error("Erro ao realizar o cadastro");
    }
  };

  return (
    <div className="mx-auto max-w-sm">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="-mx-3 mb-4 flex flex-wrap">
          <div className="w-full px-3">
            <label
              htmlFor="name"
              className="mb-2 block text-sm font-medium dark:text-white"
            >
              Nome da empresa
            </label>
            <input
              type="text"
              id="name"
              className="block w-full rounded-md border-gray-200 px-4 py-2 text-base focus:border-blue-500 focus:ring-blue-500 dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400"
              placeholder="Insira o nome da sua empresa"
              {...register("name")}
            />
            {errors && (
              <span className="text-sm text-red-500">
                {errors.name?.message}
              </span>
            )}
          </div>
        </div>
        <div className="-mx-3 mb-4 flex flex-wrap">
          <div className="w-full px-3">
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium dark:text-white"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="block w-full rounded-md border-gray-200 px-4 py-2 text-base focus:border-blue-500 focus:ring-blue-500 dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400"
              placeholder="Insira seu email"
              {...register("email")}
            />
            {errors && (
              <span className="text-sm text-red-500">
                {errors.email?.message}
              </span>
            )}
          </div>
        </div>
        <div className="-mx-3 mb-4 flex flex-wrap">
          <div className="w-full px-3">
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-medium dark:text-white"
            >
              Senha
            </label>
            <input
              type="password"
              id="password"
              className="block w-full rounded-md border-gray-200 px-4 py-2 text-base focus:border-blue-500 focus:ring-blue-500 dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400"
              placeholder="Insira sua senha"
              {...register("password")}
            />
            {errors && (
              <span className="text-sm text-red-500">
                {errors.password?.message}
              </span>
            )}
          </div>
        </div>
        <div className="-mx-3 mb-4 flex flex-wrap">
          <div className="w-full px-3">
            <label
              htmlFor="confirm"
              className="mb-2 block text-sm font-medium dark:text-white"
            >
              Confirme sua senha
            </label>
            <input
              type="password"
              id="confirm"
              className="block w-full rounded-md border-gray-200 px-4 py-2 text-base focus:border-blue-500 focus:ring-blue-500 dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400"
              placeholder="Insira sua senha novamente"
              {...register("confirm")}
            />
            {errors && (
              <span className="text-sm text-red-500">
                {errors.confirm?.message}
              </span>
            )}
          </div>
        </div>
        <div className="-mx-3 mt-6 flex flex-wrap">
          <div className="w-full px-3">
            <button
              disabled={loading}
              className={`btn w-full bg-blue-600 text-white hover:bg-blue-700 ${
                loading && "opacity-70"
              }`}
            >
              {loading ? <LoadingButton /> : <span>Cadastrar-se</span>}
            </button>
          </div>
        </div>
      </form>
      {/* <div className="my-6 flex items-center">
              <div
                className="mr-3 grow border-t border-gray-300"
                aria-hidden="true"
              ></div>
              <div className="italic text-gray-600">Or</div>
              <div
                className="ml-3 grow border-t border-gray-300"
                aria-hidden="true"
              ></div>
            </div>
            <form>
              <div className="-mx-3 mb-3 flex flex-wrap">
                <div className="w-full px-3">
                  <button className="btn relative flex w-full items-center bg-gray-900 px-0 text-white hover:bg-gray-800">
                    <svg
                      className="mx-4 h-4 w-4 shrink-0 fill-current text-white opacity-75"
                      viewBox="0 0 16 16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7.95 0C3.578 0 0 3.578 0 7.95c0 3.479 2.286 6.46 5.466 7.553.397.1.497-.199.497-.397v-1.392c-2.187.497-2.683-.993-2.683-.993-.398-.895-.895-1.193-.895-1.193-.696-.497.1-.497.1-.497.795.1 1.192.795 1.192.795.696 1.292 1.888.895 2.286.696.1-.497.298-.895.497-1.093-1.79-.2-3.578-.895-3.578-3.975 0-.895.298-1.59.795-2.087-.1-.2-.397-.994.1-2.087 0 0 .695-.2 2.186.795a6.408 6.408 0 011.987-.299c.696 0 1.392.1 1.988.299 1.49-.994 2.186-.795 2.186-.795.398 1.093.199 1.888.1 2.087.496.596.795 1.291.795 2.087 0 3.08-1.889 3.677-3.677 3.875.298.398.596.895.596 1.59v2.187c0 .198.1.497.596.397C13.714 14.41 16 11.43 16 7.95 15.9 3.578 12.323 0 7.95 0z" />
                    </svg>
                    <span className="-ml-16 flex-auto pl-16 pr-8">
                      Continue with GitHub
                    </span>
                  </button>
                </div>
              </div>
              <div className="-mx-3 flex flex-wrap">
                <div className="w-full px-3">
                  <button className="btn relative flex w-full items-center bg-red-600 px-0 text-white hover:bg-red-700">
                    <svg
                      className="mx-4 h-4 w-4 shrink-0 fill-current text-white opacity-75"
                      viewBox="0 0 16 16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7.9 7v2.4H12c-.2 1-1.2 3-4 3-2.4 0-4.3-2-4.3-4.4 0-2.4 2-4.4 4.3-4.4 1.4 0 2.3.6 2.8 1.1l1.9-1.8C11.5 1.7 9.9 1 8 1 4.1 1 1 4.1 1 8s3.1 7 7 7c4 0 6.7-2.8 6.7-6.8 0-.5 0-.8-.1-1.2H7.9z" />
                    </svg>
                    <span className="-ml-16 flex-auto pl-16 pr-8">
                      Continue with Google
                    </span>
                  </button>
                </div>
              </div>
            </form> */}
      <div className="mt-6 text-center text-gray-600">
        Já tem uma conta empresarial?{" "}
        <Link
          href="/auth/signin/company"
          className="text-blue-600 transition duration-150 ease-in-out hover:underline"
        >
          Logue-se
        </Link>
      </div>
      <div className="mt-3 text-center">
        <Link
          className="text-sm text-blue-600 transition duration-150 ease-in-out hover:text-blue-500 hover:underline"
          href="/auth/signup"
        >
          Quero me cadastrar como usuário
        </Link>
      </div>
    </div>
  );
};

export default CompanySignUpForm;
