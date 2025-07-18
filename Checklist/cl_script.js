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
