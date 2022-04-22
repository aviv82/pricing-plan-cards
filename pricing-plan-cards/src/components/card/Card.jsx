import "./Card.css";
import { Item } from "../item/Item";

export const Card = ({ title, body, footer, index, sub }) => {
  const cardOrder = `card-${index + 1}`;
  const btnOrder = `submit${index + 1}`;
  return (
    <div className={cardOrder}>
      <h3>{title}</h3>
      <p>{body}</p>
      <h2>{footer}</h2>
      <Item sub={sub} />
      <button className={btnOrder}>Subscribe</button>
    </div>
  );
};
