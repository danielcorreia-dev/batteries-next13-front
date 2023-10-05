"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Router } from "next/router";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import z from "zod";

const schema = z.object({
  name: z.string().nonempty({ message: "O nome é obrigatório" }),
  description: z.string().optional(),
  points: z.coerce
    .number({ invalid_type_error: "Pontos só podem ser números" })
    .nonnegative({ message: "Os pontos são obrigatórios" }),
});

interface FormValues {
  name: string;
  description: string;
  points: number;
}

const BenefitCreateForm = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormValues) => {
    const { name, description, points } = data;
    console.log(data);

    const createdBenefit = await fetch(
      `/nest-api/company/${session?.user.id}/benefits`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session?.backendTokens.accessToken}`,
        },
        body: JSON.stringify({
          name,
          description,
          points,
        }),
      },
    );

    if (createdBenefit.ok) {
      toast.success("Benefício criado com sucesso");
      router.back();
    } else {
      toast.error("Erro ao criar benefício");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-2">
          <label
            htmlFor="benefit-name"
            className="mt-2.5 inline-block text-sm font-medium text-gray-800 dark:text-gray-200"
          >
            Nome do Benefício
          </label>
          <input
            id="benefit-name"
            type="text"
            className="block w-full rounded-lg border-gray-200 px-3 py-2 pr-11 text-sm shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400"
            placeholder="Insira o nome do benefício"
            {...register("name")}
          />
          {errors.name && (
            <span className="text-sm text-red-500">{errors.name.message}</span>
          )}
        </div>

        <div className="space-y-2">
          <label
            htmlFor="benefit-description"
            className="mt-2.5 inline-block text-sm font-medium text-gray-800 dark:text-gray-200"
          >
            Descrição
          </label>
          <textarea
            id="benefit-description"
            className="block w-full rounded-lg border-gray-200 px-3 py-2 text-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400"
            rows={6}
            placeholder="Detalhe sobre o objetivo, requerimento ou proposta por trás do benefício."
            {...register("description")}
          />
          {errors.description && (
            <span className="text-sm text-red-500">
              {errors.description.message}
            </span>
          )}
        </div>

        <div className="mb-8 space-y-2">
          <label
            htmlFor="benefit-points"
            className="mt-2.5 inline-block text-sm font-medium text-gray-800 dark:text-gray-200"
          >
            Pontos Necessários
          </label>
          <input
            id="benefit-points"
            type="text"
            className="block w-full rounded-lg border-gray-200 px-3 py-2 pr-11 text-sm shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400"
            placeholder="Insira os pontos para resgatar do benefício"
            {...register("points")}
          />
        </div>
        <button
          type="submit"
          className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-transparent bg-blue-500 px-4 py-3 text-sm font-semibold text-white transition-all hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
        >
          Criar benefício
        </button>
      </form>
    </div>
  );
};

export default BenefitCreateForm;
