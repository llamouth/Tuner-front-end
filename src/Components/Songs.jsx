import React, {useState, useEffect} from 'react';
import Box from '@mui/material/Box';import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import Song from './Song';


const API = import.meta.env.VITE_BASE_URL

const Songs = () => {

    const [songs, setSongs] = useState([])

    useEffect(() => {
        fetch(`${API}/music`)
        .then(res => res.json())
        .then(res => setSongs(res))
        .catch(err => console.error(err))
    },[])

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                    <TableCell align="center">ID</TableCell>
                    <TableCell align="center">Artist</TableCell>
                    <TableCell align="center">Song Name</TableCell>
                    <TableCell align="center">Is Favorite</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {Array.isArray(songs) &&
                    songs.map((song,i) => {
                        return <Song key={i}song={song}/>
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default Songs;