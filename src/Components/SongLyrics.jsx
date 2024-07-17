import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const SongLyrics = ({song}) => {
    const LYRICS_API = "https://api.lyrics.ovh/v1/"
    const {songname, artist} = song

    const [lyrics, setLyrics] = useState("")

    useEffect(() => {
        console.log(`${LYRICS_API}${artist}/${songname}`)
        fetch(`${LYRICS_API}${artist}/${songname}`)
        .then(res => res.json())
        .then(res => setLyrics(res.lyrics))
        .catch(err => setLyrics(err))
    },[])

    return (
        <Card>
        <CardContent>
            <Typography variant="h5" component="div">
                {songname} - {artist}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="pre">
                {typeof lyrics === "string" ? lyrics : "Lyrics not found"}
            </Typography>
        </CardContent>
    </Card>
    );
};

export default SongLyrics;