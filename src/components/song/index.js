import SongTitleAttributes from "../songTitleAttributes";
import AlbumImage from "../albumImage";
import Button from "../button";
export default function Song(props){
	return (
		<div className="elemenNeo song">
			<AlbumImage src={props.src} width={props.width}/>
			<SongTitleAttributes title={props.title} artist={props.artist}/>
			<Button value="Select"/>
		</div>
	)
}