/* eslint-disable no-undef */
import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Track from './index'
import data from './dummyTrack'

test('Test Track Component', () => {
	// Render track component with dummy data and props isSelected false
	render(<Track track={data} isSelected={false} deleteTrack={() => {return} } addTrack={() => {return}}/>)
	const songTitle = screen.getByText("Bohemian Rhapsody")
	const songArtist = screen.getByText("Queen")
	const buttonSelect = screen.getByText("Select")

	expect(songTitle).toBeInTheDocument()
	expect(songArtist).toBeInTheDocument()
	expect(buttonSelect).toBeInTheDocument()

	// Render track component with dummy data and props isSelected true
	render(<Track track={data} isSelected={true} deleteTrack={() => {return} } addTrack={() => {return}}/>)
	// Button should have text "Deselect"
	const buttonSelected = screen.getByText("Deselect")

	expect(buttonSelected).toBeInTheDocument()
})