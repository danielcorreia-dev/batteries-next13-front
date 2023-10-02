import Sidebar from "@/components/layouts/system/Sidebar";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const SystemUserLayout = ({ children }: Props) => {
  return (
    <>
      <div>
        <Sidebar />
        <div className="h-screen w-full bg-neutral-100 px-4 py-8 pt-10 dark:bg-slate-900 sm:px-6 md:px-8 lg:pl-[30%]">
          {children}
        </div>
      </div>
    </>
  );
};

export default SystemUserLayout;
