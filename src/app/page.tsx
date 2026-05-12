import {
  ContactSection,
  CourseIntroSection,
  CoursesSection,
  FaqSection,
  FloatingZaloLink,
  Footer,
  Header,
  HeroSection,
  JourneySection,
  LearningSection,
  MasterSection,
  MethodSection,
  PainSection,
  ProofSection,
} from "@/components/landing";

export default function Home() {
  return (
    <>
      <Header />
      <main id="top">
        <HeroSection />
        <CourseIntroSection />
        <PainSection />
        <MethodSection />
        <CoursesSection />
        <JourneySection />
        <LearningSection />
        <ProofSection />
        <MasterSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingZaloLink />
    </>
  );
}
