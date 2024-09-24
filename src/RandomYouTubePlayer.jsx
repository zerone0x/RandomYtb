import React, { useState, useEffect } from 'react';
import './App.css';


function fetchVideoIds(channelId, apiKey) {
  return fetch(`https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=20`)
    .then(response => response.json())
    .then(data => data.items.map(item => item.id.videoId));
}

function getRandomVideoId(videoIds) {
  return videoIds[Math.floor(Math.random() * videoIds.length)];
}

function fetchVideoAndGetRandomId(channelId, apiKey) {
  return fetchVideoIds(channelId, apiKey)
    .then(videoIds => getRandomVideoId(videoIds));
}

function RandomYouTubePlayer({ channelId, apiKey }) {
  const [videoId, setVideoId] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
      setIsLoading(true)
      fetchVideoAndGetRandomId(channelId, apiKey)
      .then(randomVideoId => {
        setVideoId(randomVideoId);
        setIsLoading(false)
      })
      .catch(error => console.error('Error fetching video IDs:', error));
  };

  useEffect(() => {
    // Fetch videos from the channel
    setIsLoading(true)
    fetchVideoAndGetRandomId(channelId, apiKey)
      .then(randomVideoId => {
        setVideoId(randomVideoId);
        setIsLoading(false)
      })
      .catch(error => console.error('Error fetching video IDs:', error));
  }, [channelId, apiKey]);

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
