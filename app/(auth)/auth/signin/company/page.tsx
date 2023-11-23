import CompanySignInForm from "@/components/features/auth/CompanySignInForm";

type Props = {};

const CompanySignIn = (props: Props) => {
  return (
    <section className="bg-gradient-to-b from-gray-100 to-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 pt-32 md:pb-20 md:pt-40">
          {/* Page header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
            <h1 className="h1">
              Bem vindo de volta. O meio ambiente agradece o seu retorno.
            </h1>
          </div>
          {/* Form */}
          <CompanySignInForm />
        </div>
      </div>
    </section>
  );
};

export default CompanySignIn;
