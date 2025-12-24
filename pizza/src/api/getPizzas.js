const apiUrl = import.meta.env.VITE_API_URL;
export default async function getPizzas() {
  const response = await fetch(`${apiUrl}/api/pizzas`);
  const data = await response.json();
  return data;
}