let max=document.getElementById("res");

btnRes = document.getElementById("btnRes");

btnRes.addEventListener("click", function(e){
    e.preventDefault();
    let a = parseInt(document.getElementById("num1").value);
    let b = parseInt(document.getElementById("num2").value);
    let c = parseInt(document.getElementById("num3").value);
    menor = a;
   if ((a<101 && a>0) && (b<101 && b>0) && (c<101 && c>0)) {
    console.log(a,b,c);      
    if (menor>=b) {
            menor = b
            if (menor>=c) {
                menor = c 
            }
          }  
        max.innerHTML = "El número menor es: " + menor;
    } //if para verificar número
     else {
        max.innerHTML="Ingresaste mal tu número, es entre 1 y 100"
    } 
})