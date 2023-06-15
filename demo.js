var form=document.getElementById('my-form');
var inputName=document.getElementById('name');
var inputEmail=document.getElementById('email');

var userList= document.querySelector('#user')

form.addEventListener('submit' , addUser);

function addUser(e){
    e.preventDefault();
 if(inputName.value === '' || inputEmail.value === ''){
    alert('Please enter all fields');
 }  
 else{
   localStorage.setItem(typeof(`${inputName.value}`),`${inputEmail.value}`);
    const li=document.createElement('li');
    li.appendChild(document.createTextNode(`${inputName.value}   ${inputEmail.value}`));
    userList.appendChild(li);
 }
}