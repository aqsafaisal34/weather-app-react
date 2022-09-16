import axios from 'axios';
import {useState} from 'react';
import WeatherCard from "../weatherCard";
import './index.css';


let Home = () => {

  const [cityName, setCityName] = useState("");
  const [data, setData] = useState([]);


  let submitHandler = async (e) => {
      e.preventDefault();

      console.log("I am submit handler function");

      try {
          let response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=0336380060bfd5eb16732502b38f1fcb&units=metric`)

          console.log("response: ", response);

          setData(response.data.list)


      } catch (error) {
          console.log("error in api call: ", error);
      }

  }

  return (
    <div>
      <h1 id='Header'>Weather App</h1>
      <form onSubmit={submitHandler}>
    {/* City Name:  */}
    <label htmlFor="labelinput">City Name</label> <br />
    <input
     type="text" 
     required
     placeholder='Enter your city name'
     onChange={(e)=>{
        // console.log(e.target.value);
        setCityName(e.target.value);
     }}
     /> <br /> <br />
    <button type='submit'>Get Weather</button>
      </form>
    {
      data.map((eachForcast, index) => (

<WeatherCard
    key={index}
    date={eachForcast.dt_txt}
    temp={eachForcast.main.temp}
    min={eachForcast.main.temp_min}
    max={eachForcast.main.temp_max}
/>
))
}



</div>
);
}

export default Home;
