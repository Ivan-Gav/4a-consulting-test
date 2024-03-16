import s from "./PlansSection.module.css";
import img from "src/assets/images/img.png";
import Card from "../card/Card";
import Checkbox from "../ui/checkbox/Checkbox";

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
    description: "Привести тело впорядок 💪🏻",
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

export default function PlansSection() {
  return (
    <section className={s.section}>
      <img className={s.img} src={img} alt="plans" />
      <div className={s.plans}>
        <div className={s.cards}>
          {plans.map((p, i) => (
            <div
              key={p.title}
              className={i === plans.length - 1 ? s.cardl : s.card}
            >
              <Card
                title={p.title}
                price={p.price}
                oldPrice={p.oldPrice}
                description={p.description}
                discount={p.discount}
                isLarge={i===3}
              />
            </div>
          ))}
        </div>
        <div className={s.legend}>
          Следуя плану на 3 месяца, люди получают в 2 раза лучший результат, чем
          за 1 месяц
        </div>
        <div className={s.tc}>
          <Checkbox />
          <span className={s.iagree}>
            Я соглашаюсь с <a href="#">Правилами сервиса</a> и условиями{" "}
            <a href="#">Публичной оферты.</a>
          </span>
        </div>
        <button className={s.btn}>Купить</button>
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
