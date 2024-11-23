import React, { ReactNode, ElementType } from "react";
import localFont from "next/font/local";
import { twMerge } from "tailwind-merge";

// Load the custom font
const CalSans = localFont({
  src: [{ path: "../../fonts/CalSans-SemiBold.woff2" }],
  display: "swap",
});

type HeadingProps<T extends ElementType> = {
  className?: string;
  children: ReactNode;
  as?: T;
};

export const Heading = <T extends ElementType = 'h1'>({ 
  className, 
  children, 
  as 
}: HeadingProps<T>) => {
  const Tag = as || 'h1';

  return (
    <Tag
      className={twMerge(
        CalSans.className,
        "text-base md:text-xl lg:text-4xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary",
        className
      )}
    >
      {children}
    </Tag>
  );
};

