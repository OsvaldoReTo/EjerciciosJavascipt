let max=document.getElementById("res");

btnRes = document.getElementById("btnRes");

btnRes.addEventListener("click", function(e){
    e.preventDefault();
    let x = parseInt(document.getElementById("num1").value);
    let y = parseInt(document.getElementById("num2").value);
    let z = parseInt(document.getElementById("num3").value);
    mayor = x;
   if ((x<101 && x>0) && (y<101 && y>0) && (z<101 && z>0)) {
    console.log(x,y,z);      
    if (mayor<=y) {
            mayor = y
            if (mayor<=z) {
                mayor = z 
            }
          }  
        max.innerHTML = "El número mayor es: " + mayor;
    } //if para verificar número
     else {
        max.innerHTML="Ingresaste mal tu número, es entre 1 y 100"
    } 
})