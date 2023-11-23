import React, { FC } from "react";

type Props = {
  user: UserProps;
};

interface UserProps {
  bio: string;
  createdAt: string;
}

const ProfileBio: FC<Props> = ({ user }) => {
  return (
    <div className="mt-5">
      <div className="flex max-w-sm flex-col gap-2">
        <span className="text-sm text-neutral-500">Biografia</span>
        <p className="whitespace-pre-wrap text-base text-neutral-600">
          {user.bio || "🍃"}
        </p>
        <span className="text-xs text-neutral-400">
          Entrou em {new Date(user.createdAt).toLocaleDateString()}
        </span>
      </div>
    </div>
  );
};

export default ProfileBio;
