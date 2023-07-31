let weather = {
  paris: {
    temp: 19.7,
    humidity: 80
  },
  tokyo: {
    temp: 17.3,
    humidity: 50
  },
  lisbon: {
    temp: 30.2,
    humidity: 20
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100
  },
  Paris: {
    tempCel: 18.5,
    tempFarh: 65.5,
    humidity: 20
  }
};

const date = new Date();
const setDate = document.querySelector(".date");
setDate.textContent = date.toDateString();

function celsiusToFahrenheit(num) {
  let fahrenheit = (num * 9) / 5 + 32;
  return fahrenheit;
}

function fahrenheitToCelsius(num) {
  let celsius = ((num - 32) * 5) / 9;
  return celsius;
}

const number = document.querySelector(".num");
const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");

btn1.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(number.textContent);
  const newNum = celsiusToFahrenheit(number.textContent);
  number.textContent = newNum;
});

btn2.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(number.textContent);
  const newNum = fahrenheitToCelsius(number.textContent);
  number.textContent = newNum;
});

// let name = "Paris";
// let city = prompt("Enter a city");
// if (city === name) {
//   alert(
//     `It is currently ${Math.round(weather.Paris.tempCel)}°C (${Math.round(
//       weather.Paris.tempFarh
//     )}°F)in ${city} with a humidity of ${weather.Paris.humidity}%`
//   );
// }
// if (city !== name) {
//   alert(
//     "Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+" +
//       city
//   );
// }
