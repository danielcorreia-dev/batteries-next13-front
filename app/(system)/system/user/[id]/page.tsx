import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { Profile } from "@/components/pages/system/user-profile/Profile";
import CardContainer from "@/components/ui/CardContainer";
import SystemHeader from "@/components/ui/SystemHeader";
import { getServerSession } from "next-auth";
import React from "react";

export const metadata = {
  title: `Perfil - ${process.env.NEXT_PUBLIC_SITE_NAME}`,
  description: "Página de perfil do usuário",
};

type Props = {
  params: {
    id: string;
  };
};

const Page = async (props: Props) => {
  console.log(props.params.id);
  const session = await getServerSession(authOptions);
  const res = await fetch(
    `${process.env.DOMAIN_URL}/api/users/` + props.params.id,
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
      <SystemHeader title="Perfil de usuário" />
      <div className="container grid gap-6  md:grid-cols-8">
        <Profile.Root className="col-span-6">
          <Profile.Header user={user} />
        </Profile.Root>
        <CardContainer className="col-span-2">asdf</CardContainer>
      </div>
    </>
  );
};

export default Page;
