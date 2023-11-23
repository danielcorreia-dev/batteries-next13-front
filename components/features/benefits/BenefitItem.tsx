"use client";
import truncateString from "@/utils/truncate-string";
import { zodResolver } from "@hookform/resolvers/zod";
import { IconEditCircle, IconTag, IconTrash } from "@tabler/icons-react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import z from "zod";

type Props = {
  benefit: Benefit;
};

type Benefit = {
  id: number;
  name: string;
  points: number;
  description?: string;
  active: boolean;
  createdAt: string;
};

interface FormValues {
  name: string;
  description: string;
  points: number;
}

const schema = z.object({
  name: z.string().nonempty({ message: "O nome é obrigatório" }),
  description: z.string().optional(),
  points: z.coerce
    .number({ invalid_type_error: "Pontos só podem ser números" })
    .nonnegative({ message: "Os pontos são obrigatórios" }),
});

const BenefitItem: FC<Props> = ({ benefit }) => {
  const [active, setActive] = useState<boolean>(benefit.active);
  const { id, name, description, points, createdAt } = benefit;
  const { data: session } = useSession();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name, description, points },
  });

  const router = useRouter();

  const onSubmit = async (data: FormValues) => {
    const { name, description, points } = data;
    try {
      const updateRes = await fetch(
        `/nest-api/company/${session?.user.id}/benefits/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            description,
            points,
          }),
        },
      );

      if (updateRes.ok) {
        toast.success("Benefício atualizado com sucesso");
        const element = document.querySelector(
          `[data-hs-overlay="#hs-modal-edit-${id}"]`,
        );
        if (element) (element as HTMLElement).click();
        router.refresh();
      }

      if (updateRes.status === 400) {
        toast.error("Erro ao atualizar benefício");
      }
    } catch (e) {
      console.log(e);
      toast.error("Erro ao atualizar benefício");
    }
  };

  const handleToggle = async (id: number) => {
    const updateRes = await fetch(
      `/nest-api/company/${session?.user.id}/benefits/${id}/active`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

    if (updateRes.ok) {
      setActive(!active);
    }
  };

  const handleDelete = async (id: number) => {
    const updateRes = await fetch(
      `/nest-api/company/${session?.user.id}/benefits/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

    if (updateRes.ok) {
      toast.success("Benefício deletado com sucesso");
      router.refresh();
    }
  };

  return (
    <>
      <div className="rounded bg-neutral-200/30 px-4 py-4 transition-shadow hover:shadow-md dark:bg-slate-800">
        <div
          className="mb-2 flex cursor-pointer items-center justify-between"
          data-hs-overlay={`#hs-vertically-centered-modal-${id}`}
        >
          <div className="flex items-center gap-4">
            <span className="inline-flex h-[46px] w-[46px] items-center justify-center rounded-full border-4 border-blue-100 bg-blue-200 text-blue-600">
              <IconTag />
            </span>
            <div className="flex flex-col">
              <span className="dark:text-neutral-200">{name}</span>
              {description && (
                <p className="text-sm dark:text-neutral-300/90">
                  {truncateString(description, 50)}
                </p>
              )}
            </div>
          </div>
          <div>
            <div className="flex flex-col items-end">
              <span className="text-xs text-gray-500 dark:text-neutral-300/75">
                Pontos necessários para desbloquear
              </span>
              <span className="text--400 text-md font-semibold dark:text-neutral-300">
                {points}
              </span>
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <div>
            <span className="text-xs text-gray-400 dark:text-neutral-300/70">
              {createdAt &&
                `Criado em: ${new Date(createdAt).toLocaleDateString("pt-BR", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                })}`}
            </span>
          </div>
          <div className="flex gap-5">
            <div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="hs-basic-with-description-checked"
                  className="relative h-7 w-[3.25rem] shrink-0 cursor-pointer appearance-none rounded-full border border-2 border-transparent border-transparent bg-gray-100 ring-1 ring-transparent ring-offset-white transition-colors duration-200 ease-in-out before:inline-block before:h-6 before:w-6 before:translate-x-0 before:transform before:rounded-full before:bg-white before:shadow

  before:ring-0 before:transition before:duration-200 before:ease-in-out checked:bg-blue-600 checked:bg-none checked:before:translate-x-full checked:before:bg-blue-200 focus:border-blue-600 focus:outline-none focus:ring-blue-600 dark:bg-gray-700 dark:before:bg-gray-400 dark:checked:bg-blue-600 dark:checked:before:bg-blue-200 dark:focus:ring-offset-gray-800"
                  checked={active}
                  onClick={() => {
                    handleToggle(id);
                  }}
                />
                <label
                  htmlFor="hs-basic-with-description-checked"
                  className="ml-3 text-sm text-gray-500 dark:text-gray-400"
                  onClick={() => {
                    handleToggle(id);
                  }}
                >
                  Ativo
                </label>
              </div>
            </div>
            <span title="Editar" data-hs-overlay={"#hs-modal-edit-" + id}>
              <IconEditCircle className="cursor-pointer text-blue-500 transition-colors hover:text-blue-700" />
            </span>

            <span title="Deletar" onClick={() => handleDelete(id)}>
              <IconTrash className="cursor-pointer text-red-500 transition-colors hover:text-red-700" />
            </span>
          </div>
        </div>
      </div>

      {/* Detail Modal */}
      <div
        id={`hs-vertically-centered-modal-${id}`}
        className="hs-overlay fixed left-0 top-0 z-[60] hidden h-full w-full overflow-y-auto overflow-x-hidden"
      >
        <div className="m-3 mt-0 flex min-h-[calc(100%-3.5rem)] items-center opacity-0 transition-all ease-out hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 sm:mx-auto sm:w-full  sm:max-w-lg">
          <div className="flex w-full flex-col rounded-xl border bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:shadow-slate-700/[.7]">
            <div className="flex items-center justify-between border-b px-4 py-3 dark:border-gray-700">
              <h3 className="font-bold text-gray-800 dark:text-white">
                Modal title
              </h3>
              <button
                type="button"
                className="hs-dropdown-toggle inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-md text-sm text-gray-500 transition-all hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800"
                data-hs-overlay={`#hs-vertically-centered-modal-${id}`}
              >
                <span className="sr-only">Fechar</span>
                <svg
                  className="h-3.5 w-3.5"
                  width={8}
                  height={8}
                  viewBox="0 0 8 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>
            <div className="overflow-y-auto p-4">
              <p className="text-gray-800 dark:text-gray-400">
                {description ? description : "Sem descrição"}
              </p>
            </div>
            <div className="flex items-center justify-end gap-x-2 border-t px-4 py-3 dark:border-gray-700">
              <button
                type="button"
                className="hs-dropdown-toggle inline-flex items-center justify-center gap-2 rounded-md border bg-white px-4 py-3 align-middle text-sm font-medium text-gray-700 shadow-sm transition-all hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400 dark:hover:bg-slate-800 dark:hover:text-white dark:focus:ring-offset-gray-800"
                data-hs-overlay={`#hs-vertically-centered-modal-${id}`}
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Edit Modal */}
      <div
        id={"hs-modal-edit-" + id}
        className="hs-overlay fixed left-0 top-0 z-[60] hidden h-full w-full overflow-y-auto overflow-x-hidden"
      >
        <div className="m-3 mt-0 opacity-0 transition-all ease-out hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 sm:mx-auto sm:w-full sm:max-w-lg">
          <div className="rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <div className="p-4 sm:p-7">
              <div className="text-center">
                <h2 className="block text-2xl font-bold text-gray-800 dark:text-gray-200">
                  Editar Benefício
                </h2>
              </div>
              <div className="mt-5">
                {/* Form */}
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="grid gap-y-4">
                    {/* Form Group */}
                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-sm dark:text-white"
                      >
                        Nome do benefício
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          id="name"
                          className="block w-full rounded-md border-gray-200 px-4 py-3 text-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400"
                          {...register("name")}
                        />
                      </div>
                      {errors.name && (
                        <span className="text-red-500">
                          {errors.name.message}
                        </span>
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="description"
                        className="mb-2 block text-sm dark:text-white"
                      >
                        Descrição
                      </label>
                      <div className="relative">
                        <textarea
                          id="description"
                          className="block w-full rounded-md border-gray-200 px-4 py-3 text-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400"
                          rows={3}
                          {...register("description")}
                        />
                      </div>
                    </div>
                    {/* End Form Group */}
                    {/* Form Group */}
                    <div>
                      <label
                        htmlFor="points"
                        className="mb-2 block text-sm dark:text-white"
                      >
                        Pontuação necessária para resgatar
                      </label>
                      <div className="relative mb-2">
                        <input
                          type="text"
                          id="points"
                          className="block w-full rounded-md border-gray-200 px-4 py-3 text-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400"
                          {...register("points")}
                        />
                      </div>
                      {errors.points && (
                        <span className="text-sm text-red-500">
                          {errors.points.message}
                        </span>
                      )}
                    </div>
                    {/* End Form Group */}
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-2 rounded-md border border-transparent bg-blue-500 px-4 py-3 text-sm font-semibold text-white transition-all hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
                    >
                      Editar
                    </button>
                  </div>
                </form>
                {/* End Form */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BenefitItem;
