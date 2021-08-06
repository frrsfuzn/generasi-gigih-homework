/* eslint-disable react/prop-types */
import React from "react";
import {TableRow, TableCell, Button} from '@material-ui/core';

export default function Track({track, isSelected, deleteTrack, addTrack}) {
	let buttonSelectValue = 'Select'
	if(isSelected){
		buttonSelectValue='Deselect'
	}
	function handleClick(){
		if(isSelected){
			deleteTrack(track.uri)
		}else{
			addTrack(track.uri)
		}
	}
  return (
    <TableRow key={track?.id}>
      <TableCell>
        <img src={track?.album.images[2].url} />
      </TableCell>
      <TableCell>{track?.artists[0].name}</TableCell>
      <TableCell>{track?.name}</TableCell>
      <TableCell>
        <Button onClick={handleClick} variant="contained" color={isSelected ? "secondary" : "primary"}>
					{buttonSelectValue}
        </Button>
      </TableCell>
    </TableRow>
  );
}
