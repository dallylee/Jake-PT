import { Hero } from "@/components/Hero";
import { WhoIWorkWithSection } from "@/components/WhoIWorkWithSection";
import { ProgramsSection } from "@/components/ProgramsSection";
import { ResultsSection } from "@/components/ResultsSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { ScheduleSection } from "@/components/ScheduleSection";
import { FaqSection } from "@/components/FaqSection";
import { LeadFormSection } from "@/components/LeadFormSection";

export default function Home() {
  return (
    <>
      <Hero />
      <WhoIWorkWithSection />
      <ProgramsSection />
      <ResultsSection />
      <HowItWorksSection />
      <ScheduleSection />
      <FaqSection />
      <LeadFormSection />
    </>
  );
}
