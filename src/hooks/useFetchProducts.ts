import { useEffect, useState } from "react";
import { PRODUCTS_ENDPOINT } from "../constants";

const useFetchProducts = () => {
  const [productsList, setProductsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function fetchProductsList() {
    try {
      const response = await fetch(PRODUCTS_ENDPOINT);
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

export default useFetchProducts;
