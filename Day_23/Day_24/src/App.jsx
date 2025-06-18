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
       <Task />
       <CounterErrorBoundary />
       <UserErrorBoundary />
       <FormWithValidation />
       <JokeGenerator />
      
    </>
  )
}

export default App
