import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import FormCreatePlaylist from "../formCreatePlaylistNew";
import FormSearchTrack from "../formSearchTrack";
import SearchResult from "../searchResult";
import { useAppSelector} from "../../app/hooks";
// import Button from "@material-ui/core/Button";
// import TextField from "@material-ui/core/TextField";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import Checkbox from "@material-ui/core/Checkbox";
// import Link from "@material-ui/core/Link"
import {
  AppBar,
  // IconButton,
  Toolbar,
  Avatar,
  CssBaseline,
  Container,
  Grid,
  Paper,
  Typography,
  // Collapse,
  // Button,
} from "@material-ui/core";
// import { useSelector } from "react-redux";
// import store from "../../app/store";

const useStyles = makeStyles(() => createStyles ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    fontFamily: "Nunito",
    background: "#001015",
  },
  appbar: {
    background: "none",
  },
  appbarWrapper: {
    width: "80%",
    margin: "0 auto",
  },
  appbarTitle: {
    flexGrow: 1,
    color: "#fff",
  },
  icon: {
    color: "#fff",
    fontSize: "2rem",
  },
  colorText: {
    color: "#5AFF3D",
  },
  container: {
    textAlign: "center",
  },
  titleName: {
    color: "#fff",
    marginRight: "10px",
  },
  title: {
    color: "#fff",
    fontSize: "4.5rem",
  },
  goDown: {
    color: "#5AFF3D",
    fontSize: "4rem",
  },
  paper: {
    padding: "15px",
    margin: "10px",
  },
  main: {
    paddingTop: "100px",
  },
}));

export default function index() {
  // const { display_name = "", images: [profileImg = {}] = [] } = useAppSelector(
  //   (state) => state.user.value
  // );
	const userProfile = useAppSelector((state) => state.user.value)!
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar className={classes.appbarWrapper}>
          <h1 className={classes.appbarTitle}>
            My<span className={classes.colorText}>Spotify.</span>
          </h1>
          <Typography variant="h5" component="h5" className={classes.titleName}>
            {userProfile.display_name}
          </Typography>
					{/* dont forget to add src */}
          <Avatar src={''} />
        </Toolbar>
      </AppBar>
      <main className={classes.main}>
        <Container maxWidth="lg">
          <Grid container>
            <Grid item xs={12} md={3}>
              <Paper className={classes.paper}>
                <Typography variant="h4" component="h4">
                  Create Playlist
                </Typography>
                <FormCreatePlaylist />
              </Paper>
            </Grid>
            <Grid item xs={12} md={9}>
              <Paper className={classes.paper}>
                <Typography variant="h4" component="h4">
                  Select Tracks
                </Typography>
                <FormSearchTrack />
              </Paper>
              <Paper className={classes.paper}>
                <Typography variant="h4" component="h4">
                  Search Result
                </Typography>
                <SearchResult />
              </Paper>
            </Grid>
          </Grid>
          <Grid container></Grid>
        </Container>
      </main>
    </div>
  );
}
