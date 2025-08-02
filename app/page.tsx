import { ContactSection } from "@/components/contactSection";
import { HomePage } from "@/components/Home";
import { ProjectsSection } from "@/components/projectSection";
import { ExperienceSection } from "@/components/experienceSection"; // New
import { Footer } from "@/components/Footer"; // New
import EducationSection from "@/components/educationSection";

export default function Home() {
  return (
    <main className="flex dark:bg-black bg-white flex-col items-center p-4">
      {/* This wrapper controls the width and spacing for all sections */}
      <div className="flex w-full max-w-6xl flex-col gap-24">
        <HomePage />
        <ProjectsSection />
        <EducationSection/>
        <ExperienceSection />
        <ContactSection />
      </div>
      <Footer />
    </main>
  );
}