import React from 'react'
import PropTypes from 'prop-types'

export default function Button(props){
	return <button className="elemenNeo btn">{props.value}</button>
}

Button.propTypes = {
	value: PropTypes.string,
}