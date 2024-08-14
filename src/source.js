function setTime() {
  let dateLondon = moment().tz("Europe/London").format("DD MMMM YYYY");
  let timeLondon = moment().tz("Europe/London").format("hh:mm:ss");
  let dayPartLondon = moment().tz("Europe/London").format("A");

  let dateMumbai = moment().tz("Asia/Kolkata").format("DD MMMM YYYY");
  let timeMumbai = moment().tz("Asia/Kolkata").format("hh:mm:ss");
  let dayPartMumbai = moment().tz("Asia/Kolkata").format("A");

  let dateTokyo = moment().tz("Asia/Tokyo").format("DD MMMM YYYY");
  let timeTokyo = moment().tz("Asia/Tokyo").format("hh:mm:ss");
  let dayPartTokyo = moment().tz("Asia/Tokyo").format("A");

  let dateNewYork = moment().tz("America/New_York").format("DD MMMM YYYY");
  let timeNewYork = moment().tz("America/New_York").format("hh:mm:ss");
  let dayPartNewYork = moment().tz("America/New_York").format("A");

  let dateLosAngeles = moment()
    .tz("America/Los_Angeles")
    .format("DD MMMM YYYY");
  let timeLosAngeles = moment().tz("America/Los_Angeles").format("hh:mm:ss");
  let dayPartLosAngeles = moment().tz("America/Los_Angeles").format("A");

  let localTimezone = moment.tz.guess();
  let dateLocal = moment().tz(`${localTimezone}`).format("DD MMMM YYYY");
  let timeLocal = moment().tz(`${localTimezone}`).format("hh:mm:ss");
  let dayPartLocal = moment().tz(`${localTimezone}`).format("A");

  let dateElement = document.querySelector(".date");
  let timeElement = document.querySelector(".time");
  let dayPartElement = document.querySelector(".day-part");

  dateElement.innerHTML = dateLondon;
  timeElement.innerHTML = timeLondon;
  dayPartElement.innerHTML = dayPartLondon;
}
setTime();
setInterval(setTime, 1000);
