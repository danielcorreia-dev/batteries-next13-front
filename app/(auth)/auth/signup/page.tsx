export const metadata = {
  title: "Sign Up - Simple",
  description: "Page description",
};

import UserSignUpForm from "@/components/features/auth/UserSignUpForm";
import Link from "next/link";

export default function SignUp() {
  return (
    <section className="bg-gradient-to-b from-gray-100 to-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 pt-32 md:pb-20 md:pt-40">
          {/* Page header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
            <h1 className="h1">Bem vindo. O meio ambiente </h1>
            <span className="h1 bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">
              agradece
            </span>
          </div>

          {/* Form */}
          <div className="mx-auto max-w-sm">
            <UserSignUpForm />
            {/* <div className="my-6 flex items-center">
              <div
                className="mr-3 grow border-t border-gray-300"
                aria-hidden="true"
              ></div>
              <div className="italic text-gray-600">Or</div>
              <div
                className="ml-3 grow border-t border-gray-300"
                aria-hidden="true"
              ></div>
            </div>
            <form>
              <div className="-mx-3 mb-3 flex flex-wrap">
                <div className="w-full px-3">
                  <button className="btn relative flex w-full items-center bg-gray-900 px-0 text-white hover:bg-gray-800">
                    <svg
                      className="mx-4 h-4 w-4 shrink-0 fill-current text-white opacity-75"
                      viewBox="0 0 16 16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7.95 0C3.578 0 0 3.578 0 7.95c0 3.479 2.286 6.46 5.466 7.553.397.1.497-.199.497-.397v-1.392c-2.187.497-2.683-.993-2.683-.993-.398-.895-.895-1.193-.895-1.193-.696-.497.1-.497.1-.497.795.1 1.192.795 1.192.795.696 1.292 1.888.895 2.286.696.1-.497.298-.895.497-1.093-1.79-.2-3.578-.895-3.578-3.975 0-.895.298-1.59.795-2.087-.1-.2-.397-.994.1-2.087 0 0 .695-.2 2.186.795a6.408 6.408 0 011.987-.299c.696 0 1.392.1 1.988.299 1.49-.994 2.186-.795 2.186-.795.398 1.093.199 1.888.1 2.087.496.596.795 1.291.795 2.087 0 3.08-1.889 3.677-3.677 3.875.298.398.596.895.596 1.59v2.187c0 .198.1.497.596.397C13.714 14.41 16 11.43 16 7.95 15.9 3.578 12.323 0 7.95 0z" />
                    </svg>
                    <span className="-ml-16 flex-auto pl-16 pr-8">
                      Continue with GitHub
                    </span>
                  </button>
                </div>
              </div>
              <div className="-mx-3 flex flex-wrap">
                <div className="w-full px-3">
                  <button className="btn relative flex w-full items-center bg-red-600 px-0 text-white hover:bg-red-700">
                    <svg
                      className="mx-4 h-4 w-4 shrink-0 fill-current text-white opacity-75"
                      viewBox="0 0 16 16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7.9 7v2.4H12c-.2 1-1.2 3-4 3-2.4 0-4.3-2-4.3-4.4 0-2.4 2-4.4 4.3-4.4 1.4 0 2.3.6 2.8 1.1l1.9-1.8C11.5 1.7 9.9 1 8 1 4.1 1 1 4.1 1 8s3.1 7 7 7c4 0 6.7-2.8 6.7-6.8 0-.5 0-.8-.1-1.2H7.9z" />
                    </svg>
                    <span className="-ml-16 flex-auto pl-16 pr-8">
                      Continue with Google
                    </span>
                  </button>
                </div>
              </div>
            </form> */}
            <div className="mt-6 text-center text-gray-600">
              Já tem uma conta?{" "}
              <Link
                href="/auth/signin"
                className="text-blue-600 transition duration-150 ease-in-out hover:underline"
              >
                Logue-se
              </Link>
            </div>
            <div className="mt-3 text-center">
              <Link
                className="text-sm text-blue-600 transition duration-150 ease-in-out hover:text-blue-500 hover:underline"
                href="/auth/signup/company"
              >
                Quero me cadastrar como empresa
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
