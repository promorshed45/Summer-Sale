function selectCardItem(target) {
  const itemTitle = target.querySelector(".item-title").innerText;

  const setItemList = document.getElementById("item-list");
  const li = document.createElement("li");
  li.innerText = itemTitle;
  setItemList.appendChild(li);

  const itemPrice = parseInt(target.querySelector(".item-price").innerText);
  // console.log(itemPrice);

  const setTotalPrice = document.getElementById("total-price");
  const preTotalPriceString = setTotalPrice.innerText;
  const preTotalPrice = parseInt(preTotalPriceString);

  const totalPrice = itemPrice + preTotalPrice;
  setTotalPrice.innerText = totalPrice;

  const setGrandTotal = document.getElementById("grand-total");
  setGrandTotal.innerText = totalPrice;

  
  const makePurchase = document.getElementById('make-purchase');
  const applyCoupon = document.getElementById('apply-coupon');


  if(totalPrice > 0 ){
    makePurchase.removeAttribute("disabled")
  }
  if(totalPrice >= 200){
    applyCoupon.removeAttribute('disabled');
  }

}

function applyCouponCode(){
  // const applyCoupon = document.getElementById('apply-coupon');

  const copuonField = document.getElementById('coupon-field');
  const discounAmount = document.getElementById('discount-price');

  const totalPriceAmount = document.getElementById("total-price");
  const totalPriceAmountValueString = totalPriceAmount.innerText;
  const totalPriceAmountValue = parseInt(totalPriceAmountValueString);
  
  
  const copuonFieldValue = copuonField.value;

if(copuonFieldValue === "SELL200"){
  
  if(totalPriceAmountValue >=200){
    const discountPrice = totalPriceAmountValue * 0.20;
   discounAmount.innerText = discountPrice;

   console.log(discountPrice);

  }

}  



}





function link() {
  location.href = "index.html";
}
