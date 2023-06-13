let decInput = document.getElementById("decimal-input");
let binInput = document.getElementById("binary-input");
let errorMsg = document.getElementById("error-msg");

//Convert decimal to binary when user inputs in the decimal field
decInput.addEventListener("input", () => {
    let decValue = parseInt(decInput.value);
    //Converts the decimal value to binary
    binInput.value = decValue.toString(2);
})

//Convert binary to decimal when user inputs in the binary field
binInput.addEventListener("input", ()=>{
    let binValue = binInput.value;
    //If the binary number is valid convert it to decimal
    if(binValidator(binValue)) {
        decInput.value = parseInt(binValue, 2);
        errorMsg.textContent = "";
    }
    //Else display an error message
    else {
        errorMsg.textContent = "Please Enter a Valid Binary Input";
    }

    //Function to check if the binary number is valid i.e. it does not contain any number other than 0 and 1
    function binValidator(num) {
        for (let i=0; i<num.length; i++){
            if (num[i] != "0" && num[i] != "1"){
                return false;
            }
        }
        return true;
    }
});