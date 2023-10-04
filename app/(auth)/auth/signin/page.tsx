import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import UserSignInForm from "@/components/features/auth/UserSignInForm";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";

export const metadata = {
  title: `Login - ${process.env.NEXT_PUBLIC_SITE_NAME}`,
  description: "Page description",
};

export default async function SignIn() {
  const session = await getServerSession(authOptions);

  if (session) {
    if (session.user.type === "company") {
      return redirect("/system/company/profile");
    } else if (session.user.type === "user") {
      return redirect("/system/user/profile");
    }
  }

  return (
    <section className="bg-gradient-to-b from-gray-100 to-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 pt-32 md:pb-20 md:pt-40">
          {/* Page header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
            <h1 className="h1">
              Bem vindo de volta. O meio ambiente anseia o seu retorno.
            </h1>
          </div>
          {/* Form */}
          <UserSignInForm />
        </div>
      </div>
    </section>
  );
}
