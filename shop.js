function selectCardItem(target){
    const itemTitle = target.querySelector('.item-title').innerText;
    

    const setItemList = document.getElementById('item-list');
    const li = document.createElement('li');
    li.innerText = itemTitle;
    setItemList.appendChild(li);

    const itemPrice = parseInt(target.querySelector('.item-price').innerText);
    const setTotalPrice = document.getElementById("total-price");
    setTotalPrice.innerText = itemPrice;

    
    const setGrandTotal = document.getElementById("grand-total");
    setGrandTotal.innerText = itemPrice;

    

    
}


function link(){
    location.href = 'index.html';
}