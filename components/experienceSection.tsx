import Image from "next/image";

// Reusable component for each job entry
function ExperienceItem({ company, role, duration, logoSrc }) {
  return (
    <div className="flex w-full items-center justify-between">
      <div className="flex items-center gap-4">
        <Image 
          src={logoSrc} 
          height={40} 
          width={40} 
          className="rounded-md" 
          alt={`${company} logo`}
        />
        <div>
          <h3 className="text-lg font-bold text-foreground">{company}</h3>
          <p className="text-muted-foreground">{role}</p>
        </div>
      </div>
      <div className="text-right text-muted-foreground">
        <p>{duration}</p>
      </div>
    </div>
  );
}


export function ExperienceSection() {
  return (
    <section id="experience" className="w-full">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Experience
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          My professional journey and key roles.
        </p>
      </div>

      <div className="mx-auto mt-16 max-w-5xl space-y-8 rounded-2xl border border-border bg-card/20 p-8">
        <ExperienceItem 
          company="NICSI" 
          role="FullStack Developer Intern" 
          duration="July 2025 - Aug 2025"
          logoSrc="/image.webp" // Make sure this path is correct
        />
        {/* You can add more ExperienceItem components here for other jobs */}
        {/* <ExperienceItem 
          company="Another Company" 
          role="Frontend Developer" 
          duration="Jan 2024 - June 2025"
          logoSrc="/another-logo.png"
        />
        */}
      </div>
    </section>
  );
}