export const formatPrice = (num) => {
  const number = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(num / 100);
  return number;
};
