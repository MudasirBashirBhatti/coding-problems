let num1 =document.getElementById('number1').value;
let num2 =document.getElementById('number2').value;
let btn = document.querySelector('button');
let result = document.getElementById('result');

btn.addEventListener('click',function(){
    result.innerHTML = `Remainder of ${num1} / ${num2} is: ${num1%num2}`;
    console.log(num1)
});