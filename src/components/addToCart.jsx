export default function AddToCart(productId, userId) {
  const url = "http://localhost:3000/api/products/addToCart";
  const response = fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      productId: productId,
      userId: userId,
    }),
  })
    .then((res) => res.json())
    .catch((err) => console.error(err));
}
