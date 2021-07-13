import './App.css';
import data from "./Data";

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
      <img
        id="image"
        className="elemenNeo"
        width={albumImg.width}
        src={albumImg.url}
        alt="Album image"
      />
      <h3>Title: {songTitle}</h3>
      <h3>Artist: {artistName}</h3>
      <button className="elemenNeo btn">Select</button>
    </div>
  );
}
