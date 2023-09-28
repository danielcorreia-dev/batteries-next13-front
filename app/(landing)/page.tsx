import Features from "@/components/landing/features";
import Hero from "@/components/landing/hero";
import Newsletter from "@/components/landing/newsletter";

export const metadata = {
  title: `Home - ${process.env.NEXT_PUBLIC_SITE_NAME}`,
  description: "Page description",
};

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Newsletter />
    </>
  );
}
