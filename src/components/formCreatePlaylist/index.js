import React from 'react'
import PropTypes from 'prop-types'

export default function FormCreatePlaylist({handleCreatePlaylist}) {
	return (
		<form onSubmit={handleCreatePlaylist} className="formCreatePlaylist elemenNeo">
			<label htmlFor="playlistName">Playlist Name</label>
			<input minLength="10" id="playlistName" type="text" required/>
			<label htmlFor="playlistDescription">Description</label>
			<textarea minLength="20" id="playlistDescription" required></textarea>
			<button className="btn elemenNeo">Create Playlist</button>
		</form>
	)
}

FormCreatePlaylist.propTypes = {
	handleCreatePlaylist: PropTypes.func,
}