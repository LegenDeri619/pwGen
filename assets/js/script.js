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
        specialCharString = "~!@#$%^&*-+<>?,./",
        userPWstring: "",
        outputPW: ""
    };
            //var genArray = [];
            //var numArray = ["0","1","2","3","4","5","6","7","8","9"];
            //var upperCaseArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
            //var lowerCaseArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
            //var specialCharArray = ["~","!","@","#","$","%","^","&","*","-","+","<",">","?",",",".","/"];
            //var userPW = [];          
            
            var pwlength = prompt("How long do you want your password?");              
            
            if (isNaN(pwlength)) {
                alert("You did not enter a valid number!");
            }
            else if (pwlength === null || pwlength === false || pwlength === "") {
                alert("No password length entered!");
            }
            else if (pwlength < 0){
                alert("You entered a negative number!");
            }
            else if (pwlength > 1000) {
                alert("You entered a password length greater than 1000 characters!");
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

                if (confirmNum === false && 
                    confirmUpCase === false && 
                    confirmLowCase === false && 
                    confirmSpecChar === false) {
                    alert("Invalid entries for password");
                }

                for (i=0; i < userPWstring.length; i++) {              
                var num = Math.floor(Math.random() * userPWstring.length) + 1;
                charSet.outputPW[i] = charSet.userPWstring[num];
                charSet.outputPW += charSet.userPWstring[i];
                console.log(charSet.userPWstring);
                }
            }    

            

    return passwordTextAreaEl.textContent = charSet.outputPW;
});