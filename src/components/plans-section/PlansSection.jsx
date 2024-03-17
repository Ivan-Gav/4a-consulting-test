import { useState } from "react";
import { useMediaQuery } from "@react-hooks-hub/use-media-query";
import cn from "classnames";

import s from "./PlansSection.module.css";
import img from "src/assets/images/img.png";
import Card from "../card/Card";
import Checkbox from "../ui/checkbox/Checkbox";
import Button from "../ui/button/Button";

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
  {
    title: "навсегда",
    price: "5990",
    oldPrice: "18 990",
    description: "Всегда быть в форме и поддерживать своё здоровье ⭐️",
    discount: "70",
    isSelected: false,
  },
];

const truncate = (str, wordsQty) => {
  const arr = str.split(" ");
  if (arr.length <= wordsQty) {
    return str;
  }
  const emoji = /\p{Emoji}/u.test(arr[arr.length - 1])
    ? arr[arr.length - 1]
    : "";
  return arr.splice(0, wordsQty).join(" ") + emoji;
};

export default function PlansSection() {
  const { device } = useMediaQuery({
    breakpoints: { desktop: 1100, tablet: 768, mobile: 0 },
  });

  const [isSelected, setIsSelected] = useState(0);

  return (
    <section className={cn(s.section, s[device])}>
      <img className={s.img} src={img} alt="plans" />
      <div className={s.plans}>
        <div className={cn(s.cards, s[device])}>
          {plans.map((p, i) => {
            const desc =
              device === "desktop" ? p.description : truncate(p.description, 4);

            return (
              <div
                key={p.title}
                className={i === plans.length - 1 ? s.cardl : s.card}
              >
                <Card
                  title={p.title}
                  price={p.price}
                  oldPrice={p.oldPrice}
                  description={desc}
                  discount={p.discount}
                  isLarge={i === 3}
                  onClick={() => setIsSelected(i)}
                  isSelected={isSelected === i}
                />
              </div>
            );
          })}
        </div>
        <div className={s.legend}>
          Следуя плану на 3 месяца, люди получают в 2 раза лучший результат, чем
          за 1 месяц
        </div>
        <div className={s.tc}>
          <Checkbox defaultChecked={true} id="tandc"/>
          <span className={s.iagree}>
            Я соглашаюсь с <a href="#">Правилами сервиса</a> и условиями{" "}
            <a href="#">Публичной оферты.</a>
          </span>
        </div>
        <Button>Купить</Button>
        <div className={s.consent}>
          Нажимая «Купить», Пользователь соглашается на автоматическое списание
          денежных средств по истечению купленного периода. Дальнейшие списания
          по тарифам участвующим в акции осуществляются по полной стоимости
          согласно оферте.
        </div>
      </div>
    </section>
  );
}
