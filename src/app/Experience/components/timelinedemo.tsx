import Image from "next/image";
import React from "react";
import { Timeline } from "../ui/timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "November 2024 - Present",
      content: (
        <div>
          <h1>CoFounder</h1>
          <br />
          <br />
          <p className="text-neutral-800 text-xs md:text-sm font-normal mb-8">
            Spearheading <strong>Tefro</strong>, a cutting-edge Web3 studio
            dedicated to building projects and infrastructure while driving
            research and innovation in tokenomics.
          </p>
          <p className="text-neutral-800 text-xs md:text-sm font-normal mb-8">
            Forging strategic partnerships across Nigeria and Kenya to expand
            the studios reach and impact in the blockchain space.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/images/experience/tefro1.jpg"
              alt="Tefro Project Image 1"
              width={800}
              height={800}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/images/experience/tefro2.jpg"
              alt="Tefro Project Image 2"
              width={800}
              height={800}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "August 2024 - Present",
      content: (
        <div>
          <h1>CoFounder && Backend Developer</h1>
          <br />
          <br />
          <p className="text-neutral-800 text-xs md:text-sm font-normal mb-8">
            Leading the development of <strong>Crefy</strong>, a platform
            enabling seamless issuance and verification of verifiable
            credentials using blockchain technology.
          </p>
          <p className="text-neutral-800 text-xs md:text-sm font-normal mb-8">
            Pioneered the integration of verifiable credentials into
            decentralized ecosystems, providing an intuitive solution for
            credential management.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/images/experience/crefy1.jpg"
              alt="Crefy Project Image 1"
              width={800}
              height={800}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/images/experience/crefy3.jpg"
              alt="Crefy Project Image 2"
              width={800}
              height={800}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "March 2024 - Present",
      content: (
        <div>
          <h1>CoFounder && Backend Developer</h1>
          <br />
          <br />
          <p className="text-neutral-800 text-xs md:text-sm font-normal mb-8">
            Built <strong>EduPayDeFi</strong>, a platform enabling schools to
            accept crypto payments for fees while managing funds seamlessly
            through decentralized tools.
          </p>
          <p className="text-neutral-800 text-xs md:text-sm font-normal mb-8">
            Focused on bridging traditional finance with decentralized systems,
            leveraging USDC and account abstraction for enhanced user
            experience.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/images/experience/edupay1.jpg"
              alt="EduPayDeFi Project Image 1"
              width={800}
              height={800}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/images/experience/edupay2.jpg"
              alt="EduPayDeFi Project Image 2"
              width={800}
              height={800}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "March 2024 - Present",
      content: (
        <div>
          <h1>Business Developer</h1>
          <br />
          <br />
          <p className="text-neutral-800 text-xs md:text-sm font-normal mb-8">
            Closed significant partnerships with companies and businesses,
            driving growth and fostering innovation at{" "}
            <strong>MetaMeta Club</strong>.
          </p>
          <p className="text-neutral-800 text-xs md:text-sm font-normal mb-8">
            Transitioned into a Blockchain Instructor role, educating
            enthusiasts and professionals about blockchain development and its
            practical applications.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/images/experience/metameta1.JPG"
              alt="MetaMeta Club Image 1"
              width={800}
              height={800}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/images/experience/metameta2.JPG"
              alt="MetaMeta Club Image 2"
              width={800}
              height={800}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "March 2024 - Present",
      content: (
        <div>
          <h1>Partnerships && PR</h1>
          <br />
          <br />
          <p className="text-neutral-800 text-xs md:text-sm font-normal mb-8">
            Leading strategic PR and partnership initiatives at{" "}
            <strong>NexusPay</strong>, forging connections between consumers and
            businesses in the blockchain space.
          </p>
          <p className="text-neutral-800 text-xs md:text-sm font-normal mb-8">
            Enhanced NexusPays visibility by driving engaging narratives and
            building meaningful collaborations in the crypto-fintech space.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/images/experience/nexus1.jpg"
              alt="NexusPay Image 1"
              width={800}
              height={800}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/images/experience/nexus2.jpg"
              alt="NexusPay Image 2"
              width={800}
              height={800}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "February 2024 - June 2024",
      content: (
        <div>
          <h1>Operations Lead</h1>
          <br />
          <br />
          <p className="text-neutral-800 text-xs md:text-sm font-normal mb-8">
            Worked at <strong>ICFootprint</strong> Directed ground operations
            for the Internet Computer Protocol (ICP) Community Conference in
            Kenya, exceeding registration expectations.
          </p>
          <p className="text-neutral-800 text-xs md:text-sm font-normal mb-8">
            Championed local outreach efforts, creating a thriving ICP community
            and driving participation in global ICP initiatives.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/images/experience/icpcc1.jpg"
              alt="ICP Conference Image 1"
              width={800}
              height={800}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px
_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/images/experience/icpcc2.jpg"
              alt="ICP Conference Image 2"
              width={800}
              height={800}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "October 2023 - February 2024",
      content: (
        <div>
          <h1>Technical Ambassador</h1>
          <br />
          <br />
          <p className="text-neutral-800 text-xs md:text-sm font-normal mb-8">
            As an ICP Community Ambassador, simplified ICP for developers and
            organized training sessions, accelerating local adoption of ICP.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/images/experience/icp1.jpg"
              alt="ICP Community Image 1"
              width={800}
              height={800}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/images/experience/icp2.jpg"
              alt="ICP Community Image 2"
              width={800}
              height={800}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "August 2023 – Present",
      content: (
        <div>
          <h1 className="color: #2c3e50; font-size: 36px; padding: 20px 0; margin-bottom: 25px; border-bottom: 3px solid #3498db; font-weight: 700; letter-spacing: 0.5px;">
            Independent Blockchain Instructor - Freelance
          </h1>
          <br />
          <br />
          <p className="text-neutral-800 text-xs md:text-sm font-normal mb-8">
            As a freelance blockchain instructor, I deliver comprehensive
            training sessions with a project-based approach, focusing on
            Ethereum Virtual Machine (EVM)-compatible blockchains. My goal is to
            empower individuals with the skills needed to develop decentralized
            applications (dApps) and understand blockchain fundamentals.
          </p>
          <p className="text-neutral-800 text-xs md:text-sm font-normal mb-8">
            Throughout my sessionsa, I work with diverse communities and
            organizations, tailoring content to meet the needs of both beginners
            and more advanced learners. I believe in hands-on learning, and my
            courses are designed to equip students with practical knowledge they
            can apply immediately in real-world projects.
          </p>
          <p className="text-neutral-800  text-xs md:text-sm font-normal mb-8">
            Additionally, I have built a small community of blockchain
            enthusiasts, fostering a culture of continuous learning and
            collaborative project-building. This community serves as a support
            system where students and developers alike can share insights and
            progress in their blockchain journeys.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/images/experience/teach1.jpg"
              alt="Events Organizer"
              width={800}
              height={800}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/images/experience/teach2.jpg"
              alt="Events Organizer"
              width={800}
              height={800}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "December 2023 – Present",
      content: (
        <div>
          <h1>Independent Events Organizer & Moderator - Freelance</h1>
          <br />
          <br />
          <p className="text-neutral-800 text-xs md:text-sm font-normal mb-8">
            As a freelance events organizer and moderator, I have had the
            privilege of organizing and moderating high-profile blockchain
            events for leading blockchain protocols, including ICP, Celo,
            Avalanche, Arbitrum, Solana, and others. My work has involved
            planning and executing engaging conferences, workshops, and
            community meetups that bring together industry professionals,
            thought leaders, and enthusiasts.
          </p>
          <p className="text-neutral-800 text-xs md:text-sm font-normal mb-8">
            I played a key role in prestigious conferences such as CodeAfrica
            Conference and EthSafari, where I delivered impactful workshops and
            sessions. These events allowed me to share my knowledge with a
            larger audience and help bridge the gap between developers,
            investors, and other stakeholders in the blockchain space.
          </p>
          <p className="text-neutral-800 text-xs md:text-sm font-normal mb-8">
            Additionally, I have supported several brands in executing
            well-organized events, ensuring smooth coordination and an excellent
            experience for all attendees. My role includes everything from
            content curation and speaker coordination to ensuring seamless event
            logistics.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/images/experience/event1.JPG"
              alt="Events Organizer"
              width={800}
              height={800}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/images/experience/event2.jpg"
              alt="Events Organizer"
              width={800}
              height={800}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
