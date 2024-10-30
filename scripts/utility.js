function hiddenElementById(elementId){
    const element=document.getElementById(elementId);
    element.classList.add('hidden');
}

function setBackgroundColor(elementId){
    const element=document.getElementById(elementId);
    element.classList.add('bg-[#1DD100]');
}
function removeBackgroundColor(elementId){
    const element=document.getElementById(elementId);
    element.classList.remove('bg-[#1DD100]');
}

function calculateTotalPrice(value){
    const totalPrice=getConvertedValue('total-price');
    const updatedTotalPrice=totalPrice+parseInt(value);
    document.getElementById('total-price').innerText=updatedTotalPrice;
}

function calculateGrandTotal(status){

    const totalPrice=getConvertedValue('total-price');
    console.log(totalPrice);
    if(status===undefined){
        document.getElementById('grand-total').innerText=totalPrice;
    }
    else {
        const couponCode=  document.getElementById('input-filed').value;
        if(couponCode==='NEW15'){
            const grandTotal= totalPrice-(totalPrice*0.15);
            setInnerText('grand-total',grandTotal);
        }
        if(couponCode==='Couple 20'){
            const grandTotal= totalPrice-(totalPrice*0.2);
            setInnerText('grand-total',grandTotal);
        }
        else{
            alert('input valid coupon code!!');
        }
      
    }
}

function updateCountSeat(){
  const blockedSeat= getConvertedValue('count-seat');
  const updatedblockedSeat=blockedSeat+1;
  setInnerText('count-seat',updatedblockedSeat);
     
}

function getConvertedValue(id){
    const price= document.getElementById(id).innerText;
    const convertPrice=parseInt(price);
    return convertPrice;
 }
 function setInnerText(id,value){
    const textlocation=document.getElementById(id);
     textlocation.innerText=parseInt(value);
 }
