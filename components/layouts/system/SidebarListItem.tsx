import Link from "next/link";
import React from "react";

type SidebarListItemProps = {
  item: SidebarItem;
  isActive: boolean;
};

type SidebarItem = {
  title: string;
  href: string;
  icon?: React.ElementType;
};

const SidebarListItem: React.FC<SidebarListItemProps> = ({
  item,
  isActive,
}) => {
  const { title, href, icon: Icon } = item;

  return (
    <Link
      href={href ?? "/"}
      className={`group flex items-center gap-x-3.5 rounded-md px-2.5 py-2 text-base transition-colors ${
        isActive
          ? "bg-sky-100 text-slate-700 hover:bg-blue-200 hover:text-slate-600 dark:bg-slate-900 dark:text-blue-300 dark:hover:bg-slate-600 dark:hover:text-blue-200"
          : "bg-gray-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-600"
      }`}
    >
      {Icon && (
        <Icon
          className={`transition-colors ${
            isActive
              ? "bg-sky-100 text-slate-700 group-hover:bg-blue-200  group-hover:text-slate-600 dark:bg-slate-900 dark:text-blue-400 dark:group-hover:bg-slate-600 group-hover:dark:text-blue-300"
              : "bg-gray-100 text-slate-700 group-hover:bg-slate-200 dark:bg-slate-900 dark:text-white dark:group-hover:bg-slate-600"
          }`}
          size={20}
        />
      )}
      <span>{title}</span>
    </Link>
  );
};

export default SidebarListItem;
