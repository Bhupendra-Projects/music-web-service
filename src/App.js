import React, { useEffect, useState } from "react";
import "./App.css";
import Login from "./components/Login/Login";
import { getTokenFromUrl } from "./components/Spotify/Spotify";
import SpotifyWebApi from 'spotify-web-api-js'

import {useDataLayerValue} from './DataLayer';
import Player from "./components/Player/Player";

const spotify =new SpotifyWebApi();

function App() {

  const [{user,token},dispatch]=useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();

    window.location.hash = "";

    const _token=hash.access_token;
    if (_token) {
      dispatch({
        type:"SET_TOKEN",
          token:_token
      })
      spotify.setAccessToken(_token);
      spotify.getMe().then((user)=>{
        dispatch({
          type:"SET_USER",
          user:user
        })
      })
      spotify.getUserPlaylists().then((playlist)=>{
        dispatch({
          type:"SET_PLAYLIST",
          playlist:playlist
        })
      })
      spotify.getPlaylist('37i9dQZF1DXdpQPPZq3F7n').then(response=>
        dispatch({
          type:"SET_DISCOVER_WEEKLY",
          discover_weekly:response
        }))
    }
    
  }, []);

  return (
    <div className="app">
      {token ? <Player/> :<Login /> }
      {/* spotify logo */}
      {/* login with spotify */}
    </div>
  );
}

export default App;
