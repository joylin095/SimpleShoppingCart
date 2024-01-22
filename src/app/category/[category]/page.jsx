"use client";
import ProductCard from "@/components/productCard";
import { useParams } from "next/navigation";
import { useGetCategory } from "@/hooks/useGetCategory";
import { useUser } from "@/hooks/useUser";

export default function Home() {
  const params = useParams();
  const category = params.category;
  const { body, loading } = useGetCategory(category);
  const { user } = useUser();
  if (loading) {
    return <div>Loading...</div>;
  } else if (!body.success) {
    return <div>{body.error}</div>;
  }
  const data = body.products;
  return (
    <>
      <h1>Result for {category}</h1>
      <div className="grid grid-cols-4">
        {data.map((product) => (
          <ProductCard
            product={product}
            user={user}
            key={product.id}
          ></ProductCard>
        ))}
      </div>
    </>
  );
}
