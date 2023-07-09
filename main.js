// fetch(
//   "https://api.currencyfreaks.com/v2.0/rates/latest?apikey=09e8b928ab494258a4692b13c56fe9d8"
// ).then((result) => {
//   let myData = result.json();

//   return myData;
// });

// function Check() {
//   let check = document.getElementById("check");
//   let amount = document.querySelector(".amount");
//   let egpPrice = document.querySelector(".egp span");
//   let sarPrice = document.querySelector(".sar span");
//   let lebPrice = document.querySelector(".Leb span");
//   egpPrice.innerHTML = Math.round(amount.value * currency.rates["EGP"]);
//   sarPrice.innerHTML = Math.round(amount.value * currency.rates["SAR"]);
//   lebPrice.innerHTML = Math.round(amount.value * currency.rates["LBP"]);
// }

fetch(
  "https://api.currencyfreaks.com/v2.0/rates/latest?apikey=09e8b928ab494258a4692b13c56fe9d8"
)
  .then((result) => result.json())
  .then((data) => {
    // Store the fetched conversion rates in the currency variable
    let currency = data.rates;

    // Define the Check function to perform currency conversion
    function Check() {
      let amount = document.querySelector(".amount");
      let egpPrice = document.querySelector(".egp span");
      let sarPrice = document.querySelector(".sar span");
      let lebPrice = document.querySelector(".Leb span");

      // Perform the currency conversion calculations using the fetched rates
      egpPrice.innerHTML = Math.round(amount.value * currency["EGP"]);
      sarPrice.innerHTML = Math.round(amount.value * currency["SAR"]);
      lebPrice.innerHTML = Math.round(amount.value * currency["LBP"]);
    }

    // Attach the Check function to the button click event
    let checkButton = document.getElementById("check");
    checkButton.addEventListener("click", Check);
  });
