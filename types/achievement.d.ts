import { TablerIconNames } from "@/components/ui/GetIcon";

export type Achievement = {
  id: number;
  icon: TablerIconNames;
  name: string;
  description: string;
  requiredDiscard: null | number;
  requiredPoints: null | number;
  userHasAchievement: boolean;
  date: null | Date;
};
