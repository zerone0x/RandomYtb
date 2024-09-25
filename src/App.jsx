import "./App.css";
import RandomYouTubePlayer from "./components/RandomYouTubePlayer";
import { useState } from "react";

function App() {
  const [channel, setChannel] = useState("curb");

  return (
    <div className="App">
      <div className="button-container">
        <button
          onClick={() => setChannel("luke")}
          disabled={channel === "luke"}
        >
          Luke
        </button>
        <button
          onClick={() => setChannel("curb")}
          disabled={channel === "curb"}
        >
          Curb
        </button>
      </div>
      <RandomYouTubePlayer channel={channel} />
    </div>
  );
}

export default App;
