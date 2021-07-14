import './App.css';
import data from "./Data";
import Song from "./components/song";
const {
  album: {
    name: songTitle,
    images: [, albumImg]
  },
  artists: [{ name: artistName }]
} = data;

export default function App() {
  return (
		<div className="elemenNeo playlist">
			<Song
				src={albumImg.url}
				width={albumImg.width}
				title={songTitle}
				artist={artistName}
			/>
		</div>
  );
}
