let osoba1 = {username:"djudjini", password:"FRAM472a"};
let osoba2 = {username:"kesidi006", password:"dd44213Ptrd4"};
let osoba3 = {username:"roberto", password:"gte663uqio"};
let nizOsobaBaza = [osoba1, osoba2, osoba3];
// ovi js objekti gore u ovom slucaju predstavljaju podatke o korisnicima u JSON obliku. Koji bi inace bili skladisteni na serveru


let username=document.getElementById("user");
let password=document.getElementById("password");
let dugme=document.getElementById("Confirm");

dugme.addEventListener("click",loginProvera);

function proveraBrKaraktera(parametar){

    if (parametar.length>=3 && parametar.length<=15) {

        return true;
    }

    else {
        return false;
    }
}

function proveriPasword(parametar){

    if (Number.isInteger(parseInt(parametar.charAt(0))) || parametar.charAt(0)==" "){

        return false;
    }

    else {

        return proveraBrKaraktera(parametar);

    }
}

function proveriPostojiLiKorisnikUBazi (pasvord,username,niz){

    let postojiUserUsistemu = false;
    niz.forEach(element=>{
        if(element.username==username && element.password==pasvord){
            postojiUserUsistemu = true;
        }
    })

    return postojiUserUsistemu;
}



function loginProvera() {

if (proveraBrKaraktera(username.value)==false){

     return alert("Uneli ste nevalidan br karaktera. Broj dozvoljenih karaktera je od 3 do 15")
}


if (proveriPasword(password.value)==false){

        return alert("Pasvord nije validan");
   
}


if (proveriPostojiLiKorisnikUBazi(password.value,username.value,nizOsobaBaza)==true){

    korisnikulazinasajt();
}

else{

    alert ("Molimo vas napravite nalog");
}
  
}

function korisnikulazinasajt(){

    window.location.href = "http://www.w3schools.com"
}



// Da imamo stvarni bekend preko fetch-a slali bismo request bekendu sa metodom POST i slali bismo mu username i pasword, 
//  bekend bi proveravao da li u bazi postoji taj korisnik i vracao nam true ili false.