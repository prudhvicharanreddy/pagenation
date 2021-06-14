
const studentlist = document.querySelector('.student-list');
const studentItem = studentlist.children;
const perPage=10;
var page = 1;

const showPage = (list, page) => {
for (let i=0 ; i<list.length   ; i++){
 if (i<(page)*10 || i>(page)*10+9) {
    list[i].style.display = "none"
 }
 else{
   list[i].style.display = "block"
 }    
}

}

showPage(studentItem,0);



const appendPageLinks = (list) => {
const totalPages = Math.ceil(list.length/perPage);
console.log(totalPages);
const ItemList = document.querySelector('div.pagination');

for (let i=1 ; i<=totalPages; i++){
var addbutton = document.createElement('li');
addbutton.innerHTML='<a class="active" >' + i + '</a>';
ItemList.appendChild(addbutton)
}

var itembuttons = document.querySelectorAll('.active');

for (let i=0 ; i<itembuttons.length ; i++ ){
   itembuttons[i].classList.remove('active')
}

for (let i=0 ; i<itembuttons.length ; i++ ){
   for (let j=0; j<itembuttons.length; j++){
   itembuttons[j].classList.remove('active')}
itembuttons[i].addEventListener('click', () => {
   

   showPage(studentItem, i)  ;
   itembuttons[i].classList.add('active');
   itembuttons[i].classList.remove('active');

})
}

   }

   appendPageLinks(studentItem);

