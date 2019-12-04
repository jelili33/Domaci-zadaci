function getAllMessages(){

    let promiseResponseAllMessages = fetch(`https://coetus.herokuapp.com/api/message`).then(response => response.json()
        , (error) => {
            console.log(error);
        });
    return promiseResponseAllMessages;
}

function addMessageForUser(user, poruka) {
    let res = fetch(`https://coetus.herokuapp.com/api/message`,{
        headers: { "Content-Type": "application/json; charset=utf-8" },
        method: 'PUT',
        body: JSON.stringify({
            username: user,
            message: poruka
        })
    })
    .then(response => response.json()
        , (error) => {
            console.log(error);
        })
    return res;
}

function getAllMessagesForUser(user) {
    let res = fetch(`https://coetus.herokuapp.com/api/message`,{
        headers: { "Content-Type": "application/json; charset=utf-8" },
        method: 'POST',
        body: JSON.stringify({
          username: user
                  })
    })
    .then(response => response.json()
        , (error) => {
            console.log(error);
        })
    return res;
}




export{
getAllMessages,
addMessageForUser,
getAllMessagesForUser,


}