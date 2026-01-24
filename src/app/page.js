import Image from "next/image";
import Hero from "@/app/components/Hero";
import SkillSection from "./components/SkillSection";
import ProjectSection from "./components/ProjectSection";
import AboutSection from "./components/AboutSection";
import ContractSection from "./components/ContractSection";

export default function Home() {
  return (
    <>
      <Hero />
      <SkillSection />
      <ProjectSection />
      <ContractSection />
      <AboutSection />
    </>
  );
}
