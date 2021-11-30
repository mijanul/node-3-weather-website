console.log("Client side javascript file is loaded");

const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
const messageOne = document.querySelector("#message-1");
const messageTwo = document.querySelector("#message-2");

// search.addEventListener("input", (e) => {
//   e.preventDefault();
//   if (!search.value) {
//     messageOne.textContent = "";
//     messageTwo.textContent = "";
//   }
// });

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const location = search.value;
  if (!location) {
    return console.log("You must provide an address !");
  }
  messageOne.textContent = "Locading...";
  messageTwo.textContent = "";
  fetch("http://localhost:3000/weather?address=" + location).then(
    (response) => {
      response.json().then((data) => {
        if (data.error) {
          messageOne.textContent = data.error;
        } else {
          messageOne.textContent = data.location;
          messageTwo.textContent = data.forecast;
        }
      });
    }
  );
});
