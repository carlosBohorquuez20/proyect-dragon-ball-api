import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import axios from 'axios'
import './App.css'

function App() {

  const [character, setCharacter] = useState({});

  const indexRandom = (Math.floor(Math.random() * 128));
  useEffect(() => {
    axios
      .get("https://dragon-ball-super-api.herokuapp.com/api/characters")
      .then((res) => setCharacter(res.data[indexRandom]))
  }, []);

  const nextButton = (() => {

    const indexRandom = (Math.floor(Math.random() * 128));
    axios
      .get("https://dragon-ball-super-api.herokuapp.com/api/characters")
      .then((res) => setCharacter(res.data[indexRandom]))


  })

  console.log(character);
  return (
    <div className="App">
      <div className="card-box">
        <div className='name-character'>
          <div className='icon-right'>
            <img className='img-icon' src="https://www.seekpng.com/png/full/127-1271955_anime-icon-goku-dragon-ball-z-symbol.png" alt="" />
          </div>
          <h2>{character.name}</h2>
          <div className='icon-left'>
            <img className='img-icon' src="https://www.seekpng.com/png/full/127-1271955_anime-icon-goku-dragon-ball-z-symbol.png" alt="" />
          </div>
        </div>
        <div className='character-content'>
          <div className='left-content'>
            <img className='character-img' src={character.imageUrl} alt="" />
          </div>
          <div className='right-content'>
            <div className='content-detail'>
              <div className='title-details'>
                <h4>Character details</h4>
              </div>
              <div className='details'>
                <p>Origin planet {":"} {character.originplanet}</p>
                <p>Role  {":"} {character.role}</p>
                <p>Specie {":"} {character.specie}</p>
                <p>Status {":"} {character.status}</p>
                <p>Universe {":"} {character.universe}</p>
              </div>
              <div className='btn-next'>
                <button className='btn' onClick={nextButton}><i className="fa-solid fa-circle-arrow-right icon-next"></i></button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
