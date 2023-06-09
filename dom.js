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

var li=document.getElementsByTagName('li');
//get element by TagName

console.log(li);
li[2].style.backgroundColor='green'
for(let i=0;i<li.length;i++){
    li[i].style.fontWeight = 'bold'
}


