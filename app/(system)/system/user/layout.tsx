import Sidebar from "@/components/layouts/system/Sidebar";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const SystemUserLayout = ({ children }: Props) => {
  return (
    <>
      <Sidebar />
      <div className="w-full px-72 pt-10 sm:px-6 md:px-8 lg:pl-80">
        {children}
      </div>
    </>
  );
};

export default SystemUserLayout;
