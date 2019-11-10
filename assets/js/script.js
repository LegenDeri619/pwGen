var copyEl = document.querySelector("#copyToClipboard");
var generateEl = document.querySelector("#generatePassword");
var passwordTextAreaEl = document.querySelector("#passwordTextArea");

function copyPW() {
    event.stopPropagation();
    var copyText = document.getElementById("passwordTextArea");
    copyText.select();
    document.execCommand("copy");
    alert("Password copied to your clipboard: " + copyText.value);
};

generateEl.addEventListener("click", function() {
    var pwlength = 0;
    var charSet = {
        numString: "0123456789",
        upperCaseString: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        lowerCaseString: "abcdefghijklmnopqrstuvwzyz",
        specialCharString: "~!@#$%^&*-+<>?,./",
        userPWstring: "",
        outputPW: ""
    };
    var pwlength = prompt("Enter a password length between 8-128:");              
            
    if (isNaN(pwlength)) {
        alert("You did not enter a valid number!");
    }
    else if (pwlength === null || pwlength === false || pwlength === "") {
        alert("No password length entered!");
    }
    else if (pwlength < 8){
        alert("You entered a length less than 8!");
    }
    else if (pwlength > 128) {
        alert("You entered a password length greater than 128 characters!");
    }
    else {
        var confirmNum = confirm("Do you want to include Numbers in you password");          
        if (confirmNum === true){
            charSet.userPWstring += charSet.numString;
            console.log(charSet.userPWstring);                                     
        }
                
        var confirmUpCase = confirm("Do you want to include Upper case Letters in you password?");          
        if (confirmUpCase === true){
            charSet.userPWstring += charSet.upperCaseString;   
            console.log(charSet.userPWstring);                        
        }          

        var confirmLowCase = confirm("Do you want to include Lower case Letters in you password?");
        if (confirmLowCase === true) {              
            charSet.userPWstring += charSet.lowerCaseString;   
            console.log(charSet.userPWstring);          
        }

        var confirmSpecChar = confirm("Do you want to include Special Characters in you password?");
        if (confirmSpecChar === true) {
            charSet.userPWstring += charSet.specialCharString;  
            console.log(charSet.userPWstring);           
        }

        if (confirmNum === false && confirmUpCase === false && confirmLowCase === false && confirmSpecChar === false) {
            alert("Invalid entries for password");
        }

        for (i = 0; i < pwlength; i++) {              
            var num = Math.floor(Math.random() * charSet.userPWstring.length) + 1;            
            charSet.outputPW += charSet.userPWstring[num];
            console.log(charSet.outputPW);
        }
    }    
           
    return passwordTextAreaEl.textContent = charSet.outputPW;
});