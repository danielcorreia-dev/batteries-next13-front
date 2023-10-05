import { FC } from "react";
import DiscardItem from "../card-suggetions/DiscardItem";
import Metrics from "../card-suggetions/Metrics";

type Props = {
  user: UserProps;
  me?: boolean;
};

type UserProps = {
  userAchievements: any[];
  metrics: object;
  discards: any[];
};

const ProfileTabs: FC<Props> = ({ user, me = false }) => {
  return (
    <div className="mt-8">
      <div className="border-b border-gray-200 px-4 dark:border-gray-700">
        <nav className="flex space-x-2" aria-label="Tabs" role="tablist">
          <button
            type="button"
            className="active inline-flex items-center gap-2 whitespace-nowrap border-b-[3px] border-transparent px-1 py-4 text-sm text-gray-500 transition-colors hover:border-blue-300 hover:text-blue-300 hs-tab-active:border-blue-600 hs-tab-active:font-semibold hs-tab-active:text-blue-600"
            id="basic-tabs-item-1"
            data-hs-tab="#basic-tabs-1"
            aria-controls="basic-tabs-1"
            role="tab"
          >
            Descartes
          </button>
          <button
            type="button"
            className="inline-flex items-center gap-2 whitespace-nowrap border-b-[3px] border-transparent px-1 py-4 text-sm text-gray-500  transition-colors hover:border-blue-300 hover:text-blue-300 hs-tab-active:border-blue-600 hs-tab-active:font-semibold hs-tab-active:text-blue-600"
            id="basic-tabs-item-2"
            data-hs-tab="#basic-tabs-2"
            aria-controls="basic-tabs-2"
            role="tab"
          >
            Métricas
          </button>
        </nav>
      </div>

      <div className="mt-3 p-4">
        <div
          id="basic-tabs-1"
          role="tabpanel"
          aria-labelledby="basic-tabs-item-1"
        >
          {/* Content */}
          <ul>
            {user.discards.map((discard) => (
              <li key={discard.id}>
                <DiscardItem discard={discard} />
              </li>
            ))}
          </ul>
        </div>
        <div
          id="basic-tabs-2"
          className="hidden"
          role="tabpanel"
          aria-labelledby="basic-tabs-item-2"
        >
          <Metrics metrics={user.metrics} me={me} />
        </div>
      </div>
    </div>
  );
};

export default ProfileTabs;
