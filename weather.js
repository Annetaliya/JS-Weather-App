const apiKey = '499e45df07363bee264e8ffab27e7191';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?&units=metric&q=';

const searchBox  = document.querySelector('.search input')
const searchBtn  = document.querySelector('.search button')
const weatherIcon = document.querySelector('.weather-icon')
const checkWeather = async (city) => {
    try {
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`)
        const results = await response.json();
        console.log(results);
        document.querySelector('.city').innerHTML = results.name;
        document.querySelector('.temp').innerHTML = Math.round(results.main.temp)  + '°C';
        document.querySelector('.humidity').innerHTML = results.main.humidity + '%';
        document.querySelector('.wind').innerHTML = results.wind.speed + ' km/h';

        if (results.weather[0].main == 'Clouds') {
            weatherIcon.src = 'Images/cloudy and sunny.png'

        }
        else if (results.weather[0].main == 'Clear') {
            weatherIcon.src = 'Images/sunny.png';
        }
        else if (results.weather[0].main == 'Rain') {
            weatherIcon.src = 'Images/rainny.png';
        }
        else if (results.weather[0].main == 'Drizzle') {
            weatherIcon.src = 'Images/drizzle.png'
        }

        document.querySelector('.weather').style.display = 'block'
         document.querySelector('.error').style.display = 'none'


        
        

    } catch (error) {
        document.querySelector('.error').style.display = 'block'
        document.querySelector('.weather').style.display = 'none'
        console.log(error)

    }
}
searchBtn.addEventListener('click', () => {
    checkWeather(searchBox.value)
})
