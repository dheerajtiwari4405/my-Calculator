let inpt =document.getElementById("inputBox");
let btns =document.querySelectorAll("button");
let btnarr =Array.from(btns); // Nodelist se array me convert karna
let string = " ";

btnarr.forEach( btn =>{
    btn.addEventListener("click",(e) => {
        if(e.target.innerHTML == "DEL"){ // ek ek karke delet karna
        string = string.substring(0, string.length-1);
        inpt.value = string;
        }else if(e.target.innerHTML == "AC"){ //pura string khali karna 
        string= " ";
        inpt.value = string;
        }else if(e.target.innerHTML == "="){ // koi bhi operator se equal karna (eval()) se
        string = eval(string);
        inpt.value = string;
        }else{
        string += e.target.innerHTML; //display me value dikhane ke liye 
        inpt.value = string;
        }
    });
});

