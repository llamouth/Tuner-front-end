import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import '../scss/Songs.scss';

// COMPONENTS
import SongRow from './SongRow';

const API = import.meta.env.VITE_BASE_URL;

const Songs = ({currentPlaylist}) => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    if(currentPlaylist){
      setSongs(currentPlaylist.playlistSongs)
    }
  }, [currentPlaylist])
  
  useEffect(() => {
    fetch(`${API}/music`)
      .then((res) => res.json())
      .then((res) => setSongs(res))
      .catch((err) => console.error(err));
  }, []);

  return (
    <TableContainer component={Paper} className="songs-container">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">ID</TableCell>
            <TableCell align="center">Artist</TableCell>
            <TableCell align="center">Song Name</TableCell>
            <TableCell align="center">Is Favorite</TableCell>
            <TableCell align="center">Playlist</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Array.isArray(songs) &&
            songs.map((song, i) => {
              return <SongRow key={i} song={song} />;
            })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Songs;
