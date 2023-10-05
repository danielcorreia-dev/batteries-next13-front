import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import CardContainer from "@/components/ui/CardContainer";
import SystemHeader from "@/components/ui/SystemHeader";
import { getServerSession } from "next-auth/next";
import React from "react";

const Profile = async () => {
  const session = await getServerSession(authOptions);

  return (
    <>
      <SystemHeader
        title="Seu perfil empresarial"
        subtitle="Olhe suas informações e métricas"
      />
      <CardContainer className="max-w-5xl">
        <div></div>
      </CardContainer>
    </>
  );
};

export default Profile;
