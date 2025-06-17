import { useState } from 'react'
import './App.css'
import Task from './Components/Task';
import ProductList from './Components/Project1/ProductList';
import Cart from './Components/Project1/Cart';
import AddNote from './Components/Project2/AddNote';
import NoteList from './Components/Project2/NoteList';
import UserRegistration from './Components/Project3/UserRegistration';
import LikeDislike from './Components/Project4/LikeDislike';

function App() {

  return (
    <>
    <div className="header">
        <div className="header-left">Suganya S</div>
        <div className="header-right">Day 22 Task</div>
      </div>
      <Task /><br /><hr />
      <div className="container mt-5 p-4 border rounded w-50">
        <h4 className='my-4 text-center'>Mini Project 1: Shopping Cart </h4>
        <ProductList />
      <Cart />
      </div><br /><hr />
      <div className="container mt-5 p-4 border rounded w-50">
      <h2 className="text-center mb-4">Mini Project 2: Simple Note App</h2>
      <AddNote />
      <NoteList />
    </div><br /><hr />
     <div className="container mt-5 p-4 border rounded w-50">
      <h2 className="text-center mb-4">Mini Project 3: User Registration</h2>
      <UserRegistration />
    </div><br /><hr />
      <div className="container mt-5 p-4 border rounded w-50">
      <h2 className="text-center mb-4">Mini Project 4: Like/Dislike System</h2>
      <LikeDislike />
    </div>
    </>
  )
}

export default App
