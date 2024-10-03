import "../App.css";
import RandomYouTubePlayer from "../components/RandomYouTubePlayer";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Theme from "../components/Theme";
import { debounce } from "../utils/util";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Home() {
  const [channel, setChannel] = useState("curb");
  const [range, setRange] = useState("all");

  return (
    <div className="Home">
      {/* <ToastContainer /> */}
      <Theme />
      <Helmet>
        <title>Random YouTube Player</title>
        <meta
          name="description"
          content="Discover the Random YouTube Player of luke smith and curb your enthusiasm, offering a fun way to explore videos from all ranges. Enjoy a unique viewing experience!"
        />
        <meta
          name="keywords"
          content="luke smith, curb your enthusiasm, Random YouTube Player, YouTube player, video streaming, online video player, interactive video, random video selection, web application"
        />
        <meta property="og:title" content="Random YouTube Player" />
        <meta
          property="og:description"
          content="Discover the Ultimate Random YouTube Player"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://randomytb.vercel.app/" />
        <meta
          property="og:image"
          content="https://randomytb.vercel.app/emoji.png"
        />
        <meta property="og:site_name" content="Random YouTube Player" />
      </Helmet>
      <>
        <h1>Random YouTube Player</h1>
        <h2>Channels👇</h2>
        <div className="button-container">
          <button
            onClick={debounce(() => {
              setChannel("luke");
              setRange("all");
            }, 3000)}
            className={channel === "luke" ? "tab-active" : ""}
            disabled={channel === "luke"}
          >
            Luke
          </button>
          <button
            onClick={debounce(() => {
              setChannel("curb");
              setRange("all");
            }, 3000)}
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
      </>
      <div className="footer">
        <span>
          issues? contact me:{" "}
          <a href="https://github.com/zerone0x/RandomYtb/issues">
            Github issues
          </a>
        </span>
      </div>
    </div>
  );
}

export default Home;
