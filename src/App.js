
import './App.css';
import { useAuth0 } from '@auth0/auth0-react'
import React, { useState } from 'react';
function App() {
  const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0();
  console.log("Current User", user)

  
  return (
    <div className="App">
      <div className="home">

        <nav>
          <ul>
            <li><a href="#Home">Home</a></li>
            <li><a href="#About">About</a></li>
            <li><a href="#Service">Service</a></li>
            <li><a href="https://lakhanrajaportfolioweb.netlify.app/">Personal</a></li>
            <li><a href="#Messages">Messages</a></li>
            <h4> User Authentication System</h4>

          </ul>
        </nav>
      </div>
      <header className="App-header">
        <div className="my-container">
          <h2> Hi,✋This is MERN Stack Developer</h2>
          <h3> <marquee> This is a Awesome project for the Affworld Technologies...!</marquee></h3>

        </div>
        {isAuthenticated && <h1> Welcome To The Affworld Technologies Internship Assignment:

          Full Stack Development (MERN)   {user.name} </h1>

        }
        {
          isAuthenticated ? <button onClick={(e) => logout()}> Logout </button> : (

            <button onClick={(e) => loginWithRedirect()}>

              Login Here </button>

          )}
      </header>
    </div>
  );
}
export default App;
