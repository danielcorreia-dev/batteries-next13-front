import BenefitCreateForm from "@/components/features/benefits/BenefitCreateForm";
import CardContainer from "@/components/ui/CardContainer";
import GoBackButton from "@/components/ui/GoBackButton";
import SystemHeader from "@/components/ui/SystemHeader";
import React from "react";

type Props = {};

export const metadata = {
  title: `Criação de benefício - ${process.env.NEXT_PUBLIC_SITE_NAME}`,
  description: "Página de criação de benefício",
};

const BenefitCreate = (props: Props) => {
  return (
    <>
      <div className="flex items-center justify-between">
        <SystemHeader
          title="Criação de benefício"
          subtitle="Crie um benefício para sua empresa"
        />
        <GoBackButton />
      </div>
      <CardContainer>
        <BenefitCreateForm />
      </CardContainer>
    </>
  );
};

export default BenefitCreate;
