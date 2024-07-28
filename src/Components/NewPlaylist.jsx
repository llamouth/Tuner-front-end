import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const NewPlaylist = () => {

    const API = import.meta.env.VITE_BASE_URL
    const navigate = useNavigate();
    const [newPlaylist, setNewPlaylist] = useState({
        playlist_name: "",
        playlist_genre: ""
    })

    const addPlaylist = () => {
        fetch(`${API}/playlists`, {
            method: "POST",
            body: JSON.stringify(newPlaylist),
            headers: {
                "Content-type": "application/json"
            }
        })
        .then( res => res.json())
        .then( res => navigate(`/playlist/${res.id}`))
        .catch( err => console.error(err))
    }

    const handleChange = (e) => {
        setNewPlaylist((prevState) => {
            return {...prevState, [e.target.name]: e.target.value}
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addPlaylist();
    }


    return (
        <Form onSubmit={handleSubmit}>

            <Form.Group className="mb-3" >
                <Form.Label>Playlist Name</Form.Label>
                <Form.Control onChange={handleChange} type="text" placeholder="Playlist Name" name='playlist_name'/>
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label>Playlist Genre</Form.Label>
                <Form.Control onChange={handleChange} type="text" placeholder="Playlist Genre" name='playlist_genre'/>
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
            
        </Form>
    );
};

export default NewPlaylist;