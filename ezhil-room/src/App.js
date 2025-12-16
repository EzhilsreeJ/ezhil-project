import React, { useState, useEffect } from 'react';
import RoomDisplay from './components/RoomDisplay';
import './index.css';
import logo from './assets/logo.svg';

function App() {
  const [roomData, setRoomData] = useState({
    roomName: 'Living Room',
    temperature: 22,
    humidity: 45,
  });

  // In a real application, you would fetch this data from an API
  useEffect(() => {
    // Simulate fetching data
    const intervalId = setInterval(() => {
      setRoomData(prevData => ({
        ...prevData,
        temperature: prevData.temperature + (Math.random() * 2 - 1), // Slight random variation
        humidity: prevData.humidity + (Math.random() * 2 - 1),     // Slight random variation
      }));
    }, 5000); // Update every 5 seconds

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Ezhil Room</h1>
      </header>
      <main>
        <RoomDisplay
          roomName={roomData.roomName}
          temperature={roomData.temperature.toFixed(1)}
          humidity={roomData.humidity.toFixed(1)}
        />
        {/* Add more RoomDisplay components if managing multiple rooms */}
      </main>
    </div>
  );
}

export default App;