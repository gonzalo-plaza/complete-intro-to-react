import Pizza from "../Pizza";
import Cart from "../Cart";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../contexts";
import { createLazyFileRoute } from "@tanstack/react-router";
import getPizzas from "../api/getPizzas";
import postOrder from "../api/postOrder";
export const Route = createLazyFileRoute("/order")({
  component: Order,
});

const intl = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});
function Order() {
  const [pizzaTypes, setPizzaTypes] = useState([]);
  const [pizzaType, setPizzaType] = useState("pepperoni");
  const [pizzaSize, setPizzaSize] = useState("M");
  const [cart, setCart] = useContext(CartContext);
  const [loading, setLoading] = useState(true);

  let price, selectedPizza;

  if (!loading) {
    selectedPizza = pizzaTypes.find((pizza) => pizzaType === pizza.id);
    price = intl.format(
      selectedPizza.sizes ? selectedPizza.sizes[pizzaSize] : "",
    );
  }

  async function fetchPizzaTypes() {
    const pizzaRes = await getPizzas();
    setPizzaTypes(pizzaRes);
    setLoading(false);
  }

  async function checkout() {
    setLoading(true);
    await postOrder(cart);
    setCart([]);
    setLoading(false);
  }

  function addToCart() {
    setCart((prevCart) => [
      ...prevCart,
      {
        pizza: selectedPizza,
        size: pizzaSize,
        price,
      },
    ]);
  }

  useEffect(() => {
    fetchPizzaTypes();
  }, []);

  return (
    <div className="order-page">
      <div className="order">
        <h2>CreateOrder</h2>
        <form action={addToCart}>
          <div>
            <div>
              <label htmlFor="pizza-type">Pizza Type</label>
              <select
                name="pizza-type"
                value={pizzaType}
                onChange={(e) => setPizzaType(e.target.value)}
              >
                {pizzaTypes.map((pizza) => (
                  <option key={pizza.id} value={pizza.id}>
                    {pizza.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="pizza-size">Pizza Size</label>
              <div>
                <span>
                  <input
                    type="radio"
                    name="pizza-size"
                    value="S"
                    checked={pizzaSize === "S"}
                    id="pizza-size-s"
                    onChange={(e) => setPizzaSize(e.target.value)}
                  />
                  <label htmlFor="pizza-size-s">Small</label>
                </span>
                <span>
                  <input
                    type="radio"
                    name="pizza-size"
                    value="M"
                    checked={pizzaSize === "M"}
                    id="pizza-size-m"
                    onChange={(e) => setPizzaSize(e.target.value)}
                  />
                  <label htmlFor="pizza-size-m">Medium</label>
                </span>
                <span>
                  <input
                    type="radio"
                    name="pizza-size"
                    value="L"
                    checked={pizzaSize === "L"}
                    id="pizza-size-l"
                    onChange={(e) => setPizzaSize(e.target.value)}
                  />
                  <label htmlFor="pizza-size-l">Large</label>
                </span>
              </div>
            </div>
            <button type="submit">Add to Cart</button>
          </div>
          {loading ? (
            <p>Loading pizza lol</p>
          ) : (
            <div className="order-pizza">
              <Pizza
                name={selectedPizza.name}
                description={selectedPizza.description}
                image={selectedPizza.image}
              />
              <p>{price}</p>
            </div>
          )}
        </form>
      </div>
      {loading ? <h2>Loading...</h2> : <Cart checkout={checkout} cart={cart} />}
    </div>
  );
}
