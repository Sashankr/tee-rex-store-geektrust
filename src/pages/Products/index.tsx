import useFetchProducts from "../../hooks/useFetch";
import "./styles.scss";
import { PRODUCTS_ENDPOINT } from "../../constants";
import Filter from "../../components/Filter";
import ProductCard from "../../components/ProductCard";
import useTitle from "../../hooks/useTitle";

const Products = () => {
  useTitle({ title: "TeeRex Store | Products" });

  const { productsList, loading, error } = useFetchProducts({
    endpoint: PRODUCTS_ENDPOINT,
  });

  if (loading) {
    return "Fetching Products...";
  }

  if (error) {
    return <h3>{error}</h3>;
  }
  console.log("list", productsList);

  return (
    <section className="products content">
      <div className="container">
        <section className="products__wrapper">
          <Filter />
          <section className="products__container">
            {productsList?.map((product) => (
              <ProductCard key={product?.id} {...product} />
            ))}
          </section>
        </section>
      </div>
    </section>
  );
};

export default Products;
