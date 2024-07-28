import React, { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const NewSong = () => {

    const [newSong, setNewSong] = useState({
        songname: "",
        artist: "",
        is_favorite: false,
        album: ""
    })

    const navigate = useNavigate()
    const API = import.meta.env.VITE_BASE_URL

    const handleChange = (e) => {
        setNewSong((prevState) => {
            return {...prevState, [e.target.name]: e.target.value}
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`${API}/music`, {
            method: "POST",
            body: JSON.stringify(newSong),
            headers :{
                "Content-type": "application/json"
            }
        })
        .then(res => res.json())
        .then(res => navigate("/songs"))
        .catch(err => console.error(err))
    }

    const handleCheckBox = () => {
        setNewSong((prevState) => {
            return {...prevState, is_favorite: !newSong.is_favorite}
        })
    }

    return (
        <Form onSubmit={handleSubmit}>

            <Form.Group className="mb-3" >
                <Form.Label>Song Name</Form.Label>
                <Form.Control onChange={handleChange} type="text" placeholder="Song Name" name='songname'/>
                <Form.Text className="text-muted">
                    Input the song name you wish to add to your playlist.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label>Artist</Form.Label>
                <Form.Control onChange={handleChange} type="text" placeholder="Artist" name='artist'/>
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label>Album</Form.Label>
                <Form.Control onChange={handleChange} type="text" placeholder="Album Name" name='album'/>
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Check type="checkbox" label="Is this a favorite?" name='is_favorite' onClick={handleCheckBox}/>
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
            
        </Form>
    );
};

export default NewSong;