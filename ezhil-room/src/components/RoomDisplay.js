import React from 'react';
import '../index.css'; // Assuming general styles are here

function RoomDisplay({ roomName, temperature, humidity }) {
  return (
    <div className="room-container">
      <h2>{roomName}</h2>
      <p>Temperature: {temperature}°C</p>
      <p>Humidity: {humidity}%</p>
    </div>
  );
}

export default RoomDisplay;