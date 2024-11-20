import useFetchProducts from "../../hooks/useFetchProducts";
import "./styles.scss";

const Products = () => {
  const { productsList, loading, error } = useFetchProducts();

  if (loading) {
    return "Fetching Products...";
  }

  if (error) {
    return <h3>{error}</h3>;
  }
  console.log("list", productsList);

  return (
    <section className="products content">
      <div className="container">Products</div>
    </section>
  );
};

export default Products;
