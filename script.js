let inputSlider = document.getElementById("inputSlider");
let sliderValue = document.getElementById("sliderValue");
let passBox = document.getElementById("passBox");
let lowercase = document.getElementById("lowercase");
let uppercase = document.getElementById("uppercase");
let number = document.getElementById("number");
let symbol = document.getElementById("symbol");
let gtnBtn = document.getElementById("gtnBtn");
let copyIcon = document.getElementById("copyIcon");


sliderValue.textContent = inputSlider.value;

inputSlider.addEventListener('input', () => {
    sliderValue.textContent = inputSlider.value;
});


gtnBtn.addEventListener('click',()=>{
    passBox.value = generatePassword();
})

let lowerChars ="abcdefghijklmnopqrstuvwxyz";
let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let allNumbers = "0123456789";
let allSymbols = "$~!*#^&";

// Function to generate password

function generatePassword(){
    let genPassword = "";
    let allChars = "";

    allChars += lowercase.checked? lowerChars:"";
    allChars += uppercase.checked? upperChars:"";
    allChars += number.checked? allNumbers:"";
    allChars += symbol.checked? allSymbols:"";


    if(allChars =="" || allChars.length == 0){
        return genPassword;
    }

    let i = 1;
    while(i<=inputSlider.value){
        genPassword += allChars.charAt(Math.floor(Math.random() * allChars.length));
        i++;
    }
    return genPassword;
}

copyIcon.addEventListener('click', ()=>{
    if(passBox.value != "" || passBox.value.length >=1){
        navigator.clipboard.writeText(passBox.value);
        copyIcon.innerText = "check";
        copyIcon.title = "Password Copied";

        setTimeout(()=>{
            copyIcon.innerHTML = "content_copy";
            copyIcon.title = "";
        }, 3000)
    }
});