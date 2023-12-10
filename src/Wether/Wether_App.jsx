import React, { useState } from 'react'
import './Wether_App.css'
import Search from '../Assert/search.png'
import Clear from '../Assert/Clear.png'
import Could from '../Assert/Could.png'
// import Drizzel from '../Assert/Drizzel.jpeg'
import Thunder from '../Assert/thunder.png'
import Humidy from '../Assert/humidy3.png'
import Rainy from '../Assert/rainy.jpeg'
import Snow from '../Assert/Snow.jpeg'
import Wind from '../Assert/Wind.jpeg'
import CouldsSun from '../Assert/CloudsSun.png'
import RainyN from '../Assert/RainyN.png'
import CouldN from '../Assert/CouldN.png'


function Wether_App() {
    const Api_Key="673e265ad1e2fea9a522a36b9987b4a8"//by use api key we can fetch the data from server
    //BY USe THunder Client Extenstion we can see response from the api
    const[Wind_Speed,setWind_Speed]=useState('15')
    const[Humidity,setHumidity]=useState('64')
    const[Temp,setTemp]=useState("24")
    const [Input,setInput]=useState("Londan")
    const[ICon,setICon]=useState(Clear)
    console.log(Thunder)
    const Search_Icon=async ()=>{
        let url=`https://api.openweathermap.org/data/2.5/weather?q=${Input}&units=Metric&appid=673e265ad1e2fea9a522a36b9987b4a8`
        let Data=await fetch(url)
        let response=await Data.json();
        await setHumidity(response.main.humidity )
       await setWind_Speed(response.wind.speed)
       await setTemp(response.main.temp)
    // image setting
      if(response.weather[0].icon==="01d" || response.weather[0].icon==="02d" ){
         await setICon(Clear)
      }
      else if(response.weather[0].icon==="01n" || response.weather[0].icon==="02n" || response.weather[0].icon==="03n" || response.weather[0].icon==="04n"){
        await setICon(CouldN)
      }
      else if(response.weather[0].icon==="03d" || response.weather[0].icon==="04d"){
        await setICon(Could)
      }
      else if(response.weather[0].icon==="09d" || response.weather[0].icon==="09n"){
        await setICon(CouldsSun)
      }
      else if(response.weather[0].icon==="10d" || response.weather[0].icon==="11n"){
        await setICon(Rainy)
      }
      else if(response.weather[0].icon==="10n" || response.weather[0].icon==="11n"){
        await setICon(Thunder)
      }
      else if(response.weather[0].icon==="13d" || response.weather[0].icon==="13n"){
        await setICon(Snow)
      }
      else if(response.weather[0].icon==="50d" || response.weather[0].icon==="50n"){
        await  setICon(Humidy)
      }
    
      

        
    }
    

  return (
   <>
      <div id='container'>
           <div className='search-icon'> 
                  <input type="text" className="input-class"  placeholder='Searc' onChange={(e)=>setInput(e.target.value)} />
                  <div className='Search-class'>  
                      <img src={Search} alt=""  width="30px"  onClick={()=>{Search_Icon()}} />
                  </div>
           </div>
           <div className='Wether-image'>
               <img src={`${ICon}`} alt="" width="110px" />
            </div>
            <div className='Temp'>{Temp}*C</div>
            <div className="Loc">{Input}</div>
            <div className='DataAdd'>
                <div className="Humdity">
                    <img src={Humidy} alt="" width="30px" />
                    <div className='data'>
                    <div className='Percen'>{Humidity}%</div>
                    <div className='Hum'>Humidity</div>
                    </div>
                </div>
                <div className="Humdity">
                    <img src={Wind} alt="" width="30px" />
                    <div className='data'>
                    <div className='Percen'>{Wind_Speed}Km/Hr</div>
                    <div className='Hum'>Wind Speed</div>
                    </div>
                </div>

            </div>
      </div>
   </>
  )
}

export default Wether_App