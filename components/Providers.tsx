"use client";

import { SessionProvider } from "next-auth/react";
import { ReactNode, useEffect } from "react";

interface Props {
  children: ReactNode;
}

const Providers = ({ children }: Props) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default Providers;
