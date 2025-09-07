import React, { useState } from "react";

const demoSongs = [
  { title: "Song One", artist: "Artist A", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" },
  { title: "Song Two", artist: "Artist B", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" },
  { title: "Song Three", artist: "Artist C", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3" },
];

export default function App() {
  const [currentSong, setCurrentSong] = useState(null);

  return (
    <div style={{ padding: 40, fontFamily: "sans-serif" }}>
      <h1>Demo Spotify</h1>
      <ul>
        {demoSongs.map((song, i) => (
          <li key={i} style={{ marginBottom: 10 }}>
            <b>{song.title}</b> - {song.artist}
            <button style={{ marginLeft: 10 }} onClick={() => setCurrentSong(song)}>
              Play
            </button>
          </li>
        ))}
      </ul>
      {currentSong && (
        <div style={{ marginTop: 30 }}>
          <h3>Now Playing: {currentSong.title}</h3>
          <audio controls autoPlay src={currentSong.url} />
        </div>
      )}
    </div>
  );
}