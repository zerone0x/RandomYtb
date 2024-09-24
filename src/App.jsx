import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import RandomYouTubePlayer from './RandomYouTubePlayer'

function App() {

  return (
    <div className='App'>
    <RandomYouTubePlayer channelId="UC2eYFnH61tmytImy1mTYvhA" apiKey="AIzaSyA1EhVH4I5HWDl-JE73xNUsR6OHZHZt9m8" />
    </div>
  )
}

export default App
