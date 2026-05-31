import {
  ContactSection,
  CourseIntroSection,
  CoursesSection,
  FaqSection,
  FeedbackSection,
  FloatingZaloLink,
  Footer,
  Header,
  HeroSection,
  JourneySection,
  MasterSection,
  MethodSection,
  MotionEffects,
  PainSection,
  ProofSection,
  RetreatSection,
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
        <RetreatSection />
        <ProofSection />
        <MasterSection />
        <FeedbackSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingZaloLink />
      <MotionEffects />
    </>
  );
}
