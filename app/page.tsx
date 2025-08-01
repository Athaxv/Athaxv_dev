import CustomCard from "@/components/custom-card";
import { DockDemo } from "@/components/Dock-demo";
import  Navbar  from "@/components/Navbar";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      {/* <Navbar/> */}
      <h1>Atharv gaur</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto max-w-screen-lg">
        <CustomCard
            title="Chat Collect"
            subtitle="Jan 2024 - Feb 2024"
            description="With the release of the OpenAI GPT Store, I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage."
            image="/images/chat-collect-preview.png"
            imageAlt="Chat Collect application preview"
            tags={["Next.js", "TypeScript", "PostgreSQL", "Prisma", "TailwindCSS", "Stripe", "Shadcn UI", "Magic UI"]}
            buttonText="Website"
            buttonHref="https://example.com"
          />
        <CustomCard
            title="Chat Collect"
            subtitle="Jan 2024 - Feb 2024"
            description="With the release of the OpenAI GPT Store, I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage."
            image="/port1.png"
            imageAlt="Chat Collect application preview"
            tags={["Next.js", "TypeScript", "PostgreSQL", "Prisma", "TailwindCSS", "Stripe", "Shadcn UI", "Magic UI"]}
            buttonText="Website"
            buttonHref="https://example.com"
          />
        <CustomCard
            title="Chat Collect"
            subtitle="Jan 2024 - Feb 2024"
            description="With the release of the OpenAI GPT Store, I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage."
            image="/images/chat-collect-preview.png"
            imageAlt="Chat Collect application preview"
            tags={["Next.js", "TypeScript", "PostgreSQL", "Prisma", "TailwindCSS", "Stripe", "Shadcn UI", "Magic UI"]}
            buttonText="Website"
            buttonHref="https://"
          />
      </div>
      {/* <DockDemo/> */}
    </div>
  );
}
