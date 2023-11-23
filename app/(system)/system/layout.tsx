import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import CompanySidebar from "@/components/layouts/system/CompanySidebar";
import Sidebar from "@/components/layouts/system/Sidebar";
import { getServerSession } from "next-auth";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const SystemUserLayout = async ({ children }: Props) => {
  const session = await getServerSession(authOptions);

  return (
    <>
      <div>
        {session?.user.type === "company" ? <CompanySidebar /> : <Sidebar />}
        <div className="h-screen w-full bg-neutral-100 px-4 py-8 pt-10 dark:bg-slate-900 sm:px-6 md:px-8 lg:pl-[30%]">
          {children}
        </div>
      </div>
    </>
  );
};

export default SystemUserLayout;
