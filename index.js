let uppercaseCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let lowercaseCharacters = 'abcdefghijklmnopqrstuvwxyz';
let numberCharacters = '0123456789';
let specialCharacters = '!-$^+';

function getRandomChar(chars) {
    let index = Math.floor(Math.random() * chars.length);
    return chars[index];
}

function generatePassword(){
    const passwordInput = document.getElementById('password');
    const noRepeatCheckbox = document.getElementById('norepeat');
    const uppercaseCheckbox = document.getElementById('uppercase');
    const lowercaseCheckbox = document.getElementById('lowercase');
    const numbersCheckbox = document.getElementById('numbers');
    const specialCheckbox = document.getElementById('special');

    let characters = '';
    if (uppercaseCheckbox.checked) characters += uppercaseCharacters;
    if (numbersCheckbox.checked) characters += numberCharacters;
    if (specialCheckbox.checked) characters += specialCharacters;
    if (lowercaseCheckbox.checked) characters += lowercaseCharacters;

    if (characters === '') {
        passwordInput.value = '';
        return;
    } 

    let password = '';
    const lenght = 12;
    while (password.length < lenght) {
        let char = getRandomChar(characters);
        if (noRepeatCheckbox.checked && password.includes(char)) continue;
        password += char;
    }

    passwordInput.value = password;
}

function copyPassword(){
    const passwordInput = document.getElementById('password');
    const copyButton = document.getElementById('copy');

    passwordInput.disabled = false;
    passwordInput.select();
    passwordInput.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(passwordInput.value);
    passwordInput.disabled = true;
    alert('Password copied to clipboard');
}