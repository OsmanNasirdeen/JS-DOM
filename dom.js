//create an element
const li = document.createElement("li");
//add text to telement
li.textContent = "item 5";

const ul = document.querySelector("ul");

// add/append an element
ul.append(li);

//insert element at specific postion
const newNode = document.createElement("li");
newNode.textContent = "item 3.5";
newNode.setAttribute("class", "list-items");
ul.insertBefore(newNode, ul.children[2]);

//replace an element
//ul.replaceChild(newNode, ul.children[2]);

//set attributes to elements
li.setAttribute("class", "list-items");
li.setAttribute("id", "item");

//add and remove classes
li.classList.add("d-flex");
li.classList.remove("d-flex");
li.removeAttribute("id");

//remove an attributes
//li.removeAttribute("id");
//li.removeAttribute("class");

const items = document.querySelectorAll(".list-items");
for (let i = 0; i < items.length; i++) {
  items[i].style.fontSize = "3rem";
}

//get list of all child nodes
//console.log(ul.childNodes);

//get list of all child elements[html tags]
//console.log(ul.children);
// get the child element/text next to the node
//console.log(ul.firstChild);

// get the next child html element to the node
//console.log(ul.firstElementChild);

// gets the element before current node
//console.log(ul.lastElementChild.previousElementSibling);

//gets the element next to current node
//console.log(ul.firstElementChild.nextElementSibling);

//event  listeners
document.querySelector("#btn").addEventListener("click", () => {
  document.querySelector(".btn-container").classList.toggle("bg");
});
document.querySelector("#font-btn").addEventListener("click", () => {
  console.log("hi");
  document.querySelector(".text").classList.add("change");
});

/*const btn = document.querySelector(".btn-container");
btn.addEventListener("mouseover", () => {
  btn.style.backgroundColor = "red";
});*/
document.querySelector(".items-container").addEventListener("click", (e) => {
  const target = e.target;
  if (target.matches("li")) {
    target.style.backgroundColor = "green";
  }
});
