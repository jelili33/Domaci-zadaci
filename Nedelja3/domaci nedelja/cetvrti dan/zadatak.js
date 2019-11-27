
var pizzaCounter=0;

var classOfButtonsForOrderCount= document.getElementsByClassName("btn-order");
for (var i=0; i<classOfButtonsForOrderCount.length;i++){
    classOfButtonsForOrderCount[i].addEventListener("click", addNumberOfPizzaToOrder);
}

classOfButtonsForOrderCount.forEach(uradiOvoZaSvakiELement);

function uradiOvoZaSvakiELement(element){
    element.addEventListener("click", addNumberOfPizzaToOrder);
}

function addNumberOfPizzaToOrder(){
    
    pizzaCounter=pizzaCounter+1;
    
    document.getElementById("counter").innerHTML = pizzaCounter;
}

var classOfButtonsForOrderNow= document.getElementsByClassName("btn-order-now");
for (var i=0; i<classOfButtonsForOrderNow.length;i++){
    classOfButtonsForOrderNow[i].addEventListener("click", addNumberOfPizzaNow);
}

function addNumberOfPizzaNow(){

    if (pizzaCounter>0){
    
        alert(`Broj naručenih pica je ${pizzaCounter}`);
        pizzaCounter=0;
        document.getElementById("counter").innerHTML = pizzaCounter;
    }
    else{
        alert("Korpa je prazna");
    }
}