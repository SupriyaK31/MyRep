//examine the  doucument object
//console.dir(document); 


//console.log(document.documentURI);
//console.log(document.domain);
//console.log(document.title);
//console.log(document.doctype);
//console.log(document.getElementById('main-header'));

//var headertitle=document.getElementById('main-header');

//headertitle.style.borderBottom='solid 3px #000';

// var byclass=document.getElementsByClassName('list-group-item');
// //get element by classname
// console.log(byclass);

// console.log(byclass[1]);
// byclass[2].style.backgroundColor='green'
// for(let i=0;i<byclass.length;i++){
//     byclass[i].style.fontWeight = 'bold'
// }

//QuerySelector

// var header= document.querySelector('#main-header');
// header.style.borderBottom ="solid 4px #ccc";

// var input=document.querySelector('input')
// input.value = "hello world"

// var submit=document.querySelector('input[type="submit"]');
// submit.value="send"

// var secondList=document.querySelector('.list-group-item:nth-child(2)')
// secondList.style.backgroundColor = "green"

// var trdList = document.querySelector('.list-group-item:nth-child(3)')
// trdList.style.visibility = "hidden"

//QuerySelectorAll

// var secondList=document.querySelectorAll('li:nth-child(2)');
// secondList[0].style.backgroundColor = "green";


// var odd=document.querySelectorAll('li:nth-child(odd)')
// var even=document.querySelectorAll('li:nth-child(even)')
// for(let i=0;i<odd.length;i++)
// {
//     odd[i].style.backgroundColor="gray"
//     even[i].style.backgroundColor="lightgray"
// }

//DOM triversing

var item=document.querySelector('#items');
// console.log(item.parentElement)
// console.log(item.parentNode.parentNode.parentNode)
// console.log(item.lastElementChild)
// item.lastElementChild.style.color="blue"
// var tag=document.querySelector('body');
// console.log(tag.lastChild)
// console.log(item.childNodes) //node list

// console.log(item.children) //html collection
// item.children[1].style.backgroundColor ="yellow"

//first child

// console.log(item.firstChild)

// console.log(item.firstElementChild)

// item.firstElementChild.textContent = "Hello 1"

//last child

// console.log(item.lastChild)

// console.log(item.lastElementChild)
// item.lastElementChild.textContent = "Hello 4"

// //next sibiling
// var title=document.querySelector('head')
// console.log(item.nextSibling)
// console.log(title.nextElementSibling)

//previous sibiling

// console.log(item.previousSibling)
// console.log(item.previousElementSibling)

// create element

var newDiv = document.createElement('div')
// add class
newDiv.className = "title"
// add attribut
newDiv.setAttribute('title','hello')
// text node

var newDivText=document.createTextNode('Hello World')
newDiv.appendChild(newDivText);


var container = document.querySelector('header .container')
var h1=document.querySelector('header h1')
container.insertBefore(newDiv,h1);
console.log(newDiv);