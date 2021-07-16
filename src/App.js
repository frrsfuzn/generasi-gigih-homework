import './App.css';
import data from "./all-sample";
import Playlist from './components/playlist';
console.table(data);
export default function App() {
  return (
		<Playlist data={data}/>
	);
}
