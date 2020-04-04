'use strict';



// console.log(document.body.getElementsByClassName('menu-item'));
// console.log(document.body.querySelectorAll('.menu .menu-item'));
let div = document.createElement('div');
let li = document.querySelectorAll('.menu .menu-item');
let ul = document.querySelector('.menu');
// console.log(ul.length);
// console.log(li.length);
// console.log(ul);
li[1].replaceWith(li[2]);
ul.insertBefore(li[1],li[3]);
let li4=document.createElement('li');
//console.log(li4);
li4.classList.add('menu-item');
ul.appendChild(li4);
li4.textContent='Пятый пункт';
// for (let i = 0; i < ul.length; i++) {
    
//     ul[i].setAttribute('id',''+(i+1));
// }
// console.log(ul[0]);
document.body.style.backgroundImage="url('img/apple_true.jpg')";
let text=document.body.querySelector('.column .title');
console.log(text);
let newText = document.createElement('div');
newText.classList.add('title');
newText.setAttribute('id','title');
newText.textContent='Мы продаем только подлинную технику Apple';
console.log(newText);

let parentText = document.body.querySelectorAll('.column');
console.log(parentText[1]);

parentText[1].replaceChild(newText,text);
console.log(document.body.querySelector('.adv'));
parentText[1].removeChild(document.body.querySelector('.adv'));
let ask = prompt("Спросить у пользователя отношение к технике apple",'');
let promptAnswer=document.body.querySelector('.prompt');
//console.log(promptAnswer.isConnected);
promptAnswer.textContent =ask;



