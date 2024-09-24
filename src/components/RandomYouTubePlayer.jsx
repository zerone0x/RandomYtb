import React, { useState, useEffect } from 'react';
import '../App.css';
import { videoIds } from '../utils/data';

function getRandomVideoId() {
  return videoIds[Math.floor(Math.random() * videoIds.length)];
}

function RandomYouTubePlayer() {
  const [videoId, setVideoId] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
      setVideoId(getRandomVideoId())
  };

  useEffect(() => {
    // Fetch videos from the channel
    setIsLoading(true)
    setVideoId(getRandomVideoId())
    setIsLoading(false)
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <section className='video-container'>
        <iframe
        title={
          'Luke smith'
        }
        src={`https://www.youtube.com/embed/${videoId}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        />
      <button onClick={handleClick}>🎲</button>
    </section>
  );
}

export default RandomYouTubePlayer;
