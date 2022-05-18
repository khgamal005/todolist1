var inputBox = document.getElementById("getData");
var addBtn = document.getElementById("addBtn");
var todoList = document.getElementById("todoList");
var deleteAllBtn = document.getElementById("clearBtn");
var addBtn1 = document.getElementById("addBtn1");
var pendingTasksNumb = document.getElementById("pendingTasks");

let listArray;
let currentIndex=0

if(localStorage.getItem("New Todo")==null){
    listArray=[]
}else{
    listArray=JSON.parse(localStorage.getItem("New Todo"))
    show()
}

inputBox.onkeyup=()=>{
    let userData =inputBox.value
        

    if(userData.trim()!=0){
        addBtn.classList.add('active')
        addBtn1.classList.add('active')
    }else{
        addBtn.classList.remove('active')
        addBtn1.classList.remove('active')
    }
}


addBtn.onclick=function(){
    let userEnteredValue = inputBox.value; 
    listArray.push(userEnteredValue)
    localStorage.setItem("New Todo", JSON.stringify(listArray))  
    show()
}

function show(){
    pendingTasksNumb.innerHTML = listArray.length; //passing the array length in pendingtask
    if(listArray.length > 0){ //if array length is greater than 0
      deleteAllBtn.classList.add("active"); //active the delete button
    }else{
      deleteAllBtn.classList.remove("active"); //unactive the delete button
    }
    cartona=''
    for(let i=0;i<listArray.length;i++){
        cartona+=`<li onclick="gettaskinfo(${i})">${listArray[i] } <span class="icon" onclick='deleteform(${i})' ><i class="fas fa-trash"></i></span> </li>`
    }
    document.getElementById("todoList").innerHTML=cartona
    inputBox.value=''
}

function deleteform(index){
    listArray.splice(index,1)
    localStorage.setItem("New Todo", JSON.stringify(listArray))  
    show()
}
function gettaskinfo(index){
     currentIndex=index
    let inputtask =listArray[index]
inputBox.value = inputtask
    
}


addBtn1.onclick =()=>{
    listArray[currentIndex]=inputBox.value;
        localStorage.setItem("New Todo", JSON.stringify(listArray));
        show(); 
        addBtn.classList.remove("active");
}
deleteAllBtn.onclick = ()=>{
    listArray=[];
     localStorage.setItem("New Todo", JSON.stringify(listArray))
     show(); 
   }

   function search(searchTxt){
       var cartona=''
       for(let i=0;i<listArray.length;i++){
           if(listArray[i].toLowerCase().includes(searchTxt.toLowerCase())){
            cartona+=`<li onclick="gettaskinfo(${i})">${listArray[i] } <span class="icon" onclick='deleteform(${i})' ><i class="fas fa-trash"></i></span> </li>`
        
        document.getElementById("todoList").innerHTML=cartona

           }
       }
   } 

 