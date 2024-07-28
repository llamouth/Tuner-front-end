import React, { useEffect } from 'react';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom';

const GenreDropdown = ({playlist, setCurrentPlaylist}) => {

    const navigate = useNavigate()
    const API = import.meta.env.VITE_BASE_URL;

    const handleClick = () => {
       fetch(`${API}/playlists/${playlist.id}/music`)
       .then(res => res.json())
       .then( res => {
            setCurrentPlaylist(res)
            navigate(`/playlist/${res.id}`)
       })
       .catch( err => console.error(err))
    }

    return (
        <NavDropdown.Item onClick={handleClick}>{playlist.playlist_name}</NavDropdown.Item>
    );
};

export default GenreDropdown;