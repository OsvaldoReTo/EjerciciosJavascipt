let div=document.getElementById("res");

btnRes = document.getElementById("btnRes");

btnRes.addEventListener("click", function(e){
    e.preventDefault();
    let a = parseInt(document.getElementById("num1").value);
    menor = a;
   if (a<201 && a>99) {
    console.log(a);      
        if (a%3!=0) { 
        div.innerHTML = "El número no es múltiplo de 3"
    }   else{
        div.innerHTML = "El número es múltiplo de 3"
    }
 } else {
        div.innerHTML="Ingresaste mal tu número, es entre 100 y 200"
    } 
})