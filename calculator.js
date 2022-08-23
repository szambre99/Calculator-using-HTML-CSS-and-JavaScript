
let var1=document.getElementById('screen1');
console.log("Value is "+var1.value);




function input(x){
    var1.value=var1.value+x;
}



function calc()
{
    var1.value=eval(var1.value);
}

function clear()
{
console.log("AC button was clicked");
var1.value=" ";
}

