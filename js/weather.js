const API_KEY =  "cec4cfc9ffb48cf634bc95710e985d95";

function onGeoOk(position){
   const lat = position.coords.latitude;
   const lon = position.coords.longitude;
   
   const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
   fetch(url).then( response => response.json()).then(data => {
       //console.log(data.name, data.weather[0].main);
       const weather = document.querySelector("#weather span:first-child")
       const city = document.querySelector("#weather span:last-child");
       weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
       city.innerText = data.name;
   });
}

function onGeoError(){
    alert("can't find you. no weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

