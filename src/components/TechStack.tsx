import Image from "next/image";
import React from "react";
import { Heading } from "./Heading";
import { twMerge } from "tailwind-merge";

export const TechStack = () => {
  const blockchainStack = [
    {
      title: "Solidity",
      src: "/images/logos/solidity.svg",
      className: "h-10 w-10",
    },
    {
      title: "Chainlink",
      src: "/images/logos/chainlink.png",
      className: "h-10 w-10",
    },
    {
      title: "Rust",
      src: "/images/logos/rust.png",
      className: "h-10 w-10",
    },
    {
      title: "Ethereum",
      src: "/images/logos/ethereum.avif",
      className: "h-10 w-6",
    },
    {
      title: "Uniswap",
      src: "/images/logos/uniswap.png",
      className: "h-10 w-6",
    },
  ];

  const developmentStack = [
    {
      title: "Git & GitHub",
      src: "/images/logos/github.png",
      className: "h-10 w-10",
    },
    {
      title: "Vercel",
      src: "/images/logos/vercel.png",
      className: "h-10 w-24",
    },
    {
      title: "Canva",
      src: "/images/logos/canva.webp",
      className: "h-10 w-10",
    },
  ];

  const renderStackSection = (items: typeof blockchainStack, title: string) => (
    <div className="mb-8">
      <h3 className="text-lg font-semibold mb-4 text-gray-700">{title}</h3>
      <div className="flex flex-wrap items-center gap-8">
        {items.map((item) => (
          <div key={item.src} className="group relative">
            <Image
              src={item.src}
              width={200}
              height={200}
              alt={item.title}
              className={twMerge(
                "object-contain transition-transform duration-300 group-hover:scale-110",
                item.className
              )}
            />
            <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-sm text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {item.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="my-16">
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mb-8"
      >
        Tech Stack
      </Heading>
      
      {renderStackSection(blockchainStack, "Blockchain & Smart Contracts")}
      {renderStackSection(developmentStack, "Development & Tools")}

      <div className="mt-8 p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg">
        <p className="text-sm text-gray-600">
          Experienced in working with various EVM-compatible blockchains and maintaining
          high security standards in smart contract development.
        </p>
      </div>
    </div>
  );
};