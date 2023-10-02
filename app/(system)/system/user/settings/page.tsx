import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import TabComponent from "@/components/features/settings/TabComponent";
import CardContainer from "@/components/ui/CardContainer";
import SystemHeader from "@/components/ui/SystemHeader";
import { getServerSession } from "next-auth";
import React from "react";

export const metadata = {
  title: `Configurações - ${process.env.NEXT_PUBLIC_SITE_NAME}`,
};

const Settings = async () => {
  const sessionUser = await getServerSession(authOptions);

  const user = await fetch(
    `${process.env.DOMAIN_URL}/api/users/${sessionUser?.user.id}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${sessionUser?.backendTokens.accessToken}`,
        "Content-Type": "application/json",
      },
    },
  );

  const data = await user.json();
  const userData = await data.data;

  return (
    <>
      <SystemHeader
        title="Configurações"
        subtitle="Altere as preferências e configurações relacionadas a sua conta"
      />
      <CardContainer className="max-w-5xl !overflow-y-auto">
        <TabComponent user={userData} />
      </CardContainer>
    </>
  );
};

export default Settings;
