let bagitem =[];
onload();

function onload(){
    bagitemsStr = localStorage.getItem('bagitem');
    bagitem= bagitemsStr ? JSON.parse(bagitemsStr):[];
    
    
    displayitemonhomepage();
    displayBagIcon();
}



// let item ={
//     item_image : 'images/1.jpg',
//     rating :{
//         stars : 4.5,
//         noOfreviews : 1400,
//     },
//     company_name : 'Carlton London',
//     item_name : 'Rhodium-Palted CZ Floral Studs',
//     current_price  : 606,
//     original_price : 1045,
//     discount_percenrage :43,
// }

function addToBag(itemId){
    bagitem.push(itemId);
    localStorage.setItem('bagitem',JSON.stringify(bagitem));
    displayBagIcon();

}

function displayBagIcon(){
    let bagItemCountElement =document.querySelector('.bag-item-count');
    if( bagitem.length >0){
        bagItemCountElement.style.visibility ='visible';
    bagItemCountElement.innerText = bagitem.length ;}
    else {
        bagItemCountElement.style.visibility ='hidden';
    }
}




function displayitemonhomepage(){
    let itemsContainerElement = document.querySelector('.items-container');
    if (!itemsContainerElement ){return;}
    let innerHtml='';
items.forEach(item =>{
    innerHtml += `
    <div class="item-container">
        <img class="item-image" src="${item.image}" alt="item image">
        <div class="rating">
            ${item.rating.stars} |${item.rating.count}
        </div>
        <div class="company-name">
            ${item.company}</div>
        <div class="item-name"> ${item.item_name}</div>
        <div class="price">
            <span class="current-price">${item.current_price}</span>
            <span class="original-price">${item.original_price}</span>
            <span class="discount">(${item.discount_percentage} %off)</span>
        </div>
        <button class="button-add-bad" onclick="addToBag(${item.id})">Add to Bag</button>
    </div>
     
`
}
)

itemsContainerElement.innerHTML=innerHtml;


}




// itemsContainerElement.innerHTML= `
//             <div class="item-container">
//                 <img class="item-image" src="${item.item_image}" alt="item image">
//                 <div class="rating">
//                     ${item.rating.stars} |${item.rating.noOfreviews}
//                 </div>
//                 <div class="company-name">
//                     ${item.company_name}</div>
//                 <div class="item-name"> ${item.item_name}</div>
//                 <div class="price">
//                     <span class="current-price">${item.current_price}</span>
//                     <span class="original-price">${item.original_price}</span>
//                     <span class="discount">(${item.discount_percenrage} %off)</span>
//                 </div>
//                 <button class="button-add-bad">Add to Bag</button>
//             </div>

// `;