import React, { useState, useEffect } from "react";
import "../App.css";
import {
  lukeIds,
  curbIds,
  curbWorldIds,
  lukeChannelId,
  curbChannelId,
} from "../utils/data";

const apiKey = "";
const channelId = curbChannelId;
function fetchVideoIds(channelId, apiKey) {
  return fetch(
    `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=50&pageToken=CJADEAA`,
  )
    .then((response) => response.json())
    .then((data) => data.items.map((item) => item.id.videoId))
    .then((data) => console.log(data));
}
const larryIds = [...curbIds, ...curbWorldIds];
function getRandomVideoId(videoIds) {
  return videoIds[Math.floor(Math.random() * videoIds.length)];
}

function splitArrayIntoThreeParts(arr) {
  arr = arr.reverse();
  const n = arr.length;
  const size = Math.floor(n / 3);
  const remainder = n % 3;
  const parts = [];
  let start = 0;

  for (let i = 0; i < 3; i++) {
    const end = start + size + (i < remainder ? 1 : 0);
    parts.push(arr.slice(start, end));
    start = end;
  }

  return parts;
}

function RandomYouTubePlayer({ channel, setRange, range }) {
  const [videoId, setVideoId] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [parts, setParts] = useState([]);

  const handleClick = () => {
    setVideoId(getRandomVideoId(channel === "luke" ? lukeIds : larryIds));
    setRange("all");
  };
  const handleEarlier = () => {
    setVideoId(getRandomVideoId(parts[0]));
    setRange("earlier");
  };
  const handleMid = () => {
    setVideoId(getRandomVideoId(parts[1]));
    setRange("mid");
  };

  const handleLater = () => {
    const laterPart = parts[2];
    setVideoId(getRandomVideoId(laterPart));
    setRange("later");
  };

  useEffect(() => {
    // Fetch videos from the channel
    // fetchVideoIds(channelId, apiKey)
    setIsLoading(true);
    setParts(splitArrayIntoThreeParts(channel === "luke" ? lukeIds : larryIds));
    setVideoId(getRandomVideoId(channel === "luke" ? lukeIds : larryIds));
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
      <div className="btn-range-container">
        <button
          onClick={handleEarlier}
          className={range === "earlier" ? "tab-active" : ""}
        >
          Earlier
        </button>
        <button
          onClick={handleMid}
          className={range === "mid" ? "tab-active" : ""}
        >
          Mid
        </button>
        <button
          onClick={handleLater}
          className={range === "later" ? "tab-active" : ""}
        >
          Later
        </button>
      </div>
      <div className="random-btn-container">
        <span>All range👇</span>
        <button onClick={handleClick} className="spin-button">
          🎲
        </button>
      </div>
    </section>
  );
}

export default RandomYouTubePlayer;
