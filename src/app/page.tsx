import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { TechStack } from "@/components/TechStack";
import Image from "next/image";

export default function Home() {
  return (
    <Container>
      <div className="flex flex-col-reverse md:flex-row items-start justify-between gap-8">
        <div className="flex-1">
          <span className="text-4xl">👋</span>
          <Heading className="font-black">Hello there! I&apos;m Fadhil</Heading>
          <Paragraph className="max-w-xl mt-4">
            I&apos;m a blockchain developer and Web3 ecosystem architect who brings{" "}
            <Highlight>decentralized solutions</Highlight> to life through both code
            and community
          </Paragraph>
          <Paragraph className="max-w-xl mt-4">
            I combine <Highlight>technical expertise</Highlight> with{" "}
            <Highlight>strategic leadership</Highlight>, managing successful Web3
            events and vibrant community initiatives while delivering impactful
            blockchain projects
          </Paragraph>
          <Paragraph className="max-w-xl mt-4">
            My multifaceted approach spans development, product management, and{" "}
            <Highlight>community building</Highlight>, with specialized focus on{" "}
            <Highlight>tokenomics</Highlight> and{" "}
            <Highlight>digital identity systems</Highlight>
          </Paragraph>
        </div>
        
        <div className="w-full md:w-[400px] flex-shrink-0">
          <Image
            src="/images/logos/FadhilLogo.png"
            alt="Fadhil Logo"
            width={400}
            height={400}
            priority
            className="rounded-lg shadow-xl"
          />
        </div>
      </div>

      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        What I&apos;ve Been Building
      </Heading>
      <Products />
      <TechStack />
    </Container>
  );
}

