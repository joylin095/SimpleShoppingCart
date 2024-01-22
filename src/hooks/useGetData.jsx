import { useEffect, useState } from "react";

export function useGetData() {
  const [body, setBody] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "http://localhost:3000/api/products/products"
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
  }, []);
  return { body, loading };
}
