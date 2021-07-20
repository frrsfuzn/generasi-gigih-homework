import React from "react";
import Song from "../song";

export default function Playlist({data}) {
  return data.map((item) => {
    const {
			album: {
        images: [, albumImg],
      },
			external_urls: {spotify: songUrl},
			name: songTitle,
      artists: [{ name: artistName}],
			id

    } = item;

		return <Song key={id} src={albumImg.url} width={albumImg.width} title={songTitle} artist={artistName} url={songUrl}/>
  });
}
