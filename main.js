var form = document.getElementById('addForm');
var itemList=document.getElementById('items');
//add event listner
form.addEventListener('submit', addItem);
itemList.addEventListener('click', remoteItem);
//function call
//EL
function addItem(e){
    e.preventDefault();
    //save input text into newItem
    var newItem= document.getElementById('item').value;
    // create li element
    var li= document.createElement('li');
    // assign class to li
    li.className="list-group-item"
    // append text to li
    li.appendChild(document.createTextNode(newItem));
    //add btn to li
     var delbtn = document.createElement('button');
     delbtn.className="btn btn-danger btn-sm float-right delete";
     delbtn.appendChild(document.createTextNode('x'));
     li.appendChild(delbtn);
    //append li to itemlist
    itemList.appendChild(li);
}
function remoteItem(e){
    e.preventDefault();
    if(e.target.classList.contains('delete'))
    {
        if(confirm('Are u sure?')){
           var li=e.target.parentElement;
          itemList.removeChild(li);
        }
    }
}