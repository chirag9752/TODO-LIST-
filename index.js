const inputValue = document.getElementById("inputValue");
const listContiner = document.getElementById('listContainer');


function addthings()
 {
     if(inputValue.value === "")
     {
        alert("you must wright something");
     }
     else{
        
         let li = document.createElement("li");
         li.innerHTML = inputValue.value;
         listContiner.appendChild(li);
         let span = document.createElement("span");
         span.innerHTML = "\u00d7";
         li.appendChild(span);
     }
     inputValue.value = "";
 }


listContiner.addEventListener( "click" , function(e){
    if(e.target.tagName === "SPAN")
    {
        e.target.parentElement.remove();
    }
},false)






































