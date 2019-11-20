const countItems = function(items){
    console.log('Number of items', items.length);
    return items.length;
}

const izracunajPorvsinu = function(stranaA, stranaB){
    let rezultat = stranaA * stranaB;
    console.log(rezultat);
    return rezultat;
}

export {
    countItems, izracunajPorvsinu
}