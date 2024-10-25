import { MissionSection } from "@/components/about/mission-section";
import { TeamSection } from "@/components/about/team-section";
import { TimelineSection } from "@/components/about/timeline-section";
import { StatsSection } from "@/components/about/stats-section";

export const metadata = {
  title: "About Us - DevCraft",
  description: "Learn about our mission, team, and journey in software development.",
};

export default function AboutPage() {
  return (
    <>
      <MissionSection />
      <StatsSection />
      <TeamSection />
      <TimelineSection />
    </>
  );
}