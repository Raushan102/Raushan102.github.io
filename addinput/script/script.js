let addButton = document.querySelector(".add");

addButton.addEventListener("click", addFun);

// let removeButton=document.querySelector(".remove")


//     removeButton.addEventListener("click",removeFun)
let array1 = [];

function addFun() {
  let inputElement = document.getElementById("firstInput");

  let inputValue = inputElement.value;

  if (inputValue) {
    array1.push(document.getElementById("firstInput").value);
    console.log(array1);

    inputElement.value = "";

     let ul= document.createElement("ul")

     let list=document.getElementById("list")
     
    document.body.appendChild(list)

     list.appendChild(ul)
           
     li=document.createElement("li")
      li.innerText=array1[array1.length-1];
      ul.appendChild(li);


    
  } else {
    alert("fill the input field");
  }
}


