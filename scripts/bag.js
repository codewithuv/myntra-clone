let bagItemObjects;
onload();
function onload(){
    loadbagitem();
    displayBagitem();
    displaybagsummary();
}
function removefromBag(itemId){
    bagitem = bagitem.filter(bagitemId => bagitemId != itemId);
    localStorage.setItem('bagitem',JSON.stringify(bagitem));
    loadbagitem();displayBagIcon();
    displayBagitem();
    displaybagsummary();

}

function loadbagitem(){
    console.log(bagitem);
     bagItemObjects=bagitem.map(itemId =>{
        for(let i=0;i<items.length;i++)
        {
            if(itemId == items[i].id)
            return items[i];
        }

    })
    console.log(bagItemObjects);
}


function displayBagitem(){
    console.log(bagitem);
    let containerElement=document.querySelector('.bag-items-container');
    let innerHtml='';
    bagItemObjects.forEach(bagitem => {
        innerHtml +=generateItemsHTMl(bagitem);
    });
    containerElement.innerHTML= innerHtml;

    // ContainerElement.innerHTML= ;
}



function generateItemsHTMl(item){
    console.log(item.image);
    return  `
    <div class="bag-item-container">
            
            <div class="item-right-part">
              <div class="company">${item.company}</div>
              <div class="item-name">${item.item_name}</div>
              <div class="price-container">
                <span class="current-price">${item.current_price}</span>
                <span class="original-price">${item.original_price}</span>
                <span class="discount-percentage">${item.discount_percentage}</span>
              </div>
              <div class="return-period">
                <span class="return-period-days">${item.return_period}</span> return available
              </div>
              <div class="delivery-details">
                Delivery by
                <span class="delivery-details-days">${item.delivery_date}</span>
              </div>
            </div>
        
            <div class="remove-from-cart" onclick="removefromBag(${item.id})">X</div>
          </div>
        
        

    `
}


function displaybagsummary()
{
    let bagsummaryelement =document.querySelector('.bag-summary');
    let totalitem =bagitem.length;
    let totalmrp =0;
    let totaldiscount=0;
    

    bagItemObjects.forEach(bagitem => {
        totalmrp +=bagitem.original_price;
        totaldiscount +=50;
        
    });
    let finalpayment =totalmrp -totaldiscount + 99;
    bagsummaryelement.innerHTML=`
    <div class="bag-details-container">
    <div class="price-header">PRICE DETAILS (${totalitem} Items) </div>
    <div class="price-item">
      <span class="price-item-tag">Total MRP</span>
      <span class="price-item-value">Rs${totalmrp}</span>
    </div>
    <div class="price-item">
      <span class="price-item-tag">Discount on MRP</span>
      <span class="price-item-value priceDetail-base-discount">-Rs${totaldiscount}</span>
    </div>
    <div class="price-item">
      <span class="price-item-tag">Convenience Fee</span>
      <span class="price-item-value">Rs 99</span>
    </div>
    <hr>
    <div class="price-footer">
      <span class="price-item-tag">Total Amount</span>
      <span class="price-item-value">Rs ${finalpayment}</span>
    </div>
 
    `;
}