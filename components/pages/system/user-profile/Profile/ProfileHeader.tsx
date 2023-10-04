import Image from "next/image";
import ProfilePic from "@/public/images/profile-pic-woman.jpg";
import React, { FC } from "react";
import Link from "next/link";

type Props = {
  user: UserProps;
  mine?: boolean;
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

const ProfileHeader: FC<Props> = ({ user, mine }) => {
  let name = user.name || "";
  name = user.name.charAt(0).toUpperCase() + user.name.slice(1);

  return (
    <div className="container">
      <div className="flex flex-wrap items-center justify-center gap-8 md:justify-between">
        <div className="flex items-center gap-8 ">
          <div className="relative h-[3.875rem] w-[3.875rem] ">
            <Image
              className="inline-block rounded-full ring-2 ring-white dark:ring-gray-800"
              src={ProfilePic}
              alt="Image Description"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="flex flex-col">
            <h2 className="text-2xl">{name}</h2>
            <span className="text-xs text-neutral-400">@{user.username}</span>
          </div>
        </div>

        {mine && (
          <div>
            <Link
              href={"/system/user/settings"}
              className="inline-flex items-center justify-center gap-2 rounded-md border border-transparent bg-blue-500 px-4 py-3 text-sm font-semibold text-white transition-all hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
            >
              Editar perfil
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileHeader;
