import { CartItemContainer, ItemDetails } from "./cartItem.styles";

const CartItem = ({ cartItem }) => {
  const { name, quantity, img, price } = cartItem;

  return (
    <CartItemContainer>
      <img src={img} alt={`${name}`} />
      <ItemDetails>
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x ${price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
