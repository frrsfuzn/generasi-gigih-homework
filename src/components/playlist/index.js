import React from "react";
import Song from "../song";

export default function Playlist({ data }) {
  return data.map((item) => {
    const {
			album: {
				name: songTitle,
        images: [, albumImg],
      },
      artists: [{ name: artistName}],
			id

    } = item;

		return <Song key={id} src={albumImg.url} width={albumImg.width} title={songTitle} artist={artistName} />
  });
}
