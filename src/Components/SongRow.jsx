import React, { useEffect, useState } from 'react';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { useNavigate } from 'react-router-dom';

const SongRow = ({song}) => {

    const API = import.meta.env.VITE_BASE_URL;
    const navigate = useNavigate()
    const [playlistName, setPlaylistName] = useState("")

    const handleClick = (e) => {
        navigate(`/songs/${song.id}`)
    }

    useEffect(() => {
        fetch(`${API}/playlists/${song.playlist_id}`)
        .then( res => res.json())
        .then( res => setPlaylistName(res.playlist_name))
        .catch( err => console.error(err))
    }, [])

    return (
        <TableRow
            key={song.name}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            onClick={handleClick}
        >
            <TableCell align="center">{song.id}</TableCell>
            <TableCell align="center">{song.artist}</TableCell>
            <TableCell align="center">{song.songname}</TableCell>
            <TableCell align="center">{song.is_favorite ? "⭐️" : "no"}</TableCell>
            <TableCell align="center">{playlistName}</TableCell>
        </TableRow>
    );
};

export default SongRow;