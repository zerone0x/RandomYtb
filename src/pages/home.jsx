import "../App.css";
import RandomYouTubePlayer from "../components/RandomYouTubePlayer";
import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { ThemeContext } from "../data/getTheme";
import { darkTheme, lightTheme } from "../utils/data";

function Home() {
  const { theme, setTheme } = useContext(ThemeContext);
  const [channel, setChannel] = useState("curb");
  const [range, setRange] = useState("all");

  useEffect(() => {
    const themeVariables = theme === "light" ? lightTheme : darkTheme;
    for (const key in themeVariables) {
      document.documentElement.style.setProperty(key, themeVariables[key]);
    }
  }, [theme]);
  return (
    <div className="Home">
      <button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="theme-toggle"
      >
        {theme === "light" ? "🌙" : "🌞"}
      </button>
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
