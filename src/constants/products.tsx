import sidefolioAceternity from "public/images/sidefolio-aceternity-2.png";
import sidefolioAceternity2 from "public/images/sidefolio-aceternity-2.png";
import sidefolioAlgochurn from "public/images/sidefolio-algochurn.png";
import sidefolioAlgochurn2 from "public/images/sidefolio-algochurn.png";
import sidefolioMoonbeam from "public/images/sidefolio-moonbeam.png";
import sidefolioMoonbeam2 from "public/images/sidefolio-moonbeam-2.png";
import sidefolioTailwindMasterKit from "public/images/sidefolio-tailwindmasterkit.png";
import sidefolioTailwindMasterKit2 from "public/images/sidefolio-tailwindmasterkit-2.png";

export const products = [
  {
    href: "https://edupaydefi.vercel.app/",
    title: "EduPayDeFi",
    description:
      "A platform that enables schools to accept school fees using crypto and easily manage funds like paying staff, utilities, and auditing with ease.",
    thumbnail: "/images/edupay.png", // Ensure to update with the correct image path
    images: ["/images/edupay.png", "/images/edstudent.png"],
    stack: ["Thirdweb", "Solidity", "Web3.js", "Next.js", "EVM", "USDC", "ERC4337"],
    slug: "edupaydefi",
    content: (
      <div>
        <p>
          EduPayDeFi provides a platform that allows schools to accept school fees in cryptocurrency. It also enables schools to easily manage their funds, such as paying staff and utilities, with simple and secure blockchain transactions. The platform integrates auditing features, providing schools with transparency and efficient fund management.
        </p>
        <p>
          The tech stack includes Thirdweb for contract deployment, Solidity for smart contract development, Web3.js for blockchain interaction, and Next.js for the front-end. The platform supports transactions with USDC and leverages ERC4337 for account abstraction, enhancing user experience.
        </p>
      </div>
    ),
  },
  {
    href: "https://dcnweb.vercel.app/",
    title: "Crefy",
    description:
      "A platform to issue digital credentials and certificates to students, allowing them to mint portfolios as NFTs. Built with ERC4337 to eliminate gas fees and ERC6551 for aggregating credentials into one portfolio.",
    thumbnail: "/images/crefy.png", // Ensure to update with the correct image path
    images: ["/images/crefy.png", "/images/studentDash.png"],
    stack: ["Next.js", "Pinata", "IPFS", "Reown", "DaisyUI", "Framer", "Solidity", "ERC4337", "ERC6551"],
    slug: "crefy",
    content: (
      <div>
        <p>
          Crefy is a platform that helps schools issue digital certificates and credentials to students. By leveraging ERC4337, Crefy removes the need for users to pay gas fees, allowing for a seamless experience when interacting with blockchain. Additionally, Crefy uses ERC6551 to aggregate all of a students credentials into a single portfolio. Students can mint and manage their credentials as NFTs, creating a digital portfolio they control and can share.
        </p>
        <p>
          The tech stack includes Next.js for the frontend, Pinata and IPFS for decentralized storage, Reown for digital wallet management, DaisyUI for UI components, Framer for animations, Solidity for smart contract development, and ERC4337 and ERC6551 to ensure gasless transactions and effective credential aggregation.
        </p>
      </div>
    ),
  },
  {
    href: "https://github.com/FadhilMulinya/ChainlinkTokenMinter",
    title: "TokenICO",
    description:
      "A decentralized token vending mechanism that facilitates the automated minting of ERC-20 tokens in exchange for ETH, leveraging Chainlink’s decentralized price feed oracle for real-time ETH/USD exchange rate computation.",
    thumbnail: "/images/tokenico2.png", // Update with the correct image path
    images: ["/images/tokenico2.png", "/images/tokenico2.png"],
    stack: ["Solidity", "Chainlink", "Ethereum", "ERC-20"],
    slug: "tokenico",
    content: (
      <div>
        <p>
          The TokenICO contract is a decentralized token vending mechanism that facilitates the automated minting of ERC-20 tokens in exchange for ETH, utilizing Chainlink’s decentralized price feed oracle for real-time ETH/USD exchange rate computation.
        </p>
        <p>
          Upon receiving ETH via the receive() function, the contract dynamically determines the equivalent token amount based on a predefined USD price per token, adjusted for Chainlinks 8-decimal precision. The token issuance is delegated to an external TokenInterface-compliant contract, invoking its mint function to transfer newly minted tokens to the purchaser.
        </p>
        <p>
          Additionally, the contract enforces ownership-controlled liquidity management, enabling the owner to withdraw accumulated ETH through a secure access modifier. This architecture ensures trustless, real-time token pricing, scalability, and secure fund custody.
        </p>
      </div>
    ),
  },
  {
    href: "https://github.com/FadhilMulinya",
    title: "My GitHub",
    description:
      "I am constantly building projects in the DeFi and VC&apos;s space, with ongoing updates. You can check my GitHub for the latest projects.",
    thumbnail: "/images/githubProf.png", // Ensure to update with the correct image path
    images: ["/images/githubProf.png", "/images/github2.png"],
    stack: ["DeFi", "Verifiable Credential", "Smart Contracts", "ERC-20", "ERC4337", "NFTs"],
    slug: "github",
    content: (
      <div>
        <p>
          I am constantly building new projects in the DeFi and Verifiable Credential space. 
          You can keep up with my latest projects and contributions by checking my GitHub page. 
          I update it regularly with new repositories and projects as I continue to push forward in the blockchain space.
        </p>
        <p>
          Feel free to check out my work and reach out if you have any questions or ideas for collaboration!
        </p>
      </div>
    ),
  },
];
