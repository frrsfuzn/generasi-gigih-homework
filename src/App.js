import "./App.css";
import Dashboard from "./components/dashboard";
import Login from "./components/login";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { storeToken } from "./features/token/tokenSlice";
import useSpotify from "./spotifyLib/spotify";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

export default function App() {
  const {fetchUserProfile} = useSpotify();

  const accessToken = useSelector((state) => state.token.value);
  const dispatch = useDispatch();

  useEffect(() => {
    const hash = window.location.hash;
    const token = hash ? hash.split("=")[1].split("&")[0] : "";
    if (token) {
      dispatch(storeToken(token));
    }
    fetchUserProfile();
  }, [dispatch, fetchUserProfile]);

  return (
    <Router>
      <Switch>
        <Route path="/create-playlist">
          {accessToken === "" && <Redirect to="/" />}
          <Dashboard />
        </Route>
        <Route path="/">
          {accessToken !== "" && <Redirect to="/create-playlist" />}
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}
