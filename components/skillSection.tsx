"use client"
import { AnimatedGradientText } from './magicui/animated-gradient-text';
import { AnimatedShinyText } from './magicui/animated-shiny-text';

const skillsData = [
  { name: 'JavaScript', level: 'Expert', years: '5+ yrs' },
  { name: 'React', level: 'Advanced', years: '4+ yrs' },
  { name: 'Next.js', level: 'Advanced', years: '3+ yrs' },
  { name: 'Node.js', level: 'Intermediate', years: '3+ yrs' },
  { name: 'GraphQL', level: 'Intermediate', years: '2+ yrs' },
];

interface skills {
    name: string,
    level: string,
    years: string
}

function SkillItem({ name, level, years }: skills) {
  return (
    <div className="relative pl-10">
      <div className="absolute left-2 top-2 h-4 w-4 rounded-full bg-blue-500" />
      <h3 className="text-xl font-semibold text-neutral-900 dark:text-white">{name}</h3>
      <p className="text-sm text-neutral-600 dark:text-neutral-400">
        {level} - {years}
      </p>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="w-full mb-40">
      {/* Section Header */}
      <div className="mx-auto max-w-4xl text-center">
        <div className="mb-2">
          <AnimatedGradientText
            className={
              "text-sm font-medium mb-6 rounded-full p-1 px-3 " +
              "dark:border-neutral-700"
            }
          >
            🛠️ Technology & Skills
          </AnimatedGradientText>
        </div>
        <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
          Skills
        </h2>
        <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">
          Technologies I work with and have hands-on experience.
        </p>
      </div>

      {/* Timeline Container */}
      <div className="relative mx-auto mt-12 max-w-3xl">
        {/* Vertical line */}
        <div className="absolute left-3 top-2 h-full w-0.5 bg-neutral-200 dark:bg-neutral-800" />
        <div className="space-y-10">
          {skillsData.map((skill, index) => (
            <SkillItem
              key={index}
              name={skill.name}
              level={skill.level}
              years={skill.years}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
