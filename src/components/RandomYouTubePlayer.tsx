import React, { useState, useEffect } from "react";
import "../App.css";
import {
  channels,
  lukeChannelId,
  curbChannelId,
  StorrorChannelId,
  hubermanClipChannelId,
} from "../utils/data";
import { debounce } from "../utils/util";
import { useSelector } from "react-redux";
const apiKey = "";
const channelId = hubermanClipChannelId;
// function fetchVideoIds(channelId: string, apiKey: string) {
//   return fetch(
//     `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=50&pageToken=CDIQAA`,
//   )
//     .then((response) => response.json())
//     .then((data) => data.items.map((item: any) => item.id.videoId))
//     .then((data) => console.log(data));
// }
function getRandomVideoId(videoIds: string[]) {
  return videoIds[Math.floor(Math.random() * videoIds.length)];
}

function splitArrayIntoThreeParts(arr: string[]) {
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

function RandomYouTubePlayer({
  setRange,
  range,
}: {
  setRange: (range: string) => void;
  range: string;
}) {
  const channel = useSelector(
    (state: { channel: { channel: string } }) => state.channel.channel,
  );
  const [videoId, setVideoId] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [parts, setParts] = useState<string[][]>([]);

  const handleClick = () => {
    setVideoId(
      getRandomVideoId(
        channels?.find((item) => item.id === channel)?.ids ?? [],
      ),
    );
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
    setVideoId(getRandomVideoId(parts[2]));
    setRange("later");
  };

  useEffect(() => {
    // Fetch videos from the channel
    // fetchVideoIds(channelId, '')
    setIsLoading(true);
    setParts(
      splitArrayIntoThreeParts(
        channels?.find((item) => item.id === channel)?.ids ?? [],
      ),
    );
    setVideoId(
      getRandomVideoId(
        channels?.find((item) => item.id === channel)?.ids ?? [],
      ),
    );
    setIsLoading(false);
  }, [channel]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <section className="video-container">
      <iframe
        title={channel}
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
