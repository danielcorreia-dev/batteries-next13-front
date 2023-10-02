import RankingList from "@/components/pages/system/ranking/RankingList";
import CardContainer from "@/components/ui/CardContainer";
import SystemHeader from "@/components/ui/SystemHeader";
import React from "react";

type Props = {};

const Ranking = async (props: Props) => {
  const rankingList = await fetch(
    `${process.env.DOMAIN_URL}/api/users/ranking`,
  );
  const data = await rankingList.json();
  const users = data.data;

  return (
    <>
      <SystemHeader
        title="Ranking"
        subtitle="Listagem dos usuários com maior pontuação da plataforma"
      />
      <CardContainer className="max-w-5xl">
        <RankingList users={users}/>
      </CardContainer>
    </>
  );
};

export default Ranking;
