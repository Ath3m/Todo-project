

const BtnAdd = document.querySelector("#btnSubmit") ; 
const DivContainer= document.getElementById("toDocontainer")
BtnAdd.addEventListener("click", AddNew);

function AddNew(){
    
    if (inputTodo.value==""){
                alert("You did not input any tasks")
         }

    else{
        
        const NewDiv=document.createElement("div");
        const tasks=document.createElement("p");
        const doneButton=document.createElement("button");
        const delButton=document.createElement("button");
        let todos=[];

        NewDiv.classList.add('newdiv-design');
        tasks.classList.add('tasks-style');
        doneButton.classList.add('done-btn-style')
        delButton.classList.add('delButton-style');
        doneButton.textContent='Done'
        delButton.textContent='Remove'
        tasks.innerHTML=inputTodo.value;
        NewDiv.appendChild(tasks);
        NewDiv.appendChild(doneButton);
        NewDiv.appendChild(delButton);
        DivContainer.appendChild(NewDiv);
        AddNew.onclick=document.getElementById('inputTodo').value="";/*clear input field after display*/ 


        doneButton.addEventListener('click',function(){
            tasks.style.textDecoration="line-through";
            })


        delButton.addEventListener('click',function(){
        NewDiv.removeChild(tasks)
        NewDiv.removeChild(doneButton)
        NewDiv.removeChild(delButton)
        DivContainer.removeChild(NewDiv);
        })
    }
    
}   

document.getElementById('exitBtn').onclick=function(){
    window.location.href='index.html';
}
