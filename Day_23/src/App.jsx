import React from 'react';
import QuoteGenerator from './features/quote/QuoteGenerator';
import UserList from './features/users/UserList';
import WeatherApp from './features/weather/WeatherApp';
import JokeGenerator from './features/jokes/JokeGenerator';
import Task1 from './components/Task1';
import Task2 from './components/Task2';
import Task3to13 from './components/Task3to13';
import Task9 from './components/Task9';
import './App.css';

function App() {
  return (
    <>
     <div className="header">
    <div className="header-left">Suganya S</div>
    <div className="header-right">Day 23 Task</div>
  </div>
    <div className="container mt-4">
      <Task1 /><br /><hr />
      <Task2 /><br /><hr />
      <Task3to13 /><br /><hr />
      <Task9 /><br /><hr />

      <QuoteGenerator /><br /><hr />
      <UserList /><br /><hr />
      <WeatherApp /><br /><hr />
      <JokeGenerator />
    </div>
    </>
  );
}

export default App;
