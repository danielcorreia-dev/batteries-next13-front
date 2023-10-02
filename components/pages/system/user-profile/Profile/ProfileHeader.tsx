// "use client";

import { Avatar } from "flowbite-react";
import Image from "next/image";
import ProfilePic from "@/public/images/profile-pic-woman.jpg";
import React, { FC } from "react";
import { userInfo } from "os";
import ProfileBadge from "./ProfileBadge";
import { IconRecycle } from "@tabler/icons-react";

type Props = {
  user: UserProps;
};

interface UserProps {
  name: string;
}

const ProfileHeader: FC<Props> = ({ user }) => {
  let name = user.name || "";
  name = user.name.charAt(0).toUpperCase() + user.name.slice(1);

  return (
    <div className="container">
      <div className="flex flex-wrap items-center justify-between gap-8">
        <div className="flex items-center gap-8">
          <div className="relative h-[3.875rem] w-[3.875rem] ">
            <Image
              className="inline-block rounded-full ring-2 ring-white dark:ring-gray-800"
              src={ProfilePic}
              alt="Image Description"
              fill
            />
          </div>
          <h2 className="text-2xl">{name}</h2>
        </div>
        <div>
          <ul className="flex gap-4">
            <li>
              <ProfileBadge icon={IconRecycle} label="Descartes" value={1} />
            </li>{" "}
            {/* Pontos */}
            <li>fsdf</li> {/* Descartes */}
            <li>asfd</li> {/* Conquinas */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
