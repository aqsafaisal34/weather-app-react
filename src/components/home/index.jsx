import axios from 'axios';
import {useState} from 'react';
import weatherCard from "./../weathercard";

function Home() {
    const [cityName,setCityName] = useState("");
    const [data, setData] = useState([]);


    let submitHandler = async (e)=>{
    e.preventDefault();
    console.log("I am submit Handler function");
    try{
    let response = await axios.get(`api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=0336380060bfd5eb16732502b38f1fcb=metric`)
    console.log("response: ", response);

    
    setData(response.data.list)

   } catch(error){
    console.log("error in api call:", error);
   }
   
    

    }
  return (
    <div>
      <h1>Weather App Home</h1>
      <form onSubmit={submitHandler}>
    City Name: 
    <input
     type="text" 
     required
     placeholder='Enter your city name'
     onChange={(e)=>{
        // console.log(e.target.value);
        setCityName(e.target.value);
     }}
     />
    <button type='submit'>Get Weather</button>
      </form>
    {
      data.map((eachForcast, index) => (

<weatherCard
    key={index}
    date={eachForcast.dt_txt}
    temp={eachForcast.main.temp}
    min={eachForcast.main.temp_min}
    max={eachForcast.main.temp_max}
/>
))
}
    </div>
  )
}

export default Home;
