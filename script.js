let ip = document.getElementById("ip");
let btns = document.getElementsByClassName("btn");

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function() {
        curr = ip.value;
        if(curr!='Bad Input Buddy') {
            curr += btns[i].innerText;
        }
        else {
            curr = '';
        }
        ip.value = curr;
    });
}

document.getElementById("calculate").addEventListener('click', function() {
    try{
        ip.value = ip.value.replace('x','*');
        ip.value = ip.value.replace('^','**');
        ip.value = eval(ip.value);
    }
    catch(e){
        ip.value = 'Bad Input Buddy';
    }
});

document.getElementById("clr-btn").addEventListener('click',function() {
    ip.value = '';
});

document.getElementById("dlt-btn").addEventListener('click',function() {
    ip.value = ip.value.slice(0, -1);
});