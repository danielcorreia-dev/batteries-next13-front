import { Achievement } from "@/types/achievement";
import AchievementItem from "./AchievementItem";
import { FC } from "react";

type Props = {
  achievements: Achievement[];
};

const AchievementsGrid: FC<Props> = ({ achievements }) => {
  return (
    <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 md:grid-cols-3 xl:grid-cols-3">
      {achievements.length > 0 &&
        achievements.map((achievement, index) => (
          <AchievementItem achievement={achievement} key={index} />
        ))}
    </div>
  );
};

export default AchievementsGrid;
