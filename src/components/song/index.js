import React from 'react'
import PropTypes from 'prop-types'
import SongTitleAttributes from "../songTitleAttributes";
import AlbumImage from "../albumImage";

export default function Song(props){
	let buttonSelectValue = 'Select'
	if(props.isSelected){
		buttonSelectValue='Deselect'
	}
	function handleClick(){
		if(props.isSelected){
			props.deleteTrack(props.uri)
		}else{
			props.addTrack(props.uri)
		}
	}

	return (
		<div className="elemenNeo song">
			<AlbumImage src={props.src} width={props.width}/>
			<SongTitleAttributes title={props.title} artist={props.artist}/>
			<a className="elemenNeo btn" href={props.url}>Open on Spotify</a>
			<button onClick={handleClick} className={props.isSelected ? "elemenNeo btnSelected" : "elemenNeo btn"} href={props.url}>{buttonSelectValue}</button>
		</div>
	)
}

Song.propTypes = {
	isSelected: PropTypes.bool,
	deleteTrack: PropTypes.func,
	addTrack: PropTypes.func,
	src: PropTypes.string,
	width: PropTypes.string,
	uri: PropTypes.string,
	url: PropTypes.string,
	artist: PropTypes.string,
	title: PropTypes.string,

}