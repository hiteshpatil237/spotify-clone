import React, { useEffect, useState } from 'react';

import Login from './Login';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import './App.css';

const spotify = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const hash = getTokenFromUrl();

    window.location.hash = "";

    const _token = hash.access_token;
    if(_token) {
      setToken(_token);

      spotify.setAccessToken(_token);
      spotify.getMe().then(user => {
        console.log("🧑", user);
      });
    }

    console.log("I have a token 💁‍♂️ ", token);
  }, []);
  return (
    <div className="app">
      {
        token ? (
          <h1>Song Player</h1>
        ) : (
          <Login />
        )
      }
    </div>
  );
}

export default App;
