// // let h1=document.querySelector("hii")
// let h1 = document.getElementsByClassName("Om");
// console.log(h1[0].innerText);
// let input = prompt("Enter your name")
// h1.innerText ="Name"+" "+input;
// // h1[0].style.color='red'
// // h1[1].style.color = 'red'
// for (let a of h1) {
//   a.style.color = "red";
// }

// console.log(h1, "hogyaaaaa.....");


// let h1 = document.querySelector("hii")

// let p = document.querySelector("p")
// p.innerText="Hello"
// h1.innerText = "This is a heading"


let inp = document.querySelector("input")
let h2 = document.querySelector("h2")
let btn = document.querySelector("button");
console.log(btn,"hyhhyhy");


btn.addEventListener("click", function () {
console.log("Hello");
  let.data = inp.value
  h2.innerText = data
  inp.value=""
  
})

// inp.addEventListener("input", function (e){
// h2.innerText=e.target.value
// })
