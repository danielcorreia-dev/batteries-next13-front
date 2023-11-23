import {
  IconArrowBarToLeft,
  IconChevronDown,
  IconSettings,
} from "@tabler/icons-react";
import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import AvatarPlaceholder from "@/public/images/avatar-placeholder.svg";

type Props = {
  session: any;
  user?: "user" | "company";
};

const SidebarAvatar: FC<Props> = ({ session, user = "user" }) => {
  return (
    <div className="hs-dropdown relative inline-flex animate-fade">
      <button
        id="hs-dropdown-custom-trigger"
        type="button"
        className="hs-dropdown-toggle inline-flex items-center justify-center gap-2 rounded-full border bg-white py-1 pl-1 pr-3 align-middle text-sm font-medium text-gray-700 shadow-sm transition-all hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white dark:border-slate-400 dark:bg-slate-600 dark:text-neutral-200 dark:hover:bg-slate-800 dark:hover:text-white dark:focus:ring-offset-slate-800"
      >
        <div className="relative h-6 w-6">
          <Image
            src={session.user.avatar || AvatarPlaceholder}
            fill
            alt="Profile picture"
          />
        </div>
        <div className="flex items-center gap-1">
          <span className="max-w-[7.5rem] truncate font-medium text-gray-600 dark:text-neutral-300">
            {session.user.name}
          </span>
          <IconChevronDown size={16} />
        </div>
      </button>

      <div
        className="hs-dropdown-menu duration mt-2 hidden min-w-[15rem] rounded-lg bg-white p-2 opacity-0 shadow-md transition-[opacity,margin] hs-dropdown-open:opacity-100 dark:border dark:border-slate-700 dark:bg-slate-900"
        aria-labelledby="hs-dropdown-custom-trigger"
      >
        <Link
          className="flex items-center gap-x-3.5 rounded-md px-3 py-2 text-sm text-gray-800 transition-colors hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-neutral-300 dark:hover:bg-slate-700 dark:hover:text-gray-300"
          href={
            user === "user"
              ? "/system/user/settings"
              : "/system/company/settings"
          }
        >
          <IconSettings size={20} />
          Configurações
        </Link>
        <div
          className="flex cursor-pointer items-center gap-x-3.5 rounded-md px-3 py-2 text-sm text-gray-800 transition-colors hover:bg-gray-100 hover:text-red-500 focus:ring-2 focus:ring-blue-500 dark:text-neutral-300 dark:hover:bg-slate-700 dark:hover:text-red-500"
          onClick={() => signOut({ callbackUrl: "/" })}
        >
          <IconArrowBarToLeft size={20} />
          Deslogar
        </div>
      </div>
    </div>
  );
};

export default SidebarAvatar;
