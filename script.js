let cityInput = document.querySelector(".form-control");
const search = document.querySelector(".btn");
const info = document.querySelector(".info");
const city = document.querySelector(".city")
const temp = document.querySelector(".temp")
const icon = document.querySelector(".icon")
const desc = document.querySelector(".desc")

let getData = async () => {
    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=29297b20913dd12a5ad22c91fcbda1ba`)
    let data = await response.json();
    setData(data);
    cityInput.value = ""
}

let setData = (data) => {
    info.classList.add("p-3")
    city.innerHTML = `${data.name},  <strong>${data.sys.country}</strong>`
    temp.innerText = `${Math.round(data.main.temp - 273.15)}°C`
    let weatherIcon = document.createElement("img")
    weatherIcon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    icon.innerHTML = ""
    icon.appendChild(weatherIcon)
    desc.innerText = `${data.weather[0].description}`
}

search.addEventListener("click", getData);

