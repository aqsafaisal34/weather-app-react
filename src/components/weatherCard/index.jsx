import React from 'react';
import moment from 'moment';
import './index.css';

let WeatherCard = ({ date, temp, min, 
max }) => {
  return (
      <div className="card">

          <h1> {moment(date).format("dddd ha")} </h1>
          <h1> {temp}°C </h1>
          <h3> Min {min}°C - Max {max}°C </h3>
      </div>
  );
}

export default WeatherCard;
