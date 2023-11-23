import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import React from "react";

const SystemHome = async () => {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect("/system/user");
  }

  redirect("/auth/signin");
};

export default SystemHome;
