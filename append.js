const maincont = document.getElementById("main_container");

const place = document.createElement("section");

const h1 = document.createElement("h1")
h1.innerText = "Football is my Love";
const ul = document.createElement("ul");
const li = document.createElement("li");
li.innerText = "Cristiano Ronaldo";
const li1 = document.createElement("li");
li1.innerText = "Lionel Messi";
const li2 = document.createElement("li");
li1.innerText = "Neymar Jr";


maincont.appendChild(place);
place.appendChild(h1);
h1.appendChild(ul);
ul.appendChild(li);
ul.appendChild(li1);
ul.appendChild(li2);



const books = document.createElement("section");

books.innerHTML =`<h1> Books I read Daily</h1>
<ul>
<li> HTMl</li>
<li> CSS </li>
<li> java </li>
</ul>`

maincont.appendChild(books);