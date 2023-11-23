import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import AchievementsGrid from "@/components/pages/system/achievements/AchievementsGrid";
import CardContainer from "@/components/ui/CardContainer";
import SystemHeader from "@/components/ui/SystemHeader";
import { Achievement } from "@/types/achievement";
import { getServerSession } from "next-auth";
import React from "react";

type Props = {
  achievements: Achievement[];
};

const Achievements = async (props: Props) => {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  const res = await fetch(
    `${process.env.DOMAIN_URL}/api/users/${user?.id}/achievements`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${session?.backendTokens.accessToken}`,
      },
    },
  );
  const data = await res.json();
  const achievements: Achievement[] = data.data;
  return (
    <>
      <SystemHeader
        title="Conquistas"
        subtitle="Veja todas as conquistas que você pode obter"
      />
      <CardContainer className="max-w-5xl">
        <AchievementsGrid achievements={achievements} />
      </CardContainer>
    </>
  );
};

export default Achievements;
