import React, { useState } from 'react';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { useNavigate } from 'react-router-dom';

const Song = ({song}) => {

    const navigate = useNavigate()
    const [] = useState()

    const handleClick = (e) => {
        navigate(`/songs/${song.id}`)
    }

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
        </TableRow>
    );
};

export default Song;