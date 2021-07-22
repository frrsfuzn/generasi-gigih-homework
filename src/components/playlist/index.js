import React from "react";
import Song from "../song";

export default function Playlist({ data, addTrack, deleteTrack, selectedTracks }) {
  return data.map((item) => {

    const {
      album: {
        images: [, albumImg],
      },
      external_urls: { spotify: songUrl },
      name: songTitle,
      artists: [{ name: artistName }],
      id,
      uri,
    } = item;

		let isSelected=false;
		// console.log("Playlist:  ",artistName,selectedTracks.includes(uri))
		if(selectedTracks.includes(uri)){
			isSelected=true;
		}

    return (
      <Song
        uri={uri}
        isSelected={isSelected}
        key={id}
        src={albumImg.url}
        width={albumImg.width}
        title={songTitle}
        artist={artistName}
        url={songUrl}
				addTrack={addTrack}
				deleteTrack={deleteTrack}
      />
    );
  });
}
