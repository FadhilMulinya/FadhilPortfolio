import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { WorkHistory } from "@/components/WorkHistory";

export default function page() {
  return (
    <Container>
      {/* <span className="text-4xl">💼</span> */}
      <Heading className="font-black">Work History</Heading>
      <Paragraph className="max-w-xl mt-4">
        I&apos;m a blockchain developer and community advocate{" "}
        <Highlight>I Love building products</Highlight> and growing communities
        while organizing events that bring impact to humanity.
      </Paragraph>
      <WorkHistory />
    </Container>
  );
}
