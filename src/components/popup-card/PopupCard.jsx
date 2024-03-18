import { useMediaQuery } from "@react-hooks-hub/use-media-query";
import cn from "classnames";

import s from "./PopupCard.module.css";
import Star from "src/assets/svg/star.svg";

export default function PopupCard(props) {
  const { title, price, oldPrice, discount, onClick, isSelected } =
    props;
  const { device } = useMediaQuery({
    breakpoints: { desktop: 1100, tablet: 768, mobile: 0 },
  });

  return (
    <label
      className={cn(s.card, s[device], isSelected && s.selected)}
      onClick={onClick}
    >
      <p className={s.title}>{title}</p>
      <p className={s.old_price}>{oldPrice}₽</p>
      <div className={s.radio}>
        <input className={s.input} type="checkbox" name="" id={title} />
        <div className={s.custom_input} />
      </div>
      <div className={s.price_box}>
        <div className={s.price}>
          {price}₽{" "}
          <div className={s.discount}>
            <Star className={s.discount_bg} />
            <span className={s.discount_text}>-{discount}%</span>
          </div>
        </div>
      </div>
    </label>
  );
}
