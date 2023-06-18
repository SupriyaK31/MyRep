var form=document.getElementById('my-form');
var inputName=document.getElementById('name');
var inputEmail=document.getElementById('email');
var inputPhone=document.getElementById('phone');
var userList= document.querySelector('#user')

form.addEventListener('submit' , addUser);

function addUser(e){
    e.preventDefault();
 if(inputName.value === '' || inputEmail.value === ''){
    alert('Please enter all fields');
 }  
 else{
   let userDetails= {
      name:inputName.value,
      email:inputEmail.value,
      phone:inputPhone.value
   };
   const li=document.createElement('li');
   const btnDel=document.createElement('input');
   const editBtn=document.createElement('input');
   let Serialized = JSON.stringify(userDetails);
   localStorage.setItem(inputName.value,Serialized);
  
    let deselialied = JSON.parse(localStorage.getItem(inputName.value));
    li.appendChild(document.createTextNode(`${inputName.value}- ${inputEmail.value}- ${inputPhone.value}`));
    let inputName1=inputName.value;
    let emailInput1=inputEmail.value;
    let numberInput1=inputPhone.value;
  
    btnDel.appendChild(document.createTextNode("Delete"));
    btnDel.classList="btn sm btn-danger";
    btnDel.value="Delete";
    btnDel.addEventListener('click',delLocalstoarge);
    li.appendChild(btnDel);
    li.appendChild(editBtn);
    userList.appendChild(li);
    function delLocalstoarge(e){
      e.preventDefault();
     userList.removeChild(li);
      localStorage.removeItem(inputName1);
   }
        editBtn.value="Edit";
        editBtn.classList="btn btn-sm btn-secondary";
        editBtn.addEventListener('click',onclickEdit);
        function onclickEdit(e){
            e.preventDefault();
            inputName.value=inputName1;
            inputEmail.value=emailInput1;
            inputPhone.value=numberInput1;
            userList.removeChild(li);
            localStorage.removeItem(emailInput);
        }
   inputName.value=" ";
   inputEmail.value=" ";
   inputPhone.value=" ";
 }
}

