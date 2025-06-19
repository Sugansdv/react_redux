import { useState } from 'react'
import './App.css'
import Task from './components/Task';
import CounterErrorBoundary from './components/Project1/CounterErrorBoundary';
import UserErrorBoundary from './components/Project2/UserErrorBoundary';
import FormWithValidation from './components/Task12/Project3/FormWithValidation';
import JokeGenerator from './components/Project4/JokeGenerator';

function App() {

  return (
    <>
    <div className="header">
    <div className="header-left">Suganya S</div>
    <div className="header-right">Day 23 Task</div>
  </div>

       <Task />  <br /><hr />
       <CounterErrorBoundary />  <br /><hr />
       <UserErrorBoundary />  <br /><hr />
       <FormWithValidation />  <br /><hr />
       <JokeGenerator />  <br /><hr />
      
    </>
  )
}

export default App
