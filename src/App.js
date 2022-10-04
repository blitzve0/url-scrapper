import React, { useState } from 'react'
import axios from 'axios'
import cheerio from 'cheerio'
import './App.css'

export default function App() {
  const [url, setUrl] = useState() // url to scrape
  const [name, setName] = useState(null) // name of the person
  const [photo, setPhoto] = useState(null) // photo of the person

  const getData = async () => {
    const { data } = await axios.get(`http://localhost:5000?query=${url}`)

    let $ = cheerio.load(data)

    // get name using selector .fs-headline2 which is used for username
    $('.fs-headline2').each(function (i, element) {
      console.log('element', $(this).text())
      setName($(this).text())
    })

    // get image using selector img which is used for profile image
    $('img').each(function (i, element) {
      i == 3 && setPhoto($(this).attr('src'))
    })
  }

  return (
    <div className="layout">
      <input placeholder="Enter URL of StackOverFlow User" onChange={e => setUrl(e.target.value)}></input>
      <button onClick={getData}>GET DATA</button>
      <h1>{name}</h1>
      {photo && <img alt="photo" style={{ width: '10vw', height: '10vw', borderRadius: '10px' }} src={photo} />}{' '}
    </div>
  )
}
