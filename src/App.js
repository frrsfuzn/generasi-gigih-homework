import "./App.css";
import data from "./all-sample";
import Playlist from "./components/playlist";
import React from "react";
console.table(data);
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      access_token: "",
      tracks: [],
    };
    this.accountSpotifyUrl = "https://accounts.spotify.com/";
    this.clientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
    this.clientSecret = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET;
    this.scope = "playlist-modify-private";
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const code = window.location.search.split("=")[1];
    if (code) {
      console.log(code);
      fetch(this.accountSpotifyUrl + "api/token", {
        method: "POST",
        body: `grant_type=authorization_code&code=${code}&redirect_uri=${window.location.origin}`,
        headers: {
          Authorization:
            "Basic " + btoa(this.clientId + ":" + this.clientSecret),
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
      })
        .then((res) => res.json())
        .then((data) => this.setState({ access_token: data.access_token }))
        .catch((err) => console.log(err));
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const trackName = e.target[0].value;
		if(trackName){

			fetch(`https://api.spotify.com/v1/search?q=${trackName}&type=track`, {
				method: "GET",
				headers: {
					Authorization: "Bearer " + this.state.access_token,
				},
			})
				.then((res) => res.json())
				.then((data) => this.setState(prev => ({...prev, tracks: data.tracks.items})))
				.catch((err) => console.log(err));
		}else{
			alert("Please input track name")
		}
  }

  render() {
    if (!this.state.access_token) {
      return (
        <div className="container">
					<h1 style={{color: "white"}}>Login with your Spotify Account</h1>
          <a
						className="elemenNeo btn"
            href={
              this.accountSpotifyUrl +
              "authorize?response_type=code&client_id=" +
              this.clientId +
              "&scope=" +
              this.scope +
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
          <form onSubmit={this.handleSubmit}>
            <input id="searchBar" type="text" />
            <input className="elemenNeo btn" id="buttonSearch" type="submit" value="Search" />
          </form>
          <Playlist data={this.state.tracks} />
        </div>
      );
    }
  }
}
