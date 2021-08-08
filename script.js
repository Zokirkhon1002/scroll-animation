let body = document.querySelector("body");
let boxes = document.querySelectorAll(".box");


window.addEventListener('scroll', checkBoxes)

checkBoxes();

function checkBoxes() {
    const pastgaTushirish = window.innerHeight / 5 * 4;
    boxes.forEach(item=>{
        const boxTop = item.getBoundingClientRect().top;
        if(boxTop < pastgaTushirish) {
            item.classList.add('show')
        } else {
            item.classList.remove('show')
        }
    })
}


// setInterval(()=>{
//     var random1 = Math.round(Math.random()*255);
//     var random2 = Math.round(Math.random()*255);
//     var random3 = Math.round(Math.random()*255);
// function backgroundChanger(){
//     body.style.backgroundColor = `rgb(${random1}, ${random2}, ${random3})`;
// }
// backgroundChanger()
// }, 800)






