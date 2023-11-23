import CardContainer from "@/components/ui/CardContainer";
import { FC, ReactNode } from "react";

interface ProfileRootProps {
  children: ReactNode;
  className?: string;
}

const ProfileRoot: FC<ProfileRootProps> = ({ children, className }) => {
  return CardContainer({ children, className });
};

export default ProfileRoot;
