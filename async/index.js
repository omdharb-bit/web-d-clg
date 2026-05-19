// // let h2 = document.querySelector("h2");
// // fetch("https://jsonplaceholder.typicode.com/photos")
// //   .then((data) => {
// //     return data.json();
// //   })
// //   .then((val) => {
// //     console.log(val);
// //     // h2.innerText = val[1].title
// //     val.forEach((item) => {
// //       console.log(item);

// //       h2.innerHTML += item.title + "<br><br>";
// //     });
// //   })
// //   .catch((err) => {
// //     console.log(err);
// //   });

// // const arr = [
// //   "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600",
// //   "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=600",
// //   "https://images.unsplash.com/photo-1516117172878-fd2c41f4a759?w=600",
// //  ];

// // const imageEl = document.querySelector("img");

// // let num = 0;

// // setInterval(function () {
// //   imageEl.setAttribute("src", arr[num]);
// //   num = (num + 1) % arr.length;
// // }, 2000);

// // setTimeout(() => {
// //   console.log("c");

// // },10);
// // setTimeout(() => {
// //   console.log("b");
// // },0);

// // setTimeout(() => {
// //   console.log("a");

// // },);

// function step1(fn) {
//   setTimeout(() => {
//     console.log("select3ddddd");
//     fn();
//   }, 5000);
// }
// function step2(fn) {
//   setTimeout(() => {
//     console.log("filterrrrrr");
//     fn();
//   }, 4000);
// }
// function step3(fn) {
//   setTimeout(() => {
//     console.log("storryyyyyyy");
//     fn();
//   }, 3000);
// }
// function step4(fn) {
//   setTimeout(() => {
//     console.log("donnnneeeeee");
//     fn();
//   }, 2000);
// }

// step1(function () {
//   step2(function () {
//     step3(function () {
//       step4();
//     });
//   });
// });



// Promiseee

let p = new Promise((res, rej) => {
  res()
  
})
p.then(() => {
console.log("hello");

}).catch((err) => {
console.log(err);

})