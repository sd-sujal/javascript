const input = document.getElementById("input-text");
const button = document.getElementById("btn");

button.addEventListener("click", function () {
    checkPalindrome(input.value);
});

input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        checkPalindrome(input.value);
    }
});

function checkPalindrome(txt) {
    let txt_new = txt.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    console.log(txt, txt_new);

    let len = txt_new.length;
    let halflen = Math.floor(len / 2);
    let result = document.getElementById("result");

    for (let i = 0; i < halflen; i++) {
        if (txt_new[i] !== txt_new[len - i - 1]) {   
            result.textContent = "Nope! Not a palindrome.";
            return;
        }
    }

    result.textContent = "Yes! It's a palindrome.";
}