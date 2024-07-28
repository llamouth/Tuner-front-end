import React, { useEffect } from 'react';

import Songs from '../Components/Songs';
import { useParams } from 'react-router-dom';

const Playlist = ({currentPlaylist, setCurrentPlaylist}) => {

    const API = import.meta.env.VITE_BASE_URL;
    const { id } = useParams()

    useEffect(() => {
        fetch(`${API}/playlists/${id}/music`)
        .then( res => res.json())
        .then( res => setCurrentPlaylist(res))
        .catch( err => console.error(err))
    },[])

    return (
        <div className="index-container">
            <h3>{ currentPlaylist && currentPlaylist.playlist_name }</h3>
            <Songs currentPlaylist={currentPlaylist}/>
        </div>
    );
};

export default Playlist;