import React, { FC } from "react";

type SystemHeaderProps = {
  title: string;
  subtitle?: string;
  titleSize?: string;
  subtitleSize?: string;
};

const SystemHeader: FC<SystemHeaderProps> = ({
  title,
  titleSize,
  subtitle,
  subtitleSize,
}) => {
  return (
    <div>
      <div
        className={`mb-4 flex flex-col gap-1 text-2xl font-semibold dark:text-neutral-300 ${titleSize}`}
      >
        <h2>{title}</h2>
        <span
          className={` text-sm font-normal text-neutral-600 dark:text-neutral-400 !${subtitleSize}`}
        >
          {subtitle}
        </span>
      </div>
    </div>
  );
};

export default SystemHeader;
