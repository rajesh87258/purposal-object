function sayHello(){
    alert('no please say yes');
}
function sayno(){
    alert('please say yes');
}
function sayno1(){
    alert('last chance');
}
function sayno2(){
    alert('FUCK OFF');
}


var helloButton2 = document.getElementById('btn2');
helloButton2.addEventListener('click',sayHello);
helloButton2.addEventListener('click',sayno);
helloButton2.addEventListener('click',sayno1);
helloButton2.addEventListener('click',sayno2);