
function lifeSupply(numPerMonth, age){
    
    var pizzaForLife=numPerMonth*12*(100-age);
    return pizzaForLife;
}

// lifeSupply(10,26) // Враћа 8880
// console.log(lifeSupply(10,26)) // Исписује 8880