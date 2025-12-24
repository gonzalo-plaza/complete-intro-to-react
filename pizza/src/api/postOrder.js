const apiUrl = import.meta.env.VITE_API_URL;
export default async function postOrder(cart) {
  const response = await fetch(`${apiUrl}/api/order`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ cart }),
  });

  if (!response.ok) {
    throw new Error("Network response was not ok. Send help.");
  }

  return response.json();
}
