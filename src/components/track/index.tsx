/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from "react";
import {TableRow, TableCell, Button} from '@material-ui/core';

interface ITrack {
	track: SpotifyApi.TrackObjectFull;
	isSelected: boolean;
	deleteTrack: (uri:string) => void;
	addTrack: (uri:string) => void;
}


export default function Track({track, isSelected, deleteTrack, addTrack}: ITrack) {
	let buttonSelectValue:string = 'Select'
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
