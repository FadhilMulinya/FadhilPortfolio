"use client";
import { timeline } from "@/constants/timeline";
import React from "react";
import { Paragraph } from "./Paragraph";
import { Heading } from "./Heading";
import { TimelineDemo } from "../app/Experience/components/timelinedemo";
import {
  IconCheck,
  IconCheckbox,
  IconCircleCheckFilled,
} from "@tabler/icons-react";

export const WorkHistory = () => {
  return (
    <TimelineDemo/>

  );
};

const Step = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex space-x-1 items-start my-2">
      <IconCircleCheckFilled className="h-3 w-4 mt-1 text-neutral-300" />
      <Paragraph className="text-sm md:text-sm lg:text-sm">
        {children}
      </Paragraph>
    </div>
  );
};
