import "../App.css";
import RandomYouTubePlayer from "../components/RandomYouTubePlayer";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Theme from "../components/Theme";
import { debounce } from "../utils/util";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { setChannel } from "../features/channel/channelSlice";
import { channels } from "../utils/data";

function Home() {
  const dispatch = useDispatch();
  const [range, setRange] = useState("all");
  const ChosenChannel = useSelector(
    (state: { channel: { channel: string } }) => state.channel.channel,
  );
  return (
    <div className="Home">
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
          {channels.map((channel, index) => (
            <>
              <button
                onClick={() => {
                  dispatch(setChannel(channel.id));
                  setRange("all");
                }}
                className={ChosenChannel === channel.id ? "tab-active" : ""}
                disabled={ChosenChannel === channel.id}
                key={channel.id}
              >
                {channel.name}
              </button>
              {index !== channels.length - 1 && <span> 🕳️ </span>}
            </>
          ))}
        </div>
        <RandomYouTubePlayer setRange={setRange} range={range} />
      </>
      <footer className="footer">
        <span>
          issues? contact me:{" "}
          <a href="https://github.com/zerone0x/RandomYtb/issues">
            Github issues
          </a>
        </span>
      </footer>
      <Theme />
    </div>
  );
}

export default Home;
