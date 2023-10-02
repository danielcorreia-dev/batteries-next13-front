import React, { FC } from "react";

type SystemHeaderProps = {
  title: string;
};

const SystemHeader: FC<SystemHeaderProps> = ({ title }) => {
  return (
    <div>
      <h2 className="mb-4 text-2xl font-semibold dark:text-neutral-300">
        {title}
      </h2>
    </div>
  );
};

export default SystemHeader;
