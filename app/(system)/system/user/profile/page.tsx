import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { Profile } from "@/components/pages/system/user-profile/Profile";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { IconChevronRight } from "@tabler/icons-react";
import { getServerSession } from "next-auth";
import React from "react";

export const metadata = {
  title: `Perfil - ${process.env.NEXT_PUBLIC_SITE_NAME}`,
  description: "Página de perfil do usuário",
};

type Props = {};

const Page = async (props: Props) => {
  const session = await getServerSession(authOptions);

  const res = await fetch(
    `${process.env.DOMAIN_URL}/api/users/` + session?.user.id,
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
      <Profile.Root className="max-w-5xl">
        <Profile.Header user={user} />
      </Profile.Root>
    </>
  );
};

export default Page;
