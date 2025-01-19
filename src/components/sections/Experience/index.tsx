import Section from "@/components/ui/Section";
import RoleCard from "./RoleCard";

export default function Experience() {
  return (
    <Section id="experience" className="pt-[60rem]">
      <div className="mb-[29rem]">
        <h1 className="font-montserrat text-[2.8rem] md:text-[3.4rem] xl:text-[5rem]">
          Experience
        </h1>
        <p className="xl:text-[1.4rem]">Where Skills Meet Story</p>
      </div>

      <RoleCard />
    </Section>
  );
}
