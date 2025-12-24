import { useState, useEffect, useDebugValue } from "react";
import getPizzaOfTheDay from "./api/getPizzaOfTheDay";
export const usePizzaOfTheDay = () => {
  const [pizzaOfTheDay, setPizzaOfTheDay] = useState(null);
  useDebugValue(pizzaOfTheDay ? `${pizzaOfTheDay.id}` : "loading...");

  useEffect(() => {
    async function fetchPizzaOfTheDay() {
      const response = await getPizzaOfTheDay();
      setPizzaOfTheDay(response);
    }

    fetchPizzaOfTheDay();
  }, []);

  return pizzaOfTheDay;
};
