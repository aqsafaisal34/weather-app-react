import React from 'react';
import moment from 'moment';
import './index.css';

let WeatherCard = ({ date, temp, min, 
max }) => {
  return (
      <div className="card">

          <div> {moment(date).format("dddd ha")} </div>
          <h1> {temp}°C </h1>
          <div> {min}°C - {max}°C </div>
      </div>
  );
}

export default WeatherCard;
