import { IconBatteryEco, IconLeaf, IconPill } from "@tabler/icons-react";
import Link from "next/link";
import { FC } from "react";

type Props = {
  discard: TDiscard;
};

type TDiscard = {
  id: number;
  type: string;
  name: string;
  date: string;
  points: number;
};

const DiscardItem: FC<Props> = ({ discard }) => {
  const { id, type, name, date, points } = discard;
  return (
    <Link href={"/system/company/" + id}>
      <div className="rounded bg-neutral-200/30 transition-shadow hover:shadow-md">
        <div className="flex items-center justify-between px-4 py-4">
          <div className="flex items-center gap-4">
            <span className="inline-flex h-[46px] w-[46px] items-center justify-center rounded-full border-4 border-blue-100 bg-blue-200 text-blue-600">
              {type === "BATTERY" && <IconBatteryEco />}
              {type === "BOTH" && <IconLeaf />}
              {type === "MEDICINE" && <IconPill />}
            </span>
            <div className="flex flex-col ">
              <p>{name}</p>
              <span className="text-xs text-gray-400">
                {date || "Sem data"}
              </span>
            </div>
          </div>
          <div>
            <div className="flex flex-col items-end">
              <span className="text--400 text-md font-semibold">{points}</span>
              <span className="text-xs text-gray-500">Pontos</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default DiscardItem;
