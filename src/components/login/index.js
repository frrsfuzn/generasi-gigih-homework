import React from 'react'

function Login() {
	const SpotifyUrl = "https://accounts.spotify.com/";
  const clientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
  const scope = "playlist-modify-private";

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
}

export default Login;
