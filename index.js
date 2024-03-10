let counter = 0;

document.getElementById("counter").textContent = counter ;

document.getElementById("add").onclick = function(){
    counter += 1;
    document.getElementById("counter").textContent = counter ;
}

document.getElementById("reset").onclick = function(){
    counter = 0;
    document.getElementById("counter").textContent = counter ;
}

document.getElementById("sub").onclick = function(){
    counter -= 1;
    document.getElementById("counter").textContent = counter;
}