import { Product } from "@/entities";
import { TProduct } from "@/entities/product/model/types";

export async function generateStaticParams() {
  const products: TProduct[] = await fetch('https://api.escuelajs.co/api/v1/products?offset=12&limit=10').then(res => res.json());
  return products.map(product => ({
    id: product.id.toString(),
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product: TProduct = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`).then(res => res.json());

  return {
    title: product.title,
    description: product.description,
  };
}

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product: TProduct = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`, {
    next: { revalidate: 60 }
  }).then(res => res.json());

  if (!product) {
    return <div>Something went wrong. Please, try again later</div>;
  }

  return <Product item={product} />;
}
