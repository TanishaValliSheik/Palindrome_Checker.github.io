const input = document.querySelector('#input');
const result = document.querySelector('#result');
const button = document.querySelector('#btn');

button.addEventListener('click', ()=>{
    let text = input.value.toLowerCase();
    console.log(text)
    if(!input.value){
        alert('Input is empty');
    }else{
    let palindrome = text.split('').reverse().join('');
    console.log(palindrome)
    let resultText = (text === palindrome) ? `It is palindrome` : `Not a palindrome!`;
    result.innerText = resultText;
    input.value = '';
    }
})

 