// import "./App.css";
import Dashboard from "./components/dashboardNew";
// import Login from "./components/login";
import Login from "./components/loginNew";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { storeToken } from "./features/token/tokenSlice";
import useSpotify from "./spotifyServices/spotify";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import { createTheme } from "@material-ui/core";

export default function App() {
  const { fetchUserProfile } = useSpotify();

  const accessToken = useSelector((state) => state.token.value);
  const dispatch = useDispatch();

	const theme= createTheme({
		palette: {
			type: 'dark',
			primary: {
				main: '#5AFF3D'
			}
		}
	})

  useEffect(() => {
    const hash = window.location.hash;
    const token = hash ? hash.split("=")[1].split("&")[0] : "";
    if (token) {
      dispatch(storeToken(token));
    }
    fetchUserProfile();
  }, [dispatch, fetchUserProfile]);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route path="/create-playlist">
            {accessToken === "" && <Redirect to="/" />}
            <Dashboard />
          </Route>
          <Route path="/">
            {accessToken !== "" && <Redirect to="/create-playlist" />}
            {/* <Login /> */}
            <Login/>
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}
