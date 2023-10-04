function goToHome() {
  window.location = "index.html";
  localStorage.setItem(`cartItem` , JSON.stringify(cartArr))
}

const data = localStorage.getItem("cartItem");
const cartArr = JSON.parse(data);
console.log(cartArr);

const div = document.querySelector(".cart-div");
const totalamounts = document.querySelector(`.total-amount`)

function renderCart() {
  let totalamount = 0
  totalamounts.innerHTML = ``
  if(cartArr.length > 0){
  for (let i = 0; i < cartArr.length; i++) {
    totalamount += cartArr[i].price * cartArr[i].quantity
    div.innerHTML += `
        <div class ="cart-js">
                <h1> ${cartArr[i].brand}</h1><br>
                <img src="${cartArr[i].img}"  width="180px" height="180px" ><br>
                <p>Model : ${cartArr[i].model}</p>
                <p>Ram : ${cartArr[i].ram}</p>
                <p>Rom : ${cartArr[i].rom}</p>
                <p>Quantity : ${cartArr[i].quantity}</p>
                <p>Price : ${cartArr[i].price}</p>
                <p>Total Price : ${cartArr[i].price * cartArr[i].quantity}</p>
                <button onclick="increaseQuantity(${i})" class ="add-btn">+</button>
                ${cartArr[i].quantity}
                <button  onclick="decreaseQuantity(${i})" class ="subtract-btn">-</button> <br/>
                <button  onclick="deleteItem(${i})" class ="delet-btn">Delete</button>
        </div>
        `;
        totalamounts.innerHTML = `Total Amount :- ${totalamount}`
  }
}else{
  div.innerHTML = `<h1 class="not-found">No Item Found ..... </h2>`
}
}

renderCart();

function increaseQuantity(index) {
  div.innerHTML = "";
  console.log(cartArr[index]);
  cartArr[index].quantity += 1;
  renderCart();
}

function decreaseQuantity(index) {
  div.innerHTML = "";
  console.log(cartArr[index]);
  cartArr[index].quantity -= 1;
  renderCart();
  if (cartArr[index].quantity === 0) {
    div.innerHTML = "";
    cartArr.splice(index, 1);
    renderCart();
  }
}

function deleteItem(index) {
  div.innerHTML = "";
  cartArr.splice(index, 1);
  renderCart();
}



window.onbeforeunload = function() {
  localStorage.setItem('cartItem' , JSON.stringify(cartArr));
};