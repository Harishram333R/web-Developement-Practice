const display=document.querySelector(".display");
const btn=document.querySelectorAll("button");
const specialchar=["%","*","/","-","+","="];
let output="";

const calculate = (btnValue)=>{
    if(btnValue==="=" && btnValue!==""){
        output=eval(output.replace("%","/100"));
    }else if(btnValue ==="DEL"){
          output=output.toString().slice(0,-1);
    }
    else if(btnValue==="AC"){
        output="";
    }
    else{
        if(output === "" && specialchar.includes(btnValue)) return;
        output +=btnValue;
    }
  display.value=output;
};

btn.forEach((button) =>{
    button.addEventListener("click",(e)=> calculate(e.target.dataset.value));
});