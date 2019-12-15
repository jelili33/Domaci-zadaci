let Data=[ {
    name: "Britney Spears",
    number:"+12458962752"
},

{
    name:"Agata Jones",
    number:"+582569863"
},

{
    name:"Nik Plums",
    number:"+3952468596"
}

]

function addNewContact(newUser, newNumber){

    Data.push({username: newUser, number: newNumber})
    return Data;

}

export {Data, addNewContact} ;





