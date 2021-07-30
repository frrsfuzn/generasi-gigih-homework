import FormCreatePlaylist from "../formCreatePlaylist";
import ProfileHeader from "../profileHeader";
import SearchBar from "../searchBar";
import Playlist from "../playlist";
import React from 'react';
import useSpotify from "../../spotifyLib/spotify";
import { useSelector } from "react-redux";

function Dashboard() {
  const {
    tracks,
    selectedTracks,
    loading,
    setSelectedTracks,
    searchTrack,
    createPlaylist,
    addTracksToPlaylist,
  } = useSpotify();
  const userProfile = useSelector((state) => state.user.value);
  function addTrack(uri) {
    setSelectedTracks((prev) => [...prev, uri]);
  }

  function deleteTrack(uri) {
    setSelectedTracks(selectedTracks.filter((item) => item !== uri));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const trackName = e.target[0];
    // setLoading(true);
    if (trackName.value) {
      searchTrack(trackName.value);
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
    const playlistName = e.target[0];
    const playlistDescription = e.target[1];
    createPlaylist(playlistName.value, playlistDescription.value).then(
      (data) => {
        addTracksToPlaylist(data.id);
        playlistName.value = "";
        playlistDescription.value = "";
      }
    );
  }
  return (
    <div className="container">
      {Object.keys(userProfile).length !== 0 && (
        <ProfileHeader userProfile={userProfile} />
      )}
      <div className="content">
        <FormCreatePlaylist handleCreatePlaylist={handleCreatePlaylist} />
        <div className="result">
          <SearchBar handleSubmit={handleSubmit} />
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

export default Dashboard;
