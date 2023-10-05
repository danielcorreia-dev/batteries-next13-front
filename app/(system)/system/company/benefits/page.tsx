import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import BenefitList from "@/components/features/benefits/BenefitList";
import CardContainer from "@/components/ui/CardContainer";
import SystemHeader from "@/components/ui/SystemHeader";
import { getServerSession } from "next-auth";

export const metadata = {
  title: `Benefícios - ${process.env.NEXT_PUBLIC_SITE_NAME}`,
  description: "Página de benefícios",
};

const BenefitPage = async () => {
  const session = await getServerSession(authOptions);

  const benefits = await fetch(
    `${process.env.DOMAIN_URL}/api/company/${session?.user.id}/benefits`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${session?.backendTokens.accessToken}`,
      },
    },
  );

  const benefitsJson = await benefits.json();
  const data = benefitsJson.data;

  return (
    <>
      <SystemHeader
        title="Benefícios"
        subtitle="Gerencie, crie e edite seus benefícios"
      />
      <CardContainer>
        <BenefitList benefits={data} />
      </CardContainer>
    </>
  );
};

export default BenefitPage;
