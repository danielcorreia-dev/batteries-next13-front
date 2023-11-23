import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import PointUserForm from "@/components/features/points/PointUserForm";
import CardContainer from "@/components/ui/CardContainer";
import SystemHeader from "@/components/ui/SystemHeader";
import { getServerSession } from "next-auth";
import React from "react";

export const metadata = {
  title: `Pontuar - ${process.env.NEXT_PUBLIC_SITE_NAME}`,
  description: "Página de pontos",
};

const PointsPage = async () => {
  const session = await getServerSession(authOptions);

  const resBenefits = await fetch(
    `${process.env.DOMAIN_URL}/api/company/${session?.user.id}/benefits`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${session?.backendTokens.accessToken}`,
      },
    },
  );

  const benefits = await resBenefits.json();
  const benefitsData = benefits.data;

  return (
    <>
      <SystemHeader
        title="Pontuar"
        subtitle="Pontue usuários por seus descartes realizados"
      />
      <CardContainer className="max-w-4xl">
        <PointUserForm benefitsList={benefitsData} />
      </CardContainer>
    </>
  );
};

export default PointsPage;
