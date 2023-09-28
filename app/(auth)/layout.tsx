import Header from "@/components/landing/ui/header";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="grow">
      <Header />
      {children}
    </main>
  );
}
