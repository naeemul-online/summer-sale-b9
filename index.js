/* 
Step 1: Get access the card
Step 2: Using for of loop get access every single card
Step 3: Apply add event listener method on the card to collect the title of card.
Step 4: Store the text of title in a variable.
Step 5: Now Show the text to th Total prices section
Step 6: Set Serial number by declaring variable outside the loop and incress it ++;
*/

const cards = document.querySelectorAll('.card');
// console.log(cards)
let titleNumber = 1;
let totalPrice = 0;
// using loop to access the card
for(let card of cards){
    card.addEventListener('click', function(){
        // Get the card title and prices text value
        const title = card.querySelector('h3').innerText;
        const price = parseInt(card.querySelector('span').innerText.split(' ')[1]);
        const titleContainer = document.getElementById("title-container")
        // Create p element 
        const p = document.createElement("p");
        p.innerText = titleNumber + ' . ' + title;
        titleContainer.appendChild(p);
        titleNumber++;

        totalPrice += price;   
        
        document.getElementById("totalPrice").innerText = totalPrice.toFixed(2);

        // Get the coupon input value         
        const  applyBtn = document.getElementById('apply-btn')
        applyBtn.addEventListener('click', function(){
            // coupon value access
            const coupon = document.getElementById('input-field').value.split(' ').join("").toUpperCase();
        //   Coupon validation
            if(totalPrice >= 200){
            if(coupon === "SELL200"){
                const discountElement = document.getElementById('discountPrice')
                const discountPrice = totalPrice * 0.2;
                discountElement.innerText = discountPrice.toFixed(2);
                const restTotal = document.getElementById('total')
                restTotal.innerText = totalPrice - discountPrice;
                document.getElementById('input-field').value = "";              

            } else {
                document.getElementById('input-field').value = ""; 
            }
           } else {
            alert('To get 20% discount use more than $200')
            document.getElementById('input-field').value = ""; 
           }  
           
        })
        

        
    })
}
const makePurchase = document.getElementById('make-purchase')
if(makePurchase >= 1){
    makePurchase.setAttribute()
}