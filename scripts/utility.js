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
function seatLefts(){
    const currentSeatLeft=getConvertedValue('seat-left');
    const updatedSeatLeft=currentSeatLeft-1;
    setInnerText('seat-left',updatedSeatLeft);
}

function updateCountSeat(){
  const blockedSeat= getConvertedValue('count-seat');
  const updatedblockedSeat=blockedSeat+1;
  setInnerText('count-seat',updatedblockedSeat);
     
}

function enableNextButton() {
    const bockedSeat = getConvertedValue('count-seat'); 
    const phoneNumber = document.getElementById('phone-number').value.trim();

    const nextBtn = document.getElementById('next-btn');

    if (bockedSeat > 0 && phoneNumber !== "") {
        nextBtn.disabled = false;
        dataClean();
    } else {
        nextBtn.disabled = true;
    }
    
}

function enableCouponApplyButton(){
    const bockedSeat = getConvertedValue('count-seat');
    const couponInput = document.getElementById('input-filed');
    const applyBtn = document.getElementById('apply-btn');

    if (bockedSeat >= 4) {
        couponInput.disabled = false;
        applyBtn.disabled = false;
    } else {
        couponInput.disabled = true;
        applyBtn.disabled = true;
    }
}
 
function dataClean(){
 document.getElementById('phone-number').value='';

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
