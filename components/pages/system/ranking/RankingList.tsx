import { UserRank } from "@/types/user-rank";
import { FC } from "react";
import RankingListItem from "./RankingListItem";

type RankingListItemProps = {
  users: UserRank[];
};

const RankingList: FC<RankingListItemProps> = ({ users }) => {
  return (
    <ul className="flex flex-col justify-center gap-4">
      {users.map((userRank: UserRank, index: number) => (
        <li key={index}>
          <RankingListItem user={userRank} position={index} />
        </li>
      ))}
    </ul>
  );
};

export default RankingList;
