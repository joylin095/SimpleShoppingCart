import { useEffect, useState } from "react";

export function useGetCategory(category) {
  const [body, setBody] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `http://localhost:3000/api/products/getByCategory?category=${category}`
        );
        const data = await response.json();
        setBody(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        return Response.json({ success: false, error });
      }
    }
    fetchData();
  }, [category]);
  return { body, loading };
}
