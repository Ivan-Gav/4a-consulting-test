import s from "./Card.module.css";
import Star from "src/assets/svg/star.svg";

export default function Card(props) {
  const { title, price, oldPrice, description, discount, isLarge } = props;

  return (
    <div className={isLarge ? s.card_l : s.card}>
      <div className={s.discount}>
        <Star className={s.discount_bg} />
        <span className={s.discount_text}>-{discount}%</span>
      </div>
      <div className={s.container}>
        <p className={s.title}>{title}</p>
        <div className={s.price_box}>
          <p className={s.price}>{price}₽</p>
          {!!oldPrice && <p className={s.old_price}>{oldPrice}₽</p>}
        </div>
      </div>
      <div className={s.description}>{description}</div>
    </div>
  );
}
