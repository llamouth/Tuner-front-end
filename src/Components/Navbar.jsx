import React, { useEffect, useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "../scss/Header.scss"
import { useNavigate } from 'react-router-dom';

import PlaylistDropdown from './PlaylistDropdown';

const Header = ({setPlaylistView, setCurrentPlaylist, currentPlaylist}) => {

    const API = import.meta.env.VITE_BASE_URL;
    const [playlistNames, setPlaylistNames] = useState([])
    const navigate = useNavigate()

    const handleClick = (comp) => {
        setCurrentPlaylist(null)
        navigate(comp)
    }

    useEffect(() => {
        fetch(`${API}/playlists`)
            .then(res => res.json())
            .then(res => setPlaylistNames(res) )
            .catch( err => console.error(err))
    },[])
    
    return (
        <Navbar expand="lg" className="bg-body-tertiary">    
            <Navbar.Brand href="/">Tuner</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link onClick={() => handleClick("/songs")} >All Songs</Nav.Link>
                    <Nav.Link onClick={() => handleClick("/new")} >New Song</Nav.Link>
                    <NavDropdown title="Playlist" id="basic-nav-dropdown">
                        {playlistNames.map((playlist, i) => {
                            return <PlaylistDropdown playlist={playlist} key={i} setPlaylistView={setPlaylistView} setCurrentPlaylist={setCurrentPlaylist} currentPlaylist={currentPlaylist}/>
                        })}
                        <NavDropdown.Divider />
                        <NavDropdown.Item  onClick={() => handleClick("/playlist/new")}>Create A Playlist</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse> 
        </Navbar>
    );
};

export default Header;