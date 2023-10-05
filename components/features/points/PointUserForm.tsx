"use client";

import { IconUser } from "@tabler/icons-react";
import { FC } from "react";

interface Props {
  benefitsList: BenefitSelectProps[];
}

interface BenefitSelectProps {
  id: number;
  name: string;
  points: number;
}

const PointUserForm: FC<Props> = ({ benefitsList }) => {
  return (
    <div>
      <form>
        <div className="mb-4">
          <label
            htmlFor="hs-trailing-icon"
            className="mb-2 block text-sm font-medium dark:text-white"
          >
            Nome do usuário
          </label>
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 right-0 z-20 flex items-center pr-4">
              <IconUser />
            </div>
            <input
              type="text"
              id="hs-trailing-icon"
              name="hs-trailing-icon"
              className="block w-full rounded-md border-gray-200 px-4 py-3 pr-11 text-sm shadow-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400"
              placeholder="Insira o nome do usuário"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <select
            id="af-submit-app-category"
            className="block w-full rounded-lg border-gray-200 px-3 py-2 pr-9 text-sm shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400"
          ></select>

          <input type="text" />
        </div>
      </form>
    </div>
  );
};

export default PointUserForm;
