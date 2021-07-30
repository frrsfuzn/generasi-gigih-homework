import React from 'react'
import Title from "../title"
import PropTypes from 'prop-types'

export default function SongTitleAttributes(props){
	return (
		<>
			<Title title="Title" value={props.title}/>
			<Title title="Artist" value={props.artist}/>
		</>
	);
}

SongTitleAttributes.propTypes = {
	title: PropTypes.string,
	artist: PropTypes.string,
}