import { IconAlertCircle } from "@tabler/icons-react";
import { signOut, useSession } from "next-auth/react";
import React from "react";
import { toast } from "react-toastify";

const DeleteCompany = () => {
  const { data: session } = useSession();

  const handleConfirm = async () => {
    toast.loading("Deletando conta...", {
      position: "bottom-center",
    });

    const res = await fetch(`/nest-api/company/${session?.user.id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${session?.backendTokens.accessToken}`,
        "Content-Type": "application/json",
      },
    });

    if (res.ok) {
      toast.success("Conta deletada com sucesso!", {
        position: "bottom-center",
      });
      signOut({ callbackUrl: "/" });
    }
  };

  return (
    <>
      <div
        id="hs-vertically-centered-modal"
        className="hs-overlay fixed left-0 top-0 z-[60] hidden h-full w-full overflow-y-auto overflow-x-hidden"
      >
        <div className="m-3 mt-0 flex min-h-[calc(100%-3.5rem)] items-center opacity-0 transition-all ease-out hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 sm:mx-auto sm:w-full sm:max-w-lg">
          <div className="flex flex-col rounded-xl border bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:shadow-slate-700/[.7]">
            <div className="flex items-center justify-between border-b px-4 py-3 dark:border-gray-700">
              <div className="flex items-center gap-2">
                <span>
                  <IconAlertCircle className="text-red-500" />
                </span>
                <h3 className="font-bold text-gray-800 dark:text-white">
                  Deleção de conta
                </h3>
              </div>
              <button
                type="button"
                className="hs-dropdown-toggle inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-md text-sm text-gray-500 transition-all hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800"
                data-hs-overlay="#hs-vertically-centered-modal"
              >
                <span className="sr-only">Fechar</span>
                <svg
                  className="h-3.5 w-3.5"
                  width="8"
                  height="8"
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
                Você tem certeza que deseja <b>deletar</b> a sua conta
                empresarial por completo? Todos os seus dados incluindo
                descartes, benefícios e localização serão perdidos{" "}
                <b>permanentemente</b>.
              </p>
            </div>
            <div className="flex items-center justify-end gap-x-1 border-t px-4 py-3 dark:border-gray-700">
              <button
                type="button"
                className="hs-dropdown-toggle inline-flex items-center justify-center gap-2 rounded-md border bg-white px-4 py-3 align-middle text-sm font-medium text-gray-700 shadow-sm transition-all hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400 dark:hover:bg-slate-800 dark:hover:text-white dark:focus:ring-offset-gray-800"
                data-hs-overlay="#hs-vertically-centered-modal"
              >
                Fechar
              </button>
              <button
                onClick={handleConfirm}
                className="inline-flex items-center justify-center gap-2 rounded-md border border-transparent bg-red-500 px-4 py-3 text-sm font-semibold text-white transition-all hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
              >
                Deletar
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-2">
        <div className="mb-8">
          <h2 className="text-xl font-bold text-red-500 dark:text-gray-200">
            Deletar conta
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Ao deletar sua conta, você perderá todos os seus dados e não poderá
            recuperá-los.
          </p>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center gap-2 rounded-md border border-transparent bg-red-500 px-8 py-3 text-sm font-semibold text-white transition-all hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
          data-hs-overlay="#hs-vertically-centered-modal"
        >
          Deletar
        </button>
      </div>
    </>
  );
};

export default DeleteCompany;