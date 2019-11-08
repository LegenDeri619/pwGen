function pwCheck(){
                if (confirmNum === true){
                    while (checkNum === false){
                        var l = 0;
                            for (m = 0; m < userPW.length; m++){
                                if (numArray[m] === userPW[l]) {
                                    checkNum = true;
                                    break;
                                }
                                else {
                                    l++;
                                }                                
                            }
                    }   
                }
                else {
                    checkNum = true;
                }
            }
            //while loop to check if booleans are true 
            var checkNum = false;
            var checkUpperCase = false;
            var checkLowerCase = false;
            var checkSpecialChar = false;
            while(checkNum === true && checkUpperCase === true && checkLowerCase === true && checkSpecialChar === true) {  
                    
            }
