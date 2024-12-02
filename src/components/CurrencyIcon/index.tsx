import "./styles.scss";

interface CurrencyIconProps {
  currency: string;
}

const CurrencyIcon = ({ currency }: CurrencyIconProps) => {
  switch (currency) {
    case "INR":
      return <i className="fa-solid fa-indian-rupee-sign currency-icon"></i>;
  }

  return <span></span>;
};

export default CurrencyIcon;
