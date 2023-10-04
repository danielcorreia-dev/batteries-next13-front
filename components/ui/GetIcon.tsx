import * as TablerIcons from "@tabler/icons-react";
import { FC } from "react";

// Define a type for valid icon names
export type TablerIconNames = keyof typeof TablerIcons;

interface IconProps {
  icon: TablerIconNames; // Ensure that icon is a valid icon name
  className: string;
}

const GetIcon: FC<IconProps> = ({ icon, className }) => {
  const IconComponent = TablerIcons[icon] as FC<any>; // Use a type assertion

  if (!IconComponent) {
    // If the icon is not found, you can return a default icon or handle it as needed.
    return <TablerIcons.IconTrophy />;
  }

  return <IconComponent className={className} />;
};

export default GetIcon;
