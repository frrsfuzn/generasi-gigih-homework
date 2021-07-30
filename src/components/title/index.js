import React from 'react'
import PropTypes from 'prop-types'
export default function Title(props){
	return <h3>{props.title}: {props.value}</h3>;
}

Title.propTypes = {
	title: PropTypes.string,
	value: PropTypes.string,
}