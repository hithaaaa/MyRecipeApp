
var inp = document.getElementById("ing0");
if (inp){
    console.log("myjs")
	inp.addEventListener('input', doesNothing);
}

function doesNothing(){

    console.log("value is "+document.getElementById("ing0").value)
}