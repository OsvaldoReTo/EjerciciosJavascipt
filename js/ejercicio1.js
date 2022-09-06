let arreglo = [6, 1, 0, 1, 9];
/* console.log(Math.max(...arreglo)); */
function maximo(array) {
    num = array.length;
    max = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i]>=max) {
            max = array[i];
        }; //if
    }
    return max   
}
console.log(maximo(arreglo));


