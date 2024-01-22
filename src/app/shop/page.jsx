"use client";
import ProductCard from "@/components/productCard";
import { useGetData } from "@/hooks/useGetData";
import { useUser } from "@/hooks/useUser";

export default function Home() {
  const { body, loading } = useGetData();
  const { user } = useUser();
  if (loading) {
    return <div>Loading...</div>;
  } else if (!body.success) {
    return <div>{body.error}</div>;
  }
  const data = body.products;
  return (
    <>
      <h1>All result</h1>
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
