const target = "london"
async function fetchData(target) {
    //
    const url = `https://api.weatherapi.com/v1/current.json?key=417416ae8d3a4923a95192724253110&q=${target}&aqi=yes`
    const response = await fetch(url)
    console.log(response)
    const data = await response.json()
    console.log(data)
    document.getElementById("locationName").textContent = `Location: ${data.location.name}, ${data.location.country}`;
    document.getElementById("dateTime").textContent = `Date & Time: ${data.location.localtime}`;
    document.getElementById("weatherCondition").textContent = `Weather: ${data.current.condition.text}`;
    document.getElementById("temperature").textContent = `Temperature: ${data.current.temp_c} °C`;
}

// Attach button click event
const searchBtn = document.getElementById("searchBtn")
searchBtn.addEventListener("click", () => {
    const locationInput = document.getElementById("locationInput").value.trim()
    if (locationInput === "") {
        alert("Please enter a location!")
        return
    }
    fetchData(locationInput)
})

