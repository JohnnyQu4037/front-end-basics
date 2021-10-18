const url = "http://api.openweathermap.org/data/2.5/weather?appid=2460929f7ad06dec678f6e076ed14c0a&units=metric&q="
const weatherLogoURL = "http://openweathermap.org/img/wn/"
const resultEle = document.getElementById("result")

//prevent the default submit mechanism and empty the result div.
document.getElementById("city").onsubmit = function(e) {
    e.preventDefault();
    resultEle.innerHTML = ""
};

//when the button is clicked for submition, the weather Handler will take in the city from the input.
document.addEventListener("submit",(e)=>{weatherHandler(e.target[0].value.toLowerCase())})

//weather Handler gets the weather data from API through getWeather function as a promise object.
//if the promise is resolved, the temperature and weather info will be retrieved and displayed.
//the weather icon id will be used to set up a new image that represents the current weather
function weatherHandler(cityName){
    getWeather(cityName).then((result)=>{
        const tempInfo = document.createElement("h1")
        const weatherText = document.createElement("p")
        tempInfo.innerHTML = "The current temperature in "+cityName+" is "+result.main.temp+" degrees Celcius"
        weatherText.innerHTML = "The weather is " + result.weather[0].description
        resultEle.appendChild(tempInfo)
        resultEle.appendChild(weatherText)
        return result.weather[0].icon
    }).then((weatherIcon)=>{
         return new Promise(function(resolve, reject) {
            const img = new Image()
        
            img.onload = function() {
              resolve(img);
            }
        
            img.onerror = function() {
              reject(new Error('Could not load image'));
            }
            img.src = weatherLogoURL+weatherIcon+"@4x.png";
            resultEle.appendChild(img)
          })

    }).catch(error=>resultEle.innerHTML = "City not found, please check the spelling and try again")
}

//getWeather function creates a promise object and check the state and status.
//if the conection is successfully established, the resonse will be return as a resolved promise object.
//otherwise the rejected error will be returned.
const getWeather = function(cityName) {
    const promise = new Promise(function(resolve, reject){
        const handler = function() {
          if (this.readyState !== 4) {
            return;
          }
          if (this.status === 200) {
            resolve(this.response);
          } else {
            reject(new Error(this.statusText));
          }
        };
        const XHR = new XMLHttpRequest();
        XHR.open("GET", url+cityName);
        XHR.onreadystatechange = handler;
        XHR.responseType = "json";
        XHR.send();
  
    });
  
    return promise;
};
