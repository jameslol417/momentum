const API_KEY = "fb542064942c025f38c2334da28a587f";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${Math.floor(
        parseInt(data.main.temp)
      )} °C`;
    });
}

function onGeoError() {
  alert("Location Blocked. Weather Services Disabled.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
