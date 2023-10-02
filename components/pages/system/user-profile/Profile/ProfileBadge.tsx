import React, { ElementType } from "react";

type BadgeProps = {
  icon: ElementType;
  iconColor?: string;
  borderColor?: string;
  borderSize?: string;
  label: string;
  value?: number;
};

const ProfileBadge = ({
  icon: Icon,
  iconColor,
  borderColor,
  borderSize,
  label,
  value,
}: BadgeProps) => {
  return (
    <div className={`flex flex-col items-center`}>
      <span
        className={`inline-flex h-[46px] w-[46px] items-center justify-center rounded-full border border-gray-700 text-gray-700 dark:border-gray-200 dark:text-gray-200 ${borderColor} ${borderSize}`}
      >
        <Icon className={iconColor} />
      </span>
      <p className="text-sm dark:text-neutral-200">{label}</p>
      {value && (
        <p className="text-sm font-semibold dark:text-neutral-200">{value}</p>
      )}
    </div>
  );
};

export default ProfileBadge;
