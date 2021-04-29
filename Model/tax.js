const netPrice = document.getElementById('net-price');
const vatRate = document.getElementById('vat-rate');
const incAmount = document.getElementById('inc-amount');


function VATInclusiveAmount(price, rate){
    let totalAmount = price + (price * (rate / 100));
    return totalAmount.toFixed(2);
}