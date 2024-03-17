import { useMediaQuery } from "@react-hooks-hub/use-media-query";
import cn from "classnames";

import s from "./Card.module.css";
import Star from "src/assets/svg/star.svg";

export default function Card(props) {
  const { title, price, oldPrice, description, discount, isLarge } = props;
  const { device } = useMediaQuery({
    breakpoints: { desktop: 1100, tablet: 768, mobile: 0 },
  });

  return (
    <div className={cn(isLarge ? s.card_l : s.card, s[device])}>
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
      <div className={s.description}>{description}</div>
      </div>
      
    </div>
  );
}
