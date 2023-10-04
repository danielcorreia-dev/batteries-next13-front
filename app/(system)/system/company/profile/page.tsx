import CardContainer from "@/components/ui/CardContainer";
import SystemHeader from "@/components/ui/SystemHeader";
import React from "react";

type Props = {};

const Profile = (props: Props) => {
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
