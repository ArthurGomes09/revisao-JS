const btn = document.getElementById("btn")
var outNum = document.getElementById("resultado")

btn.addEventListener('click', ()=>{
    const inNum = document.getElementById("number")

   let numero = inNum.value
   if(numero === isNaN || numero === ''){
    alert("Coloque um número válido")
   } else{
    console.log((Math.sqrt(numero))) 
   } if(Number.isInteger(Math.sqrt(numero))){
    outNum.textContent = (`A Raiz é: ${Math.sqrt(numero)}.`)
   } else{
    outNum.textContent = (`Não há Raiz Exata Para: ${numero}, pois a raiz de ${numero} é : ${Math.sqrt(numero)}`)
   }
})