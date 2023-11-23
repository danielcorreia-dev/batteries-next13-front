import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

const CardContainer = ({ children, className }: Props) => (
  <div
    className={`rounded border bg-neutral-50 px-8 py-6 shadow-md dark:border-slate-600 dark:bg-slate-700 ${className}`}
  >
    {children}
  </div>
);

export default CardContainer;
