import React, {useState} from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import useSpotify from '../../spotifyServices/spotify'

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

export default function FormSearchTrack() {
  const classes = useStyles();
	const [searchValue, setSearchValue] = useState("");
	const {searchTrack} = useSpotify();
  function handleSubmit(e:any) {
    e.preventDefault();
		if(searchValue){
			searchTrack(searchValue)
		}
    // const trackName = e.target[0];
    // setLoading(true);
    // if (trackName.value) {
    //   alert("Please input track name");
    // }
  }
  return (
    <form onClick={handleSubmit} className={classes.form} noValidate>
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="judulLagu"
        label="Judul Lagu"
        name="judulLagu"
				value={searchValue}
				onChange={(e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => setSearchValue(e.target.value)}
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
      >
        Search
      </Button>
    </form>
  );
}
