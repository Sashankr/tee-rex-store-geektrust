import { useEffect, useState } from "react";

interface useFetchProps {
  endpoint: string;
}

const useFetch = ({ endpoint }: useFetchProps) => {
  const [productsList, setProductsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function fetchProductsList() {
    try {
      const response = await fetch(endpoint);
      if (response.status === 200) {
        const productsData = await response.json();
        setProductsList(productsData);
      } else {
        setError("Error Fetching Products");
      }
    } catch (err) {
      console.log(err);
      setError(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProductsList();
  }, []);

  return { productsList, loading, error };
};

export default useFetch;
