import { useEffect, useState } from "react";
import Axios from "axios";
import { setupCache } from "axios-cache-interceptor";

const instance = Axios.create();
const axios = setupCache(instance);

const URL = "https://t-pay.iqfit.app/subscribe/list-test";

export default function useAPI() {
  const [plans, setPlans] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const sortPlans = (data) => {
      const sortedPlansObject = data.reduce((sorted, plan) => {
        if (!("name" in plan)) {
          return;
        }
        if (!(plan.name in sorted)) {
          sorted[plan.name] = {};
        }
        if (plan.isPopular) {
          sorted[plan.name].popularPrice = plan.price;
        } else if (plan.isDiscount) {
          sorted[plan.name].discountPrice = plan.price;
        } else {
          sorted[plan.name].name = plan.name;
          sorted[plan.name].regularPrice = plan.price;
          sorted[plan.name].id = plan.id;

          let description = "Дефолтный текст для карточки";
          if (plan.name === "1 неделя") {
            description = "Чтобы просто начать 👍🏻";
          } else if (plan.name === "1 месяц") {
            description = "Привести тело в порядок 💪🏻";
          } else if (plan.name === "3 месяца") {
            description = "Изменить образ жизни 🔥";
          } else if (plan.name === "навсегда") {
            description =
              "Всегда быть в форме и поддерживать своё здоровье ⭐️";
          }
          sorted[plan.name].description = description;
        }
        return sorted;
      }, {});

      return Object.values(sortedPlansObject);
    };

    const request = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get(URL);
        console.log(res);
        const plans = sortPlans(res.data);
        setPlans(plans);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("unknown error on fetching data from server");
        }
      } finally {
        setIsLoading(false);
      }
    };

    request();
  }, []);

  return { plans, isLoading, error };
}
