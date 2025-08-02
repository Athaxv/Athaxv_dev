"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MagicCard } from "@/components/magicui/magic-card";
import { useTheme } from "next-themes";
import { Textarea } from "./ui/textarea";

export function ContactSection() {
  const { theme } = useTheme();
  return (
    <section className="flex flex-col items-center justify-center mt-20">
      <div className="mb-20">
        <h1 className="font-bold text-4xl flex justify-center items-center">Let's build something great</h1>
      <p className="mt-2 text-gray-500">Whether you have a question, a project idea, or just want to say hello, my inbox is always open</p>
      </div>
      <Card className="p-0 max-w-xl w-full shadow-none border-none">
      <MagicCard
        gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
        className="p-0"
      >
        <CardHeader className="border-b border-border p-4 [.border-b]:pb-4">
          <CardTitle>Let's Connect</CardTitle>
          <CardDescription>
            Ready to start your next project?
          </CardDescription>
        </CardHeader>
        <CardContent className="p-4">
          <form>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="name@example.com" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="message">Message</Label>
                <Textarea rows={40} className="h-28" placeholder="Enter your message"/>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="p-4 border-t border-border [.border-t]:pt-4">
          <Button className="w-full">Sign In</Button>
        </CardFooter>
      </MagicCard>
    </Card>
    </section>
  );
}
