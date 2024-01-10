const subBox = document.getElementById("sub");
const visaBtn = document.getElementById("visa");
const masterCardBtn = document.getElementById("mCard");
const payPalBtn = document.getElementById("pPal");
const submitBtn = document.getElementById("btn");
const subResult = document.getElementById("subResult");
const payResult = document.getElementById("payResult");

submitBtn.onclick =  function(){
  if (subBox.checked){
    subResult.textContent = "You have subscribed!"
  }
  else{
    subResult.textContent = "You have NOT subscribed!"
  }
  if (visaBtn.checked){
    payResult.textContent = "You are paying through Visa!"
  }
  else if (masterCardBtn.checked){
    payResult.textContent = "You are paying through Master Card!"
  }
  else if (payPalBtn.checked){
    payResult.textContent = "You are paying through PayPal!"
  }
  else{
    payResult.textContent = "Please select a payment gateway!"
  }
}
