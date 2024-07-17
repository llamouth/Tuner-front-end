import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import { useNavigate, useParams } from 'react-router-dom';

// COMPONENTS
import SongLyrics from './SongLyrics';

const SongCard = () => {

    const [song, setSong] = useState({})
    const [showLyrics, setShowLyrics] = useState(false)
    const [editSong, setEditSong] = useState({
        songName: "",
        artist: "",
        is_favorite: song.is_favorite,
        album: ""
    })
    const [editSongDisplay, setEditSongDisplay] = useState(false)

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

    const handleCheckBox = () => {
        setEditSong((prevState) => {
            return {...prevState, is_favorite: !editSong.is_favorite}
        })
    }

    const handleChange = (e) => {
        setEditSong((prevState) => {
            return {...prevState, [e.target.name]: e.target.value}
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch(`${API}/music/${id}`,{
            method: "PUT",
            body: JSON.stringify(editSong),
            headers: {
                "Content-type": "application/json"
            }
        })
        .then(res => res.json())
        .then(res => setEditSongDisplay(!editSongDisplay))
        .catch(err => console.error(err))
    }
    
    useEffect(() => {
        fetch(`${API}/music/${id}`)
        .then(res => res.json())
        .then(res => setSong(res))
        .catch(err => console.error(err))
    },[])
    
    useEffect(() => {
        fetch(`${API}/music/${id}`)
        .then(res => res.json())
        .then(res => setSong(res))
        .catch(err => console.error(err))

        setShowLyrics(false)
    },[editSongDisplay])

    useEffect(() => {
        setEditSong({
            songname: song.songname,
            artist: song.artist,
            is_favorite: song.is_favorite,
            album: song.album
        })
    },[song])

    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                {editSongDisplay ? 
                    (
                        <Form onSubmit={handleSubmit}>
                            <Form.Group>
                                <Form.Label>Song Name</Form.Label>
                                <Form.Control value={editSong.songname} name='songname' onChange={handleChange}/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Artist</Form.Label>
                                <Form.Control value={editSong.artist} name='artist' onChange={handleChange}/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Album</Form.Label>
                                <Form.Control value={editSong.album} name='album' onChange={handleChange}/>
                            </Form.Group>

                            <div>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                    Favorite song?
                                </Typography>
                                <Checkbox checked={editSong.is_favorite} onClick={handleCheckBox}/>
                            </div>

                            <Button variant='outlined' type='submit'>Submit</Button>
                            <Button variant='outlined' onClick={() => setEditSongDisplay(!editSongDisplay)}>Back</Button>
                        </Form>
                    ) 
                    :
                    (
                        <>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                Song
                            </Typography>
                            <Typography variant="h5" component="div" name='artist'>
                                    {song.artist}
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary" name='songname'>
                                {song.songname}
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary" name='songname'>
                                {song.album}
                            </Typography>
                            <Typography variant="body2">
                                <Button variant='outlined' onClick={() => setEditSongDisplay(!editSongDisplay)}>Edit</Button>
                                <Button variant='outlined' onClick={handleDelete}>Delete</Button>
                                <Button variant='outlined' onClick={() => navigate("/songs")}>Back</Button>
                            </Typography>
                            <CardActions>
                                <Button size="small" onClick={ () => setShowLyrics(!showLyrics)}>Lyrics</Button>
                            </CardActions>
                        </>
                    )
                }
            </CardContent>

            {showLyrics && 
                <CardContent>
                    <SongLyrics song={song}/>
                </CardContent>
            }
            
        </Card>
    );
};

export default SongCard;