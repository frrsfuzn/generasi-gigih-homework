import './App.css';
import data from "./Data";
import Song from "./components/Song";

const {
  album: {
    name: songTitle,
    images: [, albumImg]
  },
  artists: [{ name: artistName }]
} = data;

export default function App() {
  return (
		<Song albumImg={albumImg} songTitle={songTitle} artistName={artistName} />
  );
}
