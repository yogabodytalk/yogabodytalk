import {
  BranchSelectorSection,
  ContactSection,
  CoursesSection,
  EcosystemSection,
  Footer,
  Header,
  HeroSection,
  MotionEffects,
  ProofSection,
} from "@/components/landing";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <EcosystemSection />
        <BranchSelectorSection />
        <CoursesSection />
        <ProofSection />
        <ContactSection />
      </main>
      <Footer />
      <MotionEffects />
    </>
  );
}
