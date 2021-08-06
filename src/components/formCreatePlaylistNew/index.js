import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";
import { useSelector } from "react-redux";
import useSpotify from "../../spotifyServices/spotify";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function formCreatePlaylist() {
  const classes = useStyles();
  const { createPlaylist, addTracksToPlaylist } = useSpotify();
  const [judul, setJudul] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const selectedTracks = useSelector(
    (state) => state.trackResult.selectedTracks
  );

  function handleCreatePlaylist() {
    if (selectedTracks.length === 0) {
      alert("Please select one or more song");
      return;
    }
    if (judul && deskripsi) {
      createPlaylist(judul, deskripsi).then((data) => {
        addTracksToPlaylist(data.id);
      });
    }else{
			alert("Please input judul and description")
		}
  }

  return (
    <form
      className={classes.form}
      noValidate
      onSubmit={(e) => e.preventDefault()}
    >
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="judulPlaylist"
        label="Judul Playlist"
        name="judulPlaylist"
        value={judul}
        minLength={20}
        onChange={(e) => setJudul(e.target.value)}
      />
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="deskripsiPlaylist"
        label="Deskripsi Playlist"
        name="deskripsiPlaylist"
        value={deskripsi}
        onChange={(e) => setDeskripsi(e.target.value)}
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
        onClick={handleCreatePlaylist}
      >
        Create Playlist
      </Button>
    </form>
  );
}
