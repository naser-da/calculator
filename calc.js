const num1El =document.querySelector('#num1'); 
const num2El =document.querySelector('#num2'); 


const mulEl = document.querySelector('#mul');
const divEl = document.querySelector('#div');
const addEl = document.querySelector('#add');
const subEl = document.querySelector('#sub');

const resultEl = document.querySelector('#result');

function add(){

    resultEl.value = parseInt(num1El.value) + parseInt(num2El.value);
}

function subtract(){

    resultEl.value = parseInt(num1El.value) - parseInt(num2El.value);
}

function mul(){

    resultEl.value = parseInt(num1El.value) * parseInt(num2El.value);
}

function div(){

    resultEl.value = parseInt(num1El.value) / parseInt(num2El.value);
}

addEl.addEventListener('click', add);
subEl.addEventListener('click', subtract);
divEl.addEventListener('click', div);
mulEl.addEventListener('click', mul);