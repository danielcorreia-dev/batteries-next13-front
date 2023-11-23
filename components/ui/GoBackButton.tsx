"use client";

import { IconArrowBackUp } from "@tabler/icons-react";
import { useRouter } from "next/navigation";

const GoBackButton = () => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.back()}
      className="inline-flex items-center justify-center gap-2 rounded-md border-2 border-blue-200 px-3 py-2 text-sm font-semibold text-blue-500 transition-all hover:border-blue-500 hover:bg-blue-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-200 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
    >
      <span>
        <IconArrowBackUp size={16} />
      </span>
      Voltar
    </button>
  );
};

export default GoBackButton;
