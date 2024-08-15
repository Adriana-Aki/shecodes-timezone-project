function setTime(event) {
  let timeZoneLondon = "Europe/London";
  let timeZoneMumbai = "Asia/Kolkata";
  let timeZoneTokyo = "Asia/Tokyo";
  let timeZoneNewYork = "America/New_York";
  let timeZoneLosAngeles = "America/Los_Angeles";

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
  let dateCity = moment().tz(`${timeZone}`).format("DD MMMM YYYY");
  let timeCity = moment().tz(`${timeZone}`).format("hh:mm:ss");
  let dayPartCity = moment().tz(`${timeZone}`).format("A");
  console.log(city);
  console.log(timeCity);
  console.log(timeCity);

  let cityElement = document.querySelector(".city");
  let dateElement = document.querySelector(".date");
  let timeElement = document.querySelector(".time");
  let dayPartElement = document.querySelector(".day-part");

  cityElement.innerHTML = city;
  dateElement.innerHTML = dateCity;
  timeElement.innerHTML = timeCity;
  dayPartElement.innerHTML = dayPartCity;
}

let citySelect = document.querySelector("#cities");
console.log(citySelect);
citySelect.addEventListener("change", setTime);

updateCity("Europe/London", "London");

setInterval(function () {
  updateCity("Europe/London", "London");
}, 1000);
