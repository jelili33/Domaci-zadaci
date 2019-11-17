

const addTaskButton=document.querySelector('#btn-add');
const taskListContainer=document.querySelector('#tasks-container');
const textBoxTitle= document.querySelector('#txt-title');
//console.log(taskListContainer);
//console.log(addTaskButton);

//console.log(addTaskButton.parentElement);
//console.log(addTaskButton.parentNode);

addTaskButton.addEventListener('click',btnAddClick);
textBoxTitle.addEventListener('keyup',txtKeyUp);
function btnAddClick(e){
    //console.log(e);
    //console.log(e.target);
    e;
    addItem();

}
function txtKeyUp(e){
    //console.log(e);
    if(e.keyCode==13){
        addItem();
    }
}
function addItem(){
    
    let txtBox=document.querySelector('#txt-title');
    //console.log(txtBox);    
   
    let text=txtBox.value;
    text=text.trim();
    if(text==''){
        alert('Task Title can not be empty!');
        return;
    }
    
//Zadatak 8.
    let slectPriority=document.querySelector("#priority");
    let seleceteValue = slectPriority.value;
    text=text + ` (${seleceteValue})`;
    
    //console.log(text);

    let itemContainer=document.createElement("div");
    //console.log(itemContainer);
    itemContainer.className='task-item';
    
    let itemText=document.createElement('p');
    itemText.innerHTML=text;
    itemText.className='task-title';
    //console.log(itemText);

    let checkContainer=document.createElement('div');
    checkContainer.className='task-check';
    
    let removeBtn=document.createElement('button');
    removeBtn.className='task-remove-btn';
    removeBtn.addEventListener('click',removeTask);
    removeBtn.innerHTML='X';
    //<button class="task-remove-btn" onclick="removeTask(event)">X</buton>

    let chkDone=document.createElement('input');
    chkDone.type='checkbox';
    chkDone.className='chk-state';
    chkDone.value='done';
    chkDone.addEventListener('change',handleCheckChange);

    checkContainer.appendChild(removeBtn);
    checkContainer.appendChild(chkDone);



    itemContainer.appendChild(itemText);
    itemContainer.appendChild(checkContainer);
    taskListContainer.appendChild(itemContainer);


       txtBox.value='';



}
function removeTask(e){
    //console.log(e);
    //console.log(e.target);
    if(!confirm('Are you sure?')){
        return;
    }
    let btnToRemove=e.target;
    
    let divToRemove=btnToRemove.parentElement.parentElement;
    //console.log(divToRemove);
    divToRemove.remove();
}

function handleCheckChange(e){
    //console.log(e);
    let chkBox=e.target;

    let checkContainer=chkBox.parentElement;
    let itemContainer=checkContainer.parentElement;

    if(chkBox.checked){
        itemContainer.children[0].style.textDecoration='line-through';
    }
    else{
        
        itemContainer.children[0].style.textDecoration='none';
    }
}
// Zadatak 6.
let removeSelected=document.createElement('button');
document.querySelector("#pocetniZahtevi").appendChild(removeSelected);
removeSelected.classList.add("button");
removeSelected.innerHTML="Remove selected";

removeSelected.addEventListener('click',removeSelectedItems);

// pravimo funkciju za dugme koje brise selektovane stavke
function removeSelectedItems (e){
   
     removeSelected=e.target;
    
     let jedinica=document.querySelectorAll(".chk-state");
     jedinica.forEach(function(a){
         
        let zaBrisanje=a.parentElement.parentElement;

        if (a.checked ==true){

                zaBrisanje.remove()}}
     );
    
    }
    
// Zadatak 7.
let selectInverted=document.createElement('button');
document.querySelector("#pocetniZahtevi").appendChild(selectInverted);
selectInverted.classList.add("button");
selectInverted.innerHTML="Select Inverted";

selectInverted.addEventListener('click',invertChecked);

function invertChecked (e){

    selectInverted=e.target;

    let jedinica=document.querySelectorAll(".chk-state");

    jedinica.forEach(function(a){
        
       if (a.checked ==true){

        a.checked =false; }

        else{
            a.checked =true;
        }
    }
    );
   
   }


