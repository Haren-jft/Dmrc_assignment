const start=document.querySelector("#start_from");
const end=document.querySelector("#end_to");
const pay_method=document.querySelector("#payment");
const cal_btn=document.getElementById("calculate");
const total=document.getElementById("total");
const discount=document.getElementById("discount");
const final=document.getElementById("final");


cal_btn.addEventListener("click",function(){
    if(start.value==='Select'){
        alert("Enter the source station");
    }
    else if(end.value==='Select'){
        alert("Enter the destination station");
    }
    else if(pay_method.value==='Select'){
        alert("Enter the payment method");
    }
    else{
    let stat_count=Math.abs(parseInt(end.value)-parseInt(start.value));
    let sum_total=0;
    if(stat_count===0){
        sum_total=10;
    }
    else if(stat_count%4==0){
        sum_total=(stat_count/4)*10;
    }
    else{
        sum_total=(Math.floor(stat_count/4))*10+10;
    }
    if(sum_total>60) sum_total=60;
    total.innerHTML="Total: "+sum_total;
    let Discount=0;
    if(sum_total>10 && pay_method.value==="Card"){ 
    Discount=0.1*sum_total;
    }
    discount.innerHTML="Discount: "+Discount;
    final.innerHTML="Final Price: "+(sum_total-Discount);
}
});

