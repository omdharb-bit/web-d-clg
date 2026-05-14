let h2 = document.querySelector("h2");
fetch("https://jsonplaceholder.typicode.com/photos")
  .then((data) => {
    return data.json();
  })
  .then((val) => {
    console.log(val);
    // h2.innerText = val[1].title
    val.forEach((item) => {
      console.log(item);
      
      h2.innerHTML += item.title + "<br><br>";
    });
  })
  .catch((err) => {
    console.log(err);
  });
