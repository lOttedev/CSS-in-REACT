import React from 'react';
import logo from './assets/images/lotte-illus.png'
import './style.scss';
import './App.css'

function App() {


  return (

    <>

    <div className='Card'>

      <div className='Presentation'>
        <h1>lOtte</h1>
        <h3>Web Designer</h3>
        <p> Création de site web et d illustration</p>
      </div>

      <div className='Logo'>
        <img src={logo} alt="logo_lotte"></img>
      </div>
    </div>

    <div className="rating">
        <input type="radio" id="star5" name="rate" value="5"/>
          <label for="star5" title="text"></label>
        <input type="radio" id="star4" name="rate" value="4"/>
          <label for="star4" title="text"></label>
        <input checked="" type="radio" id="star3" name="rate" value="3"/>
          <label for="star3" title="text"></label>
        <input type="radio" id="star2" name="rate" value="2"/>
          <label for="star2" title="text"></label>
        <input type="radio" id="star1" name="rate" value="1"/>
            <label for="star1" title="text"> </label>
            <p>Rate Me </p>
    </div>
    </>
  )
}

export default App
