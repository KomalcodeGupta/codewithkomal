let put = document.getElementById("inputbox");
let Buttons = document.querySelectorAll("button");
let string ="";
let arr = Array.from(Buttons);
arr.forEach(button => {
    button.addEventListener("click",(e) =>{

        if(e.target.innerHTML == "="){
            string=eval(string);
            put.value=string;
}
else if( e.target.innerHTML == "AC"){
    string="";
    put.value=string;
}
else if( e.target.innerHTML == "DEL"){
    string=string.substring(0,string.length-1);
    put.value=string;
}
else{
string += e.target.innerHTML;
put.value=string;
}
})
})