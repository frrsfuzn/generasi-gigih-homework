import "./App.css";
import Playlist from "./components/playlist";
import ProfileHeader from "./components/profileHeader";
import FormCreatePlaylist from "./components/formCreatePlaylist";
import SearchBar from './components/searchBar';
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { storeToken } from './features/token/tokenSlice'

export default function App() {
  const [tracks, setTracks] = useState([]);
  const [selectedTracks, setSelectedTracks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [userProfile, setUserProfile] = useState({});

	const accessToken = useSelector((state) => state.token.value)
	const dispatch = useDispatch()

  const SpotifyUrl = "https://accounts.spotify.com/";
  const clientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
  const scope = "playlist-modify-private";
  useEffect(() => {
    const hash = window.location.hash;
    const token = hash ? hash.split("=")[1].split("&")[0] : "";
		dispatch(storeToken(token))
    fetchUserProfile(token);
  }, [dispatch]);

  function addTrack(uri) {
    console.log("Added ", uri);
    setSelectedTracks((prev) => [...prev, uri]);
  }

  function deleteTrack(uri) {
    console.log("Deleted ", uri);
    setSelectedTracks(selectedTracks.filter((item) => item !== uri));
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

  function handleCreatePlaylist(e) {
    e.preventDefault();
    if (selectedTracks.length === 0) {
      alert("Please select one or more song");
      return;
    }
    const playlistName = e.target[0].value;
    const playlistDescription = e.target[1].value;
		createPlaylist(userProfile, accessToken, playlistName, playlistDescription)
		.then( data => {
			console.log(data)
			addTracksToPlaylist(data.id, accessToken, selectedTracks)});
	}

	function createPlaylist(userProfile, accessToken, playlistName, playlistDescription){
		return fetch(`https://api.spotify.com/v1/users/${userProfile.id}/playlists`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + accessToken,
      },
      body: JSON.stringify({
        name: playlistName,
        description: playlistDescription,
        public: false,
        collaborative: false,
      }),
    }).then(res => res.json())
		.then(data => data)
	}

	function addTracksToPlaylist(idPlaylist, accessToken ,selectedTracks){
		return fetch(
			`https://api.spotify.com/v1/playlists/${idPlaylist}/tracks?uris=${selectedTracks.join(
				","
			)}`,
			{
				method: "POST",
				headers: {
					Authorization: "Bearer " + accessToken,
				},
			}
		)
			.then((res) => res.json())
			.then((data) => {
				if ("snapshot_id" in data) alert("Playlist Created");
			});
	}

  function fetchUserProfile(token) {
    if (token) {
      fetch(`https://api.spotify.com/v1/me`, {
        method: "GET",
        headers: {
          Authorization: "Bearer " + token,
        },
      })
        .then((res) => res.json())
        .then((data) => setUserProfile(data));
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
        {console.log("user prof", userProfile)}
        {Object.keys(userProfile).length !== 0 && (
          <ProfileHeader userProfile={userProfile} />
        )}
        <div className="content">
          <FormCreatePlaylist handleCreatePlaylist={handleCreatePlaylist} />
          <div className="result">
            <SearchBar handleSubmit={handleSubmit}/>
            {loading ? (
              <h1 style={{ color: "white" }}>Loading...</h1>
            ) : (
              <Playlist
                data={tracks}
                addTrack={addTrack}
                deleteTrack={deleteTrack}
                selectedTracks={selectedTracks}
              />
            )}
          </div>
        </div>
      </div>
    );
  }
}
