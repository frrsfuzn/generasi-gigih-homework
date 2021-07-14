import Title from "../title"

export default function SongTitleAttributes(props){
	return (
		<>
			<Title title="Title" value={props.title}/>
			<Title title="Artist" value={props.artist}/>
		</>
	);
}