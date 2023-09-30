"use client";

import { Flowbite } from "flowbite-react";
import { SessionProvider } from "next-auth/react";
import { ReactNode, useEffect } from "react";

interface Props {
  children: ReactNode;
}

const Providers = ({ children }: Props) => {
  useEffect(() => {
    import("preline");
  }, []);

  return (
    <SessionProvider>
      <Flowbite>{children}</Flowbite>
    </SessionProvider>
  );
};

export default Providers;
