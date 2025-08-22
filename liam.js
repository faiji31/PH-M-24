// const sections = document.getElementsByTagName("section");
const sections = document.querySelectorAll("section");
// console.log(sections);
for (const i of sections){
    console.log(i);
    i.style.backgroundColor = "lightGreen";
    i.style.border = "3px solid black";
    i.style.padding = "20px";
}