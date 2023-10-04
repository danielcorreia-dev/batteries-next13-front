import SystemHeader from "@/components/ui/SystemHeader";
import React, { FC } from "react";
import MetricsCard from "./MetricsCard";
import { IconOlympics, IconRecycle, IconSparkles } from "@tabler/icons-react";

type Props = {
  metrics: any;
};

const Metrics: FC<Props> = ({ metrics }) => {
  const { totalDiscards, totalPoints, totalAchievements } = metrics;
  return (
    <>
      <div className="mb-4">
        <SystemHeader
          title="Seus dados durante o último mês"
          titleSize="!text-base"
        />
      </div>
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
        {/* Card */}
        <MetricsCard
          icon={IconRecycle}
          title="Descartes"
          value={totalDiscards}
          iconStyle="text-green-500"
        />
        {/* End Card */}
        {/* Card */}
        <MetricsCard
          icon={IconSparkles}
          title="Pontos"
          value={totalPoints}
          iconStyle="text-yellow-500"
        />
        {/* End Card */}
        {/* Card */}
        <MetricsCard
          icon={IconOlympics}
          title="Conquistas"
          value={totalAchievements}
          iconStyle="text-blue-500"
        />
        {/* End Card */}
        {/* Card */}

        {/* End Card */}
      </div>
    </>
  );
};

export default Metrics;
