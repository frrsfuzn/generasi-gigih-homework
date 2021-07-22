import "./App.css";
import data from "./all-sample";
import Playlist from "./components/playlist";
import React, { useState, useEffect } from "react";
console.table(data);
export default function App() {
  const [accessToken, setAccessToken] = useState("");
  const [tracks, setTracks] = useState([]);
  const [selectedTracks, setSelectedTracks] = useState([]);
  const [loading, setLoading] = useState(false);

  const SpotifyUrl = "https://accounts.spotify.com/";
  const clientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
  const scope = "playlist-modify-private";
  useEffect(() => {
    const hash = window.location.hash;
    const token = hash ? hash.split("=")[1].split("&")[0] : "";
    setAccessToken(token);
  }, []);

  function addTrack(uri) {
		console.log('Added ', uri)
    setSelectedTracks((prev) => [...prev, uri]);
  }

  function deleteTrack(uri) {
		console.log('Deleted ', uri)
    const indexTrack = selectedTracks.indexOf(uri);
    if (indexTrack > -1) {
      setSelectedTracks((prev) => prev.splice(indexTrack, 1));
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    const trackName = e.target[0].value;
    setLoading(true);
    if (trackName) {
      fetch(`https://api.spotify.com/v1/search?q=${trackName}&type=track`, {
        method: "GET",
        headers: {
          Authorization: "Bearer " + accessToken,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setLoading(false);
          setTracks(data.tracks.items);
        })
        .catch((err) => console.log(err));
    } else {
      alert("Please input track name");
    }
  }

  if (!accessToken) {
    return (
      <div className="container">
        <h1 style={{ color: "white" }}>Login with your Spotify Account</h1>
        <a
          className="elemenNeo btn"
          href={
            SpotifyUrl +
            "authorize?response_type=token&client_id=" +
            clientId +
            "&scope=" +
            scope +
            "&redirect_uri=" +
            window.location.origin
          }
        >
          Login
        </a>
      </div>
    );
  } else {
    return (
      <div className="container">
        <form onSubmit={handleSubmit}>
          <input id="searchBar" type="text" />
          <input
            className="elemenNeo btn"
            id="buttonSearch"
            type="submit"
            value="Search"
          />
        </form>
        {loading ? (
          <h1 style={{ color: "white" }}>Loading...</h1>
        ) : (
					// renderPlaylist
					<Playlist
            data={tracks}
            addTrack={addTrack}
            deleteTrack={deleteTrack}
						selectedTracks={selectedTracks}
          />
        )}
      </div>
    );
  }
}
