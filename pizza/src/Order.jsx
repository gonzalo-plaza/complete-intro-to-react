import Pizza from "./Pizza";
import { useState } from "react";
const Order = () => {
  const [pizzaType, setPizzaType] = useState("pepperoni");
  const [pizzaSize, setPizzaSize] = useState("M");

return (
  <div className="order">
    <h2>Order</h2>
    <form>
      <div>
        <div>
          <label htmlFor="pizza-type">Pizza Type</label>
          <select name="pizza-type" value={pizzaType} onChange={(e) => setPizzaType(e.target.value)}>
            <option value="pepperoni">Pepperoni</option>
            <option value="hawaiian">Hawaiian</option>
            <option value="big_meat">Big Meat</option>
          </select>
        </div>
        <div>
          <label htmlFor="pizza-size">Pizza Size</label>
          <div>
          <span>
            <input 
              type="radio" 
              name="pizza-size" 
              value="S" checked={pizzaSize === "S"} 
              id="pizza-size-s" 
              onChange={(e) => setPizzaSize(e.target.value)} />
            <label htmlFor="pizza-size-s">Small</label>
          </span>
          <span>
            <input 
              type="radio" 
              name="pizza-size" 
              value="M" 
              checked={pizzaSize === "M"} 
              id="pizza-size-m" 
              onChange={(e) => setPizzaSize(e.target.value)} />
            <label htmlFor="pizza-size-m">Medium</label>
          </span>
          <span>
            <input 
              type="radio" 
              name="pizza-size" 
              value="L" 
              checked={pizzaSize === "L"} 
              id="pizza-size-l" 
              onChange={(e) => setPizzaSize(e.target.value)} />
            <label htmlFor="pizza-size-l">Large</label>
          </span>
          </div>
        </div>
        <button type="submit">Add to Cart</button>
        <div className="order-pizza">
          <Pizza name="pepperoni" description="A pizza with pepperoni" image="/public/pizzas/pepperoni.webp" />
          <p>$13.37</p>
        </div>
      </div>
    </form>
  </div>
)
}

export default Order;