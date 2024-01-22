export default function IsInCart(productId, userId) {
  const url =
    "http://localhost:3000/api/products/isInCart?userId=" +
    userId +
    "&productId=" +
    productId;
  const response = fetch(url)
    .then((res) => res.json())
    .then((response) => {
      if (response.success && response.isInCart) {
        return true;
      }
      return false;
    })
    .catch((error) => {
      console.error(error);
      return false;
    });
  return response;
}
