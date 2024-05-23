const passwordBox = document.getElementById("password");
const copyBtn = document.getElementById("copy");
const toast = document.getElementById("toast");

async function createPassword () {
    if (copyBtn.classList.contains("fa-regular" &&"fa-square-check")) {
        copyBtn.classList.remove ("fa-regular", "fa-square-check");
        copyBtn.classList.add ("fa-regular", "fa-copy");
    }
    const length = Math.floor (Math.random() * (15 - 8) + 8);
    const response = await fetch(`https://www.psswrd.net/api/v1/password/?length=` + length + `&lower=1&upper=1&int=1&special=1`);

    var data = await response.json();

    const pass = data.password;
    passwordBox.value = pass;
}


copyBtn.addEventListener("click", function () {

    if (passwordBox.value != "") {
        if (copyBtn.classList.contains("fa-regular" &&"fa-copy")) {
            copyBtn.classList.remove ("fa-regular", "fa-copy");
            copyBtn.classList.add ("fa-regular", "fa-square-check");
        }
        const textToCopy = passwordBox.value;
    
        const clipboardItem = new ClipboardItem({ "text/plain": new Blob([textToCopy], { type: "text/plain"}) });
    
        navigator.clipboard.write([clipboardItem]).then(function() {
            console.log("Text copied" + textToCopy);
        });
        
        toast.style.display = "block";
        setTimeout(function () {
            toast.style.display = "none";
        }, 1000);
        
        passwordBox.value = "";
    }
    
});



// const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// const lowerCase = "abcdefghijklmnopqrstuvwxyz";
// const number = "0123456789";
// const symbol = "~!@#$%^&*()_+";

// const allChars = upperCase + lowerCase + number + symbol;

// function createPassword () {
//     const length = Math.floor (Math.random() * (13 - 8) + 8)
//     let password = "";
//     password += upperCase[Math.floor(Math.random() * upperCase.length)];
//     password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
//     password += number[Math.floor(Math.random() * number.length)];
//     password += symbol[Math.floor(Math.random() * symbol.length)];

//     while (length > password.length) {
//         password += allChars[Math.floor(Math.random() * allChars.length)];
//     }
//     passwordBox.value = password;
// }