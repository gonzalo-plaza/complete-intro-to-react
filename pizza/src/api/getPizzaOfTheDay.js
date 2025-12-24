const apiUrl = import.meta.env.VITE_API_URL;
export default async function getPizzaOfTheDay() {
  const response = await fetch(`${apiUrl}/api/pizza-of-the-day`);
  const data = await response.json();
  return data;
}