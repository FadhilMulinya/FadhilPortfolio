"use client";
import { Paragraph } from "@/components/Paragraph";
import Image from "next/image";

import { motion } from "framer-motion";

export default function About() {
  const images = [
    "/images/MySelf/SAM_5362.jpg",
    "/images/MySelf/metapics-0229-2.JPG",
    "/images/MySelf/DSC_4002.jpg",
    "/images/MySelf/zet.jpg",
    
  ];
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 my-10">
        {images.map((image, index) => (
          <motion.div
            key={image}
            initial={{
              opacity: 0,
              y: -50,
              rotate: 0,
            }}
            animate={{
              opacity: 1,
              y: 0,
              rotate: index % 2 === 0 ? 3 : -3,
            }}
            transition={{ duration: 0.2, delay: index * 0.1 }}
          >
            <Image
              src={image}
              width={200}
              height={400}
              alt="about"
              className="rounded-md object-cover transform rotate-3 shadow-xl block w-full h-40 md:h-60 hover:rotate-0 transition duration-200"
            />
          </motion.div>
        ))}

      </div>

      <div className="max-w-4xl">
      <Paragraph className="mt-4">
          Hey there, I&apos;m Fadhil - a passionate blockchain developer and Web3 ecosystem architect 
          with a focus on building decentralized solutions that make a difference. Welcome to my digital workshop!
        </Paragraph>

        <Paragraph className="mt-4">
          My journey in the blockchain space has been driven by a profound belief in the 
          transformative power of decentralized technologies. As a developer, I specialize 
          in crafting robust smart contracts and building bridges between traditional systems 
          and the blockchain ecosystem. My expertise spans across EVM-compatible chains, 
          focusing on creating secure, efficient, and innovative solutions.
        </Paragraph>

        <Paragraph className="mt-4">
          Beyond development, I&apos;ve found my passion in community building and event 
          organization within the Web3 space. I&apos;ve successfully orchestrated numerous 
          tech events that bring together developers, enthusiasts, and industry leaders, 
          fostering collaboration and knowledge sharing in the blockchain community.
        </Paragraph>

        <Paragraph className="mt-4">
          What sets me apart is my comprehensive approach to blockchain projects. I combine 
          technical expertise with product management skills to ensure that every solution 
          not only works flawlessly but also delivers real value to users. My deep 
          understanding of tokenomics and digital identity systems allows me to create 
          sustainable and impactful blockchain solutions.
        </Paragraph>

        <Paragraph className="mt-4">
          Through my work, I aim to bridge the gap between complex blockchain technology 
          and real-world applications. Whether it&apos;s developing smart contracts, 
          managing decentralized projects, or building community initiatives, I&apos;m 
          committed to advancing the adoption of Web3 technologies.
        </Paragraph>

        <Paragraph className="mt-4">
          I stay at the forefront of blockchain innovation, continuously exploring new 
          protocols, security practices, and development frameworks. This commitment to 
          learning and adaptation helps me deliver cutting-edge solutions that meet the 
          evolving needs of the Web3 ecosystem.
        </Paragraph>

        <Paragraph className="mt-4">
          Thank you for visiting my portfolio. I&apos;m always excited to collaborate on 
          new blockchain projects or discuss the future of Web3. Let&apos;s connect and 
          explore how we can build the decentralized future together!
        </Paragraph>
      </div>
    </div>
  );
}
