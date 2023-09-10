const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&appid=9d8d10317340de67f2f61256f13133ba&q=';
const searchvaule = document.getElementById('input')
const searchbtn = document.getElementById('button')
const image=document.getElementById('img')


async function weather(cityname) {
    const active = await fetch(apiUrl + cityname);

    if(active.status==404){
       document.getElementById('error').style.display="block"
       document.getElementById('secondbox').style.display = "none"
       window.alert("COUNTRY NAME IS INVALID")
    }
    else{
        document.getElementById('secondbox').style.display = "block"
        document.getElementById('error').style.display="none"
    }

    

    const data = await active.json()
    

    document.getElementById('city').innerHTML = data.name;
    document.getElementById('windspeed').innerHTML = data.wind.speed +"  Km/h";
    document.getElementById('humidity').innerHTML = data.main.humidity + "%";
    document.getElementById('degree').innerHTML = Math.round(data.main.temp) + "°C";
  
    if(data.weather[0].main=="Clouds"){
         image.src="./image/cloud.png"
         image.alt="cloud"
    }
    else if(data.weather[0].main=="Clear"){
         image.src="./image/clear.png"
         image.alt="Clear"
    }
    else if(data.weather[0].main=="Rain"){
         image.src="./image/rain.png"
         image.alt="Rain"
    }
    else if(data.weather[0].main=="Drizzle"){
         image.src="./image/Dizzle.png"
         image.alt="Drizzle"
    }
    else if(data.weather[0].main=="Mist"){
         image.src="./image/musk.png"
         image.alt="Mist"
    }
    
    console.log(data)
}


searchbtn.addEventListener("click", () => {
    weather(searchvaule.value);
})