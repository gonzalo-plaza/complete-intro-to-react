import { createRoot } from "react-dom/client";
import Order from "./Order";

const App = () => {
  return (
    <div className="pizza">
      <h1>Padre Gino´s - Order Now</h1>
      <Order />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
