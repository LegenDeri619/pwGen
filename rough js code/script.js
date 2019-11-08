var copyEl = document.querySelector("copy");
var generateEl = document.querySelector("generate");
var passwordTextAreaEl = document.querySelector("#passwordTextArea");

generateEl.addEventListener("click", function() {
    var pwlength = 0;
            var genArray = [];
            var numArray = ["0","1","2","3","4","5","6","7","8","9"];
            var upperCaseArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
            var lowerCaseArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
            var specialCharArray = ["~","!","@","#","$","%","^","&","*","-","+","<",">","?",",",".","/"];
            var userPW = [];          
            
            var pwlength = prompt("How long do you want your password?");              
            
            if (isNaN(pwlength)) {
                alert("You did not enter a valid number!");
            }
            else if (pwlength < 0){
                alert("You entered a negative number!");
            }
            else {
                var confirmNum = confirm("Do you want to include Numbers in you password");          
                if (confirmNum === true){
                    genArray = genArray.concat(numArray);                                     
                }

                        
                var confirmUpCase = confirm("Do you want to include Upper case Letters in you password?");          
                if (confirmUpCase === true){
                    genArray = genArray.concat(upperCaseArray);                           
                }          

                var confirmLowCase = confirm("Do you want to include Lower case Letters in you password?");
                if (confirmLowCase === true) {              
                    genArray = genArray.concat(lowerCaseArray);             
                }

                var confirmSpecChar = confirm("Do you want to include Special Characters in you password?");
                if (confirmSpecChar === true) {
                    genArray = genArray.concat(specialCharArray);             
                }

                userPWstring = "";

                for (k=0; k < pwlength; k++){              
                var num = Math.floor(Math.random() * genArray.length) + 1;
                userPW[k] = genArray[num];
                userPWstring += userPW[k];
                }
            }    
            
            console.log(userPW);
            console.log(userPWstring);
    return generateEl.children[1].textContent = userPWstring;
})