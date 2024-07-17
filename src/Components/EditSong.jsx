import React, { useEffect, useState } from 'react';
import { TextField } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate, useParams } from 'react-router-dom';

const EditSong = () => {

    const [song, setSong] = useState({})
    const API = import.meta.env.VITE_BASE_URL
    const { id } = useParams()
    const navigate = useNavigate()

    const handleDelete = () => {
        fetch(`${API}/music/${id}`,{
            method: "DELETE"
        })
        .then(res => res.json())
        .then(res => navigate("/songs"))
        .catch(err => consolez.error(err))
    }
    
    useEffect(() => {
        fetch(`${API}/music/${id}`)
        .then(res => res.json())
        .then(res => setSong(res))
        .catch(err => console.error(err))
    },[])

    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Tuner
                </Typography>
                
                <Typography variant="h5" component="div">
                    {song.artist}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {song.songname}
                </Typography>
                <Typography variant="body2">
                    <Button variant='outlined' onClick={() => navigate(`/songs/${id}/edit`)}>Edit</Button>
                    <Button variant='outlined' onClick={handleDelete}>Delete</Button>
                    <Button variant='outlined' onClick={() => navigate("/songs")}>Back</Button>
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Lyrics</Button>
            </CardActions>
        </Card>
    );
};

export default EditSong;