let total = 0.0;
let discount = 0.0;

let totalPrice = document.getElementById("totalPrice");
let discountPrice = document.getElementById("discountPrice");
let grandTotal = document.getElementById("grandTotal");
const couponBtn = document.getElementById("couponBtn");

function getCardInfo(data) {
  const name = data.childNodes[3].childNodes[3].innerText;
  const price = data.childNodes[3].childNodes[5].innerText.split(" ")[0];

  const cartItems = document.getElementById("cartItems");
  const li = document.createElement("li");
  li.innerText = name;
  cartItems.append(li);

  total = parseFloat(total) + parseFloat(price);
  totalPrice.innerText = total.toFixed(2);
  grandTotal.innerText = total.toFixed(2);

  let discounted = total * discount;

  discountPrice.innerText = discounted.toFixed(2);

  const finalTotal = total - discounted;
  grandTotal.innerText = finalTotal.toFixed(2);
  purchaseBtn.disabled = total === 0;
  couponBtn.disabled = total < 200;
}

document
  .getElementById("couponBtn")
  .addEventListener("click", function (event) {
    let coupon = event.target.parentNode.childNodes[1].value;

    if (coupon == "SELL200") {
      discount = 0.2;
      event.target.parentNode.childNodes[1].value = "";
      couponBtn.disabled = true;
    } else {
      alert("Invalid coupon code");
    }

    let discounted = total * discount;
    discountPrice.innerText = discounted.toFixed(2);

    const finalTotal = total - discounted;
    grandTotal.innerText = finalTotal.toFixed(2);
  });

// Reset values and clear list items
purchaseBtn.addEventListener("click", function () {
  total = 0.0;
  discount = 0.0;
  totalPrice.innerText = "0.00";
  discountPrice.innerText = "0.00";
  grandTotal.innerText = "0.00";
  cartItems.innerHTML = "";
  purchaseBtn.disabled = true;
  couponBtn.disabled = true;
});
