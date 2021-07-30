import React from 'react'
import PropTypes from 'prop-types'

export default function ProfileHeader({userProfile}) {
	const {display_name, images: [{url}]} = userProfile
	return (
		<div className="elemenNeo profileHeader">
			<h2>Create Spotify Playlist</h2>
			<div className="userProfile">
				<h2>{display_name}</h2>
				<img className="elemenNeo" src={url} alt="profileImg"/>
			</div>
		</div>
	)
}

ProfileHeader.propTypes = {
	userProfile: PropTypes.object,
}