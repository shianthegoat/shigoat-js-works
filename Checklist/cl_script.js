<<<<<<< HEAD
const maleBtn = document.getElementById('maleBtn');
const femaleBtn = document.getElementById('femaleBtn');
const otherBtn = document.getElementById('otherBtn');
const submitBtn = document.getElementById('submitBtn');
const message = document.getElementById('message');

submitBtn.onclick = function(){
    if(maleBtn.checked){
        message.textContent = 'You selected: Male';
    }
    else if(femaleBtn.checked){
        message.textContent = 'You selected: Female';
    }
    else if(otherBtn.checked){
        message.textContent = 'You selected: Other';
    }
}
=======
const maleBtn = document.getElementById('maleBtn');
const femaleBtn = document.getElementById('femaleBtn');
const otherBtn = document.getElementById('otherBtn');
const submitBtn = document.getElementById('submitBtn');
const message = document.getElementById('message');

submitBtn.onclick = function(){
    if(maleBtn.checked){
        message.textContent = '8===D';
    }
    else if(femaleBtn.checked){
        message.textContent = '(.)(.)';
    }
    else if(otherBtn.checked){
        message.textContent = 'gae';
    }
}
>>>>>>> 21a58941a91c5ac4dd4836deff4b3d21853ce455
