import React, { useState, useEffect } from "react";
import "../App.css";
import { lukeIds, curbIds } from "../utils/data";

// const apiKey = '';
// const channelId = 'UCQZDGOgQ6usflGv1g8Jlf0w';
// function fetchVideoIds(channelId, apiKey) {
//   return fetch(`https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=100`)
//     .then(response => response.json())
//     .then(data => data.items.map(item => item.id.videoId))
//     .then(data =>console.log(data));
// }

function getRandomVideoId(videoIds) {
  return videoIds[Math.floor(Math.random() * videoIds.length)];
}

function RandomYouTubePlayer({ channel }) {
  const [videoId, setVideoId] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setVideoId(getRandomVideoId(channel === "luke" ? lukeIds : curbIds));
  };

  useEffect(() => {
    // Fetch videos from the channel
    // fetchVideoIds(channelId, apiKey)
    setIsLoading(true);
    setVideoId(getRandomVideoId(channel === "luke" ? lukeIds : curbIds));
    setIsLoading(false);
  }, [channel]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <section className="video-container">
      <iframe
        title={channel === "luke" ? "Luke smith" : "Curb"}
        src={`https://www.youtube.com/embed/${videoId}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
      <button onClick={handleClick}>🎲</button>
    </section>
  );
}

export default RandomYouTubePlayer;
