import  {tablo} from '../tabloAndClasses.js';


export function getAndPaintWether (cityName) {
   let key = "20631ac2d3ca1a158648dd1c8a3e141b";
   fetch('https://api.openweathermap.org/data/2.5/weather?q='+cityName+ '&appid=' + key+'&lang=ru')
   .then(function(resp) {
     return resp.json();  // Convert data to json
   })
   .then(function(data) {
     console.log('APIWetherIsRunning ');
     let wetherHTML =``;
       wetherHTML =  `
       <div>
       ${data.name}<br>
       температура:  ${Math.round(data.main.temp-273,0)}<br>
       по ощущениям: ${Math.round(data.main.feels_like-273,0)}<br>
       погода: ${data.weather[0].description}<br>
       скорость ветра: ${data.wind.speed} метров в секунду
       </div>`;
     tablo.drawer( wetherHTML, 'divWeather');
    // document.getElementById('divWeather').innerHTML=wetherHTML;
    // console.log('drowerComplete '+ 'divWeather');
     //return  wetherHTML;

   })
   .catch(function() {
     // alert('err');
     //catch any errors
   });
 }
