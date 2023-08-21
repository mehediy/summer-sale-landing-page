let total = 0.0;
let discount = 0.0;

function discountCalc(total) {
  const couponInput = document.getElementById("couponInput");
  const coupon = couponInput.value;

  if (coupon === "SELL200") {
    return total * 0.2; // 20% discount
  } else {
    return 0;
  }
}

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
  grandTotal.innerText = total.toFixed(2);

  discount = discountCalc(total);
  discountPrice.innerText = discount.toFixed(2);

  const finalTotal = total - discount;
  grandTotal.innerText = finalTotal.toFixed(2);

  console.log(discount);
}
