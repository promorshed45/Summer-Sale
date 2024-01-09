function selectCardItem(target){
    const itemTitle = target.querySelector('.item-title').innerText;
    

    const setItemList = document.getElementById('item-list');
    const li = document.createElement('li');
    li.innerText = itemTitle;
    setItemList.appendChild(li);

    const itemPrice = parseInt(target.querySelector('.item-price').innerText);
    // console.log(itemPrice);


    const setTotalPrice = document.getElementById("total-price");
    const preTotalPriceString = setTotalPrice.innerText;
  const preTotalPrice = parseInt(preTotalPriceString);

    const totalPrice = itemPrice + preTotalPrice;
    setTotalPrice.innerText = totalPrice;
    

    const setGrandTotal = document.getElementById("grand-total");
    setGrandTotal.innerText = totalPrice;



    const setDiscountPrice = document.getElementById("discount-price");
    const discountPrice = totalPrice % 20;
    setDiscountPrice.innerText = discountPrice;
    

    

    
}


function link(){
    location.href = 'index.html';
}