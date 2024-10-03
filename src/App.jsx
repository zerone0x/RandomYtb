import "./App.css";
import RandomYouTubePlayer from "./components/RandomYouTubePlayer";
import { useState } from "react";

function App() {
  const [channel, setChannel] = useState("curb");
  const [range, setRange] = useState("all");
  return (
    <div className="App">
      <div className="button-container">
        <button
          onClick={() => {
            setChannel("luke");
            setRange("all");
          }}
          className={channel === "luke" ? "tab-active" : ""}
          disabled={channel === "luke"}
        >
          Luke
        </button>
        <button
          onClick={() => {
            setChannel("curb");
            setRange("all");
          }}
          className={channel === "curb" ? "tab-active" : ""}
          disabled={channel === "curb"}
        >
          Curb
        </button>
      </div>
      <RandomYouTubePlayer
        channel={channel}
        setRange={setRange}
        range={range}
      />
    </div>
  );
}

export default App;
