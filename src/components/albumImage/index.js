import React from 'react'
import PropTypes from 'prop-types'

export default function AlbumImage(props){
		return <img
        className="elemenNeo albumImage"
        src={props.src}
        alt="Album"
    />
}

AlbumImage.propTypes = {
	src: PropTypes.string,
}