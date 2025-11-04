"use client";

import SectionTitle from "@/components/SectionTitle";
import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";
import { Typography } from "@mui/material";
import dayjs from "dayjs";
import Link from "next/link";
import { CAREER_START_DATE, WORK_SUMMARY } from "../data";

export default function WorkSummary() {
  const sectionId = "work";
  return (
    <Section id={sectionId} className="flex justify-end">
      <div className="max-w-[70%] sm:max-w-[45%]">
        <SectionTitle
          sectionId={sectionId}
          header="My Work"
          subheader={`${dayjs().diff(
            CAREER_START_DATE,
            "years"
          )} years and counting!`}
          animationDelay={1.5}
          className="mt-120"
        />
        <div className="min-h-[50vh] mt-120 sm:mt-127 flex flex-col">
          <Typography className="text-md text-left">{WORK_SUMMARY}</Typography>

          <div className="mt-14 w-fit">
            <Link href="/work">
              <Button variant="contained">See My Work</Button>
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
}
