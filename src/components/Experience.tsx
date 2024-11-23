import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { WorkHistory } from "@/components/WorkHistory";
import Image from "next/image";

export default function Home() {
  return (
    <Container>
      {/* <span className="text-4xl">💼</span> */}
      <Heading className="font-black">Work History</Heading>
      <Paragraph className="max-w-xl mt-4">
        I&apos;m a blockchain developer and community advocate {" "}
        <Highlight>I Love  building products</Highlight> and growing communities while organizing 
        events that bring impact to humanity.
      </Paragraph>
      <WorkHistory />
    </Container>
  );
}
