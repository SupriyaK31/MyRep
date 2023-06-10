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


var odd=document.querySelectorAll('li:nth-child(odd)')
var even=document.querySelectorAll('li:nth-child(even)')
for(let i=0;i<odd.length;i++)
{
    odd[i].style.backgroundColor="gray"
    even[i].style.backgroundColor="lightgray"
}