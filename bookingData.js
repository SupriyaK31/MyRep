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
      name:`${inputName.value}`,
      email:`${inputEmail.value}`,
      phone:`${inputPhone.value}`
   };
   let Serialized = JSON.stringify(userDetails);
   localStorage.setItem(`${inputName.value}`,Serialized);
    const li=document.createElement('li');
    li.appendChild(document.createTextNode(`${inputName.value} ${inputEmail.value} ${inputPhone.value}`));
    userList.appendChild(li);
 }
}