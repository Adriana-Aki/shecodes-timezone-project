function setTime(event) {
  let selectedItem = event.target.value;
  console.log(selectedItem);
  if (selectedItem.length > 0) {
    switch (selectedItem) {
      case "current-location":
        let localTimezone = moment.tz.guess();
        updateCity(localTimezone, "Current Location");
        break;
      case "london":
        updateCity("Europe/London", "London");
        break;
      case "tokyo":
        updateCity("Asia/Tokyo", "Tokyo");
        break;
      case "losAngeles":
        updateCity("America/Los_Angeles", "Los Angeles");
        break;
      case "newYork":
        updateCity("America/New_York", "New York");
        break;
      case "mumbai":
        updateCity("Asia/Kolkata", "Mumbai");
        break;
      default:
        break;
    }
  }
  console.log();
}

function updateCity(timeZone, city) {
  console.log(timeZone);
  console.log(city);
  let dateCity = moment().tz(`${timeZone}`).format("DD MMMM YYYY");
  let timeCity = moment().tz(`${timeZone}`).format("hh:mm:ss");
  let dayPartCity = moment().tz(`${timeZone}`).format("A");
  console.log(city);
  console.log(timeCity);
  console.log(timeCity);

  let citiesElement = document.querySelector("#clock");
  console.log(citiesElement);
  citiesElement.innerHTML = `
  <div class="cityclock">
          <div class="city/date">
            <div class="city">${city}</div>
            <div class="date">${dateCity}</div>
          </div>
          <div class="current-time">
            <span class="time">${timeCity}</span> <span class="day-part">${dayPartCity}</span>
          </div>
        </div>
  <a href="/" class="home">All cities</a>
  `;
  console.log(citiesElement);

  // let cityElement = document.querySelector(".city");
  // let dateElement = document.querySelector(".date");
  //let timeElement = document.querySelector(".time");
  //let dayPartElement = document.querySelector(".day-part");

  //cityElement.innerHTML = city;
  //dateElement.innerHTML = dateCity;
  // timeElement.innerHTML = timeCity;
  // dayPartElement.innerHTML = dayPartCity;
}

function updateDefaultCity() {
  let losAngelesElement = document.querySelector("#los-angeles");
  if (losAngelesElement) {
    let losAngelesDateElement = losAngelesElement.querySelector(".date");
    let losAngelesTimeElement = losAngelesElement.querySelector(".time");
    let losAngelesDayPartElement = losAngelesElement.querySelector(".day-part");
    let losAngelesTime = moment().tz("America/Los_Angeles");

    losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM	Do YYYY");
    losAngelesTimeElement.innerHTML = losAngelesTime.format("hh:mm:ss");
    losAngelesDayPartElement.innerHTML = losAngelesTime.format("A");
  }
  // Paris
  let parisElement = document.querySelector("#paris");
  if (parisElement) {
    let parisDateElement = parisElement.querySelector(".date");
    let parisTimeElement = parisElement.querySelector(".time");
    let parisDayPartElement = parisElement.querySelector(".day-part");
    let parisTime = moment().tz("Europe/Paris");

    parisDateElement.innerHTML = parisTime.format("MMMM	Do YYYY");
    parisTimeElement.innerHTML = parisTime.format("hh:mm:ss");
    parisDayPartElement.innerHTML = parisTime.format("A");
  }
}

updateDefaultCity();
setInterval(updateDefaultCity, 1000);

let citySelect = document.querySelector("#cities");
console.log(citySelect);
citySelect.addEventListener("change", setTime);

let citiesElement = document.querySelector("#clock");
console.log(citiesElement);
