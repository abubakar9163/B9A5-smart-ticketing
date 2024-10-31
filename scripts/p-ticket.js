function scrolePHparibahan(){
    hiddenElementById('banner-section');
    hiddenElementById('best-offer');
    
}

 const allBtn=document.getElementsByClassName('kbd');

 for (const btn of allBtn){
    btn.addEventListener('click',function(event){
        const Span=event.target.innerText;
        const Class='Economoy';
        const Price=500;
        // console.log(Span,Class,Price)
        const bockedSeat = getConvertedValue('count-seat');
        if (bockedSeat+1>4){
            alert('You will select 4 seat.Your limit is finished!!!');
            return;
        }
        event.target.style.backgroundColor = "#1DD100";
       
        seatLefts();
        updateCountSeat();
       
        
             
       
        const selectedSeatContainer=document.getElementById('selected-seat-container');

        const div=document.createElement('div');
        div.classList.add('flex','justify-between')

        const spanC2=document.getElementById('span-c2');
        spanC2.classList.add('hidden');

        const spanC22=document.getElementById('span-c2-2');
        spanC22.classList.add('hidden');



        const p1=document.createElement('p');
        const p2=document.createElement('p');
        const p3=document.createElement('p');

        p1.innerText=Span;
        p2.innerText=Class;
        p3.innerText=Price;

        div.appendChild(p1);
        div.appendChild(p2);
        div.appendChild(p3);

        selectedSeatContainer.appendChild(div);
        enableCouponApplyButton();
        calculateTotalPrice(Price);
       
        calculateGrandTotal();
        enableNextButton();
        // dataClean();
       
        

       

    })
    
   
 }
 