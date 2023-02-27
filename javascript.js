const ButtonAdd = document.getElementById("Add");
ButtonAdd.addEventListener("click", AddDiv);

function AddDiv(){
    var div = document.getElementById("div-element");
    const NewDiv = document.createElement("div");
    console.log("add");
    div.appendChild(NewDiv);
    var textArea=document.getElementById("tekst");
    var tehnologija = textArea.value;
    NewDiv.setAttribute("id", "noviElement");
    NewDiv.innerText=tehnologija;
    textArea.value="";
}

const ButtonRemove=document.getElementById("Remove");
ButtonRemove.addEventListener("click", RemoveDiv);

function RemoveDiv(){
    var elementDiv=document.querySelector("div");
    var stvoreniDiv = elementDiv.lastChild;
    while (stvoreniDiv) {
        elementDiv.removeChild(stvoreniDiv);
        stvoreniDiv = elementDiv.lastChild;
        }
}
