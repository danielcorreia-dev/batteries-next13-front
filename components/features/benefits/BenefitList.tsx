import { IconPlus } from "@tabler/icons-react";
import { FC } from "react";
import BenefitItem from "./BenefitItem";
import Link from "next/link";

type Props = {
  benefits: Benefit[];
};

type Benefit = {
  id: number;
  name: string;
  points: number;
  description?: string;
  active: boolean;
  createdAt: string;
};

const BenefitList: FC<Props> = ({ benefits }) => {
  return (
    <>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-sm dark:text-neutral-300">
            Número total de benefícios: {benefits.length}
          </h2>
        </div>
        <Link
          href="/system/company/benefits/create"
          type="button"
          className="inline-flex items-center justify-center gap-2 rounded-md border border-transparent bg-blue-500 px-3 py-2 text-sm font-semibold text-white transition-all hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
        >
          Criar Benefício
          <span>
            <IconPlus size={16} />
          </span>
        </Link>
      </div>
      <div>
        <ul className="flex flex-col gap-4">
          {benefits &&
            benefits.map((benefit) => (
              <li key={benefit.id}>
                <BenefitItem benefit={benefit} />
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};

export default BenefitList;
