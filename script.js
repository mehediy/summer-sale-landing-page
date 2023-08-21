let total = 0.0;
function getCardInfo(data) {
  const name = data.childNodes[3].childNodes[3].innerText;
  const price = data.childNodes[3].childNodes[5].innerText.split(" ")[0];

  const cartItems = document.getElementById("cartItems");
  const li = document.createElement("li");
  li.innerText = name;
  cartItems.append(li);

  let totalPrice = document.getElementById("totalPrice");
  let discountPrice = document.getElementById("discountPrice");
  let grandTotal = document.getElementById("grandTotal");

  total = parseFloat(total) + parseFloat(price);
  totalPrice.innerText = total.toFixed(2);
}
