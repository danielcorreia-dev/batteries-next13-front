import React, { ElementType, FC } from "react";

interface Props {
  icon: ElementType;
  iconStyle?: string;
  title: string;
  value: number;
}

const MetricsCard: FC<Props> = ({ icon: Icon, iconStyle, title, value }) => {
  return (
    <div className="flex flex-col rounded-xl border bg-white shadow-sm dark:border-gray-800 dark:bg-slate-900">
      <div className="p-4 md:p-5">
        <div className="flex items-center gap-x-2">
          <p className="text-xs uppercase tracking-wide text-gray-500">
            {title}
          </p>
          <div>
            <span>
              <Icon size={16} className={iconStyle || "text-gray-400"} />
            </span>
          </div>
        </div>
        <div className="mt-1 flex items-center">
          <h3 className="text-xl font-medium text-gray-800 dark:text-gray-200 sm:text-2xl">
            {value}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default MetricsCard;
