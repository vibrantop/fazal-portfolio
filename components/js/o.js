function add(){
    const input =document.getElementById("myInput");
    const btn =document.getElementById("addButton");
    const ul =document.getElementById("myUL");
    btn.addEventListener("click", function(){
    const li =document.createElement("li");
    li.innerHTML = input.value;
    if(input.value===""){
        alert("You must write something!");
        return;
    }
    ul.appendChild(li);
    input.value="";
    deleteTask(li);
    });
}


add();
// delete function
function deleteTask(li){
 const btn = document.createElement("button");
 btn.innerHTML="Delete";
 li.appendChild(btn);
 btn.addEventListener("click", function(){
    li.remove();
 });
}