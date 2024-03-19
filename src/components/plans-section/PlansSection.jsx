import { useCallback, useState } from "react";
import cn from "classnames";

import s from "./PlansSection.module.css";
import img from "src/assets/images/img.png";
import Card from "../card/Card";
import Checkbox from "../ui/checkbox/Checkbox";
import Button from "../ui/button/Button";
import getDiscount from "src/utils/getDiscount";
import truncate from "src/utils/truncate";
import useDevice from "src/hooks/useDevice";

export default function PlansSection({ isDiscounted, onAnimationEnd, plans }) {
  const { device } = useDevice();

  const [isSelected, setIsSelected] = useState(0);
  const [isTransition, setIsTransition] = useState(true);

  const handleAnimation = useCallback(() => {
    onAnimationEnd();
    setIsTransition(false);
  }, [onAnimationEnd]);

  return (
    <section className={cn(s.section, s[device])}>
      <img className={s.img} src={img} alt="plans" />
      <div className={s.plans}>
        <div className={cn(s.cards, s[device])}>
          {plans.map((p, i) => {
            const desc =
              device === "desktop" ? p.description : truncate(p.description);

            return (
              <div
                key={p.id}
                className={i === plans.length - 1 ? s.cardl : s.card}
              >
                <Card
                  isDiscounted={isDiscounted}
                  title={p.name}
                  price={
                    isDiscounted || isTransition
                      ? p.popularPrice
                      : p.regularPrice
                  }
                  oldPrice={(isDiscounted || isTransition) && p.regularPrice}
                  description={desc}
                  discount={
                    (isDiscounted || isTransition) &&
                    getDiscount(p.popularPrice, p.regularPrice)
                  }
                  isLarge={i === 3}
                  onClick={() => setIsSelected(i)}
                  isSelected={isSelected === i}
                  onAnimationEnd={handleAnimation}
                  isTransition={isTransition}
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
          <Checkbox defaultChecked={true} id="tandc" />
          <span className={s.iagree}>
            Я соглашаюсь с <a href="#">Правилами сервиса</a> и условиями{" "}
            <a href="#">Публичной оферты.</a>
          </span>
        </div>
        <Button className={s.btn_buy}>Купить</Button>
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
