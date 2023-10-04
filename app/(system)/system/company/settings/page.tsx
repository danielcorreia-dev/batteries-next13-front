import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import CompanyTabComponent from "@/components/features/settings/company/CompanyTabComponent";
import CardContainer from "@/components/ui/CardContainer";
import SystemHeader from "@/components/ui/SystemHeader";
import { getServerSession } from "next-auth";

export const metadata = {
  title: `Configurações - ${process.env.NEXT_PUBLIC_SITE_NAME}`,
};

const SettingsPage = async () => {
  const sessionUser = await getServerSession(authOptions);
  const company = await fetch(
    `${process.env.DOMAIN_URL}/api/company/${sessionUser?.user.id}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${sessionUser?.backendTokens.accessToken}`,
        "Content-Type": "application/json",
      },
    },
  );

  const data = await company.json();

  return (
    <>
      <SystemHeader
        title="Configurações"
        subtitle="Altere as preferências e configurações relacionadas a sua empresa"
      />
      <CardContainer className="max-w-5xl !overflow-y-auto">
        <CompanyTabComponent />
      </CardContainer>
    </>
  );
};

export default SettingsPage;
