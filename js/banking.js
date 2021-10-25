/*

function changeBalance(type){
    
  // add depo-input and depo-$00
  const previousTotal= document.getElementById(`${type}-total`)
  const newInput= document.getElementById(`${type}-input`)
 

// set text for input and depo-$00
  const previousText=previousTotal.innerText
  const newINputText= newInput.value;

// convert booth text to number
 const previousNumber = parseFloat(previousText)
 const newInputNumber = parseFloat(newINputText)

// set innerText for depo-$00 booth number 
 previousTotal.innerText = newInputNumber + previousNumber

//   clear depo-field
 newInput.value =''

//   add balance and set inner-text for $1240 then convert text to number
 const balanceTotal = document.getElementById('balance-total')
 const balanceTotalText=balanceTotal.innerText;
 const balanceNumber = parseFloat(balanceTotalText);

//   set inner-text for $1240 then addition balance-number and depo input-number
 balanceTotal.innerText= balanceNumber+newInputNumber

 if(type == 'withdraw'){
     balanceTotal.innerText = balanceNumber - newInput

 }
 else{
     balanceTotal.innerText = balanceNumber + newInput

 }

}

// handle deposit btn event 

document.getElementById('deposit-button').addEventListener('click',function(){
 changeBalance('deposit')

   
 });
 
 
 // handle withdraw btn event
 document.getElementById('withdraw-button').addEventListener('click',function(){
     changeBalance('withdraw')
   
 })
 

  */


// handle deposit btn event 

document.getElementById('deposit-button').addEventListener('click',function(){

// add depo-input and depo-$00
   const depoTotal= document.getElementById('deposit-total')
   const depoinput= document.getElementById('deposit-input')

// set text for input and depo-$00
   const depoText=depoTotal.innerText
   const depoINputText= depoinput.value;

// convert booth text to number
  const depoNumber = parseFloat(depoText)
  const depoInputNumber = parseFloat(depoINputText)

// set innerText for depo-$00 booth number 
  depoTotal.innerText = depoInputNumber + depoNumber

//   clear depo-field
  depoinput.value =''

//   add balance and set inner-text for $1240 then convert text to number
  const balanceTotal = document.getElementById('balance-total')
  const balanceTotalText=balanceTotal.innerText;
  const balanceNumber = parseFloat(balanceTotalText);

//   set inner-text for $1240 then addition balance-number and depo input-number
  balanceTotal.innerText= balanceNumber+depoInputNumber

  
});


// handle withdraw btn event
document.getElementById('withdraw-button').addEventListener('click',function(){
   
// add withdraw input and withdraw-$00
   const withdrawTotal= document.getElementById('withdraw-total');
   const withdrawInput= document.getElementById('withdraw-input');

// set text for input and dwithdraw-$00
  const withdrawText= withdrawTotal.innerText;
  const withdrawInputText= withdrawInput.value;

// convert Booth text to number
  const withdrawNumber = parseFloat(withdrawText);
  const withdrawInputNumber = parseFloat(withdrawInputText);
  

// set innerText for withdraw-$00 booth number 
  withdrawTotal.innerText = withdrawInputNumber + withdrawNumber

//   clear withdraw-field
  withdrawInput.value=''

//   add balance and set inner-text for $1240 then convert text to number
  const balanceTotal = document.getElementById('balance-total')
  const balanceTotalText=balanceTotal.innerText;
  const balanceNumber = parseFloat(balanceTotalText);

//   set inner-text for $1240 then subtraction balance-number and withdraw input-number
  balanceTotal.innerText = balanceNumber - withdrawInputNumber

})
