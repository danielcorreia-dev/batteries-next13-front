export type Achievement = {
  id: number;
  icon: string;
  name: string;
  description: string;
  requiredDiscard: null | number;
  requiredPoints: null | number;
  userHasAchievement: boolean;
  date: null | Date;
};
