const licollection = document.getElementsByTagName('li')
console.log(licollection)
for (const li of licollection){
    console.log(li.innerText);
}

const allheadings = document.getElementsByTagName('h1');
for (const head of allheadings){
    console.log(head.innerText)
}