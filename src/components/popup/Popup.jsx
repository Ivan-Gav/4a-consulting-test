import s from "./Popup.module.css";
import Close from "src/assets/svg/close.svg";
import Button from "../ui/button/Button";
import PopupCard from "../popup-card/PopupCard";
import { useState } from "react";

const plans = [
  {
    title: "1 неделя",
    price: "699",
    oldPrice: "999",
    description: "Чтобы просто начать 👍🏻",
    discount: "30",
    isSelected: true,
  },
  {
    title: "1 месяц",
    price: "999",
    oldPrice: "1690",
    description: "Привести тело в порядок 💪🏻",
    discount: "40",
    isSelected: false,
  },
  {
    title: "3 месяца",
    price: "2990",
    oldPrice: "5990",
    description: "Изменить образ жизни 🔥",
    discount: "50",
    isSelected: false,
  },
];

export default function Popup(props) {
  const { onCloseClick, ...restOfProps } = props;
  const [isSelected, setIsSelected] = useState(0);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onCloseClick();
    }
  };

  return (
    <div className={s.backdrop} onClick={handleBackdropClick}>
      <div className={s.modal} {...restOfProps}>
        <div className={s.tag}>Горящее предложение</div>
        <button className={s.close_btn}>
          <Close onClick={onCloseClick} />
        </button>
        <h2 className={s.header}>
          Не упусти свой <span className={s.highlight}>последний шанс</span>
        </h2>
        <p className={s.subheader}>
          Мы знаем, как трудно начать.. <strong>Поэтому!</strong>
        </p>
        <p className={s.pill}>
          Дарим скидку для{" "}
          <span className={s.highlight}>&nbsp;лёгкого старта</span>
          <span>&nbsp;🏃🏼‍♂️</span>
        </p>
        <p className={s.cards_header}>
          Посмотри что мы для тебя приготовили <span>🔥</span>
        </p>
        <div className={s.cards}>
          {plans.map((p, i) => {
            return (
              <div key={p.title}>
                <PopupCard
                  title={p.title}
                  price={p.price}
                  oldPrice={p.oldPrice}
                  discount={p.discount}
                  onClick={() => setIsSelected(i)}
                  isSelected={isSelected === i}
                />
              </div>
            );
          })}
        </div>
        <Button className={s.button}>Начать тренироваться</Button>
      </div>
    </div>
  );
}