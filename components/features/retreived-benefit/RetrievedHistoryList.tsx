import SystemHeader from "@/components/ui/SystemHeader";
import { FC } from "react";

type RetrievedHistoryListProps = {
  discards: any[];
};

const RetrievedHistoryList: FC<RetrievedHistoryListProps> = ({ discards }) => {
  return (
    <div>
      <SystemHeader
        title="Seu histórico de benefícios resgatados"
        titleSize="text-base"
      />
      <div></div>
    </div>
  );
};

export default RetrievedHistoryList;
