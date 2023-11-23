export const metadata = {
  title: `Cadastro Empresa - ${process.env.NEXT_PUBLIC_SITE_NAME}`,
  description: "Página de cadastro para empresas.",
};

import CompanySignUpForm from "@/components/features/auth/CompanySignUpForm";

export default function CompanySignUp() {
  return (
    <section className="bg-gradient-to-b from-gray-100 to-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 pt-32 md:pb-20 md:pt-24">
          {/* Page header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-14">
            <h1 className="h1">
              Bem vindo. Obrigado por ajudar o meio ambiente.
            </h1>
          </div>

          {/* Form */}
          <CompanySignUpForm />
        </div>
      </div>
    </section>
  );
}
