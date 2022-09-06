let arreglo = [-1, 3, 4, 2, 6];

function minimo(array) {
    num = array.length;
    min = array[1];
    for (let i = 0; i < num; i++) {
        if (array[i]<=min) {
            min = array[i];
        } //if
        
    }
    return min
}

console.log(minimo(arreglo));