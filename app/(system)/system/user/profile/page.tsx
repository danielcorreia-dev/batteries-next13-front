import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { Profile } from "@/components/pages/system/user-profile/Profile/";
import SystemHeader from "@/components/ui/SystemHeader";
import { getServerSession } from "next-auth";
import React from "react";

export const metadata = {
  title: `Perfil - ${process.env.NEXT_PUBLIC_SITE_NAME}`,
  description: "Página de perfil do usuário",
};

const Page = async () => {
  const session = await getServerSession(authOptions);

  const res = await fetch(
    `${process.env.DOMAIN_URL}/api/users/` + session?.user.id + "/profile",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + session?.backendTokens.accessToken,
      },
    },
  );

  const data = await res.json();
  const user = data.data;

  return (
    <>
      <SystemHeader
        title="Seu perfil"
        subtitle="Confira suas informações e desempenho"
      />
      <Profile.Root className="flex max-w-4xl flex-col !px-16 py-8">
        <Profile.Header user={user} mine />
        <Profile.Bio user={user} />
        <Profile.BadgeSection user={user} className="self-center" />
        <Profile.Tabs user={user} me />
      </Profile.Root>
    </>
  );
};

export default Page;
