import { Container } from "@/components/Container";
import { SingleProduct } from "@/components/Product";
import { products } from "@/constants/products";
import { Product } from "@/types/products";
import { Metadata } from "next";
import { redirect } from "next/navigation";

type Props = {
  params: { slug: string };
};

// Add metadata generation logic
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.slug;
  const product = products.find((p) => p.slug === slug);

  if (product) {
    return {
      title: product.title,
      description: product.description,
    };
  } else {
    return {
      title: "Projects | John Doe",
      description: "Explore the projects by John Doe in blockchain and Web3.",
    };
  }
}

// Render the SingleProduct page
export default function SingleProjectPage({ params }: Props) {
  const slug = params.slug;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    redirect("/projects");
    return null; // Avoid further rendering
  }

  return (
    <Container>
      <SingleProduct product={product} />
    </Container>
  );
}
