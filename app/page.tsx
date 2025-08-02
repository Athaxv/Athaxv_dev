import { ContactSection } from "@/components/contactSection";
import { HomePage } from "@/components/Home";
import { ProjectsSection } from "@/components/projectSection";
import { ExperienceSection } from "@/components/experienceSection"; // New
import { Footer } from "@/components/Footer"; // New

export default function Home() {
  return (
    <main className="flex flex-col items-center p-4">
      {/* This wrapper controls the width and spacing for all sections */}
      <div className="flex w-full max-w-6xl flex-col gap-24 py-24 sm:gap-32 sm:py-32">
        <HomePage />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </div>
      <Footer />
    </main>
  );
}