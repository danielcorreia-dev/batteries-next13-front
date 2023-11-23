import React from "react";
import ProfileBadge from "./ProfileBadge";
import { IconMedal2, IconRecycle, IconStars } from "@tabler/icons-react";

type Props = {
  user: UserProps;
  className?: string;
};

interface UserProps {
  name: string;
  username: string;
  email: string;
  password: string;
  points: number;
  discards: any[];
  userAchievements: any[];
}

const ProfileBadgeSection = ({ user, className }: Props) => {
  return (
    <div className={`mt-8 ${className}`}>
      <ul className="flex gap-12">
        <li>
          <ProfileBadge
            icon={IconRecycle}
            iconColor="text-green-500"
            borderSize="!h-[40px] !w-[40px]"
            label="Descartes"
            value={user.discards.length}
          />
        </li>
        <li>
          <ProfileBadge
            icon={IconStars}
            iconColor="text-yellow-500"
            borderSize="!h-[40px] !w-[40px]"
            label="Pontos"
            value={user.points}
          />
        </li>
        <li>
          <ProfileBadge
            icon={IconMedal2}
            iconColor="text-blue-500"
            borderSize="!h-[40px] !w-[40px]"
            label="Conquistas"
            value={user.userAchievements.length || "0"}
          />
        </li>
      </ul>
    </div>
  );
};

export default ProfileBadgeSection;
