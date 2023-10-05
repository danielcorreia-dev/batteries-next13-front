"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { IconRecycle, IconUser } from "@tabler/icons-react";
import { FC } from "react";
import { useForm } from "react-hook-form";
import z from "zod";

interface Props {
  benefitsList: BenefitSelectProps[];
}

interface BenefitSelectProps {
  id: number;
  name: string;
  points: number;
}

interface FormValues {
  name: string;
  benefit: number;
  type: string;
}

const schema = z.object({
  name: z.string().min(2).max(255),
});
const PointUserForm: FC<Props> = ({ benefitsList }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormValues) => console.log(data);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label
            htmlFor="hs-trailing-icon"
            className="mb-2 block text-sm font-medium dark:text-white"
          >
            Nome do usuário
            <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 right-0 z-20 flex items-center pr-4">
              <IconUser />
            </div>
            <input
              type="text"
              id="hs-trailing-icon"
              className="block w-full rounded-md border-gray-200 px-4 py-3 pr-11 text-sm shadow-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400"
              placeholder="Insira o username único do usuário"
              {...register("name")}
            />
          </div>
        </div>
        <div className="mb-8 grid grid-cols-2 gap-3">
          <div>
            <label
              htmlFor="benefit-list"
              className="mb-2 block text-sm font-medium dark:text-white"
            >
              Benefício
              <span className="text-red-500">*</span>
            </label>
            <select
              id="benefit-list"
              className="block w-full rounded-lg border-gray-200 px-3 py-2 pr-9 text-sm shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400"
            >
              {benefitsList.map((benefit) => (
                <option key={benefit.id} value={benefit.points}>
                  {benefit.name} - {benefit.points} pontos
                </option>
              ))}
            </select>
          </div>
          <div>
            <label
              htmlFor="benefit-list"
              className="mb-2 block text-sm font-medium dark:text-white"
            >
              Tipo do descarte
              <span className="text-red-500">*</span>
            </label>
            <select
              id="af-submit-app-category"
              className="block w-full rounded-lg border-gray-200 px-3 py-2 pr-9 text-sm shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400"
            >
              <option value="BATTERY">Pilhas / Batérias</option>
              <option value="MEDICINE">Caixas de medicamento</option>
              <option value="BOTH">Ambos</option>
            </select>
          </div>
        </div>

        <div className="mt-5 flex justify-center gap-x-2">
          <button
            type="button"
            className="inline-flex items-center justify-center gap-2 rounded-md border border-transparent bg-blue-500 px-4 py-3 text-sm font-semibold text-white transition-all hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
          >
            Pontue o usuário
            <span>
              <IconRecycle />
            </span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default PointUserForm;
