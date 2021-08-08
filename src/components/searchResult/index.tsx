import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Track from "../track";
import { storeSelected } from "../../features/trackResult/trackResultSlice";
// import { useSelector, useDispatch } from "react-redux";
import { useAppSelector, useAppDispatch } from "../../app/hooks";

export default function SearchResult() {
  const dispatch = useAppDispatch();
  const tracks = useAppSelector((state) => state.trackResult.searchTracks);
  const selectedTracks = useAppSelector(
    (state) => state.trackResult.selectedTracks
  );
  function addTrack(uri: string) {
    dispatch(storeSelected([ ...selectedTracks, uri ]));
  }

  function deleteTrack(uri: string) {
    dispatch(storeSelected(selectedTracks.filter((item) => item !== uri)));
  }
  console.log("Search result", tracks);
  return (
    <Table size="small">
      <TableHead>
        <TableRow>
          <TableCell>Album Image</TableCell>
          <TableCell>Artist</TableCell>
          <TableCell>Title</TableCell>
          <TableCell>Action</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {Object.keys(tracks).length && tracks.map((track) => {
          let isSelected = false;
          if (selectedTracks?.includes(track.uri)) {
            isSelected = true;
          }
          return (
            <Track
              key={track.id}
              track={track}
              isSelected={isSelected}
              addTrack={addTrack}
              deleteTrack={deleteTrack}
            />
          );
        })}
      </TableBody>
    </Table>
  );
}
