import CurrencyIcon from "../CurrencyIcon";
import "./styles.scss";

interface ProductCardProps {
  id: number;
  imageURL: string;
  color: string;
  name: string;
  price: number;
  quantity: number;
  gender: string;
  type: string;
  currency: string;
}

const ProductCard = (props: ProductCardProps) => {
  const { id, imageURL, color, name, price, quantity, gender, type, currency } =
    props;

  return (
    <section className="product-card">
      <img src={imageURL} alt={name} />
      <h3 className="product-card__name">{name}</h3>
      <article>
        <h4>
          <CurrencyIcon currency={currency} /> {price}
        </h4>
      </article>
    </section>
  );
};

export default ProductCard;
