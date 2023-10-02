import React, { ElementType } from "react";

type BadgeProps = {
  icon: ElementType;
  label: string;
  value?: number;
};

const ProfileBadge = ({ icon: Icon, label, value }: BadgeProps) => {
  return (
    <div className="flex flex-col items-center">
      <span className="inline-flex h-[46px] w-[46px] items-center justify-center rounded-full border border-gray-700 text-gray-700 dark:border-gray-200 dark:text-gray-200">
        <Icon />
      </span>
      <p className="text-sm">{label}</p>
      {value && <p className="text-sm font-semibold">{value}</p>}
    </div>
  );
};

export default ProfileBadge;
