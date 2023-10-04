import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

type Props = {};

const UserSystemHomeIndex = async (props: Props) => {
  const session = await getServerSession(authOptions);
  if (session) {
    redirect("/system/user/profile");
  }
};

export default UserSystemHomeIndex;
