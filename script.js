const toUppercase = document.getElementById("toUppercase");
const toLowercase = document.getElementById("toLowercase");
const toNumbers = document.getElementById("toNumbers");
const Symbols = document.getElementById("Symbols");



const Mybutton = document.getElementById("Mybutton");
const passwordGenerated = document.getElementById("passwordGenerated");


let loweChars = "abcdefghijklmnopqrstuvwxyz";
let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numberChars = "0123456789";
let symbolChars = "!@#$%^&*()_+-=";






Mybutton.onclick = function(){
    let password = "";
    let allowedChars = "";
    let PasswordLength = document.getElementById("PasswordLength").value;

    let boxChecked = 0;

    if(toUppercase.checked){
        boxChecked = boxChecked+1;
    }

    if(toLowercase.checked){
        boxChecked = boxChecked+1;
    }

    if(toNumbers.checked){
        boxChecked = boxChecked+1;
    }

    if(Symbols.checked){
        boxChecked = boxChecked+1;
    }

    if(boxChecked >PasswordLength){
       alert(`Option selected is more than password length `);
       return;
    }



    


    if(toUppercase.checked){
        allowedChars += upperChars;
       
    }
    else{
        allowedChars += "";
    }

    if(toLowercase.checked){
        allowedChars += loweChars;
        
    }
    else{
        allowedChars += "";
    }

    if(toNumbers.checked){
        allowedChars += numberChars;
        
    }
    else{
        allowedChars += "";
    }

    if(Symbols.checked){
        allowedChars += symbolChars;
        
    }
    else{
        allowedChars += "";
    }

    
    


    for(let i = 0; i<PasswordLength; i++){
        const randomIndex = Math.floor(Math.random()*allowedChars.length);

        password += allowedChars[randomIndex];
    }

    if(allowedChars.length === 0){
        window.alert(`Please Select an Option`);
        return;
    }


    if(PasswordLength == false){
        window.alert(`Please select passowrd length`);
        return;
    }
      passwordGenerated.textContent = password;

}



