import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from '@mui/material/Button';
import { useParams } from 'react-router-dom';

const PlaylistSelect = ({setShowPlaylistChoice}) => {

    const { id } = useParams()
    const API = import.meta.env.VITE_BASE_URL;
    const [playlists, setPlaylists] = useState([])
    const [currentPlaylist, setCurrentPlaylist] = useState("")
    const [currentSong, setCurrentSong] = useState({})
    const [editPlaylist, setEditPlaylist] = useState(false)

    const handleSubmit = () => {
        setEditPlaylist(true)
        setCurrentSong((prevState) => {
            return {...prevState, playlist_id: currentPlaylist}
        })
    }

    useEffect(() => {
        if(editPlaylist){
            fetch(`${API}/music/${id}`, {
                method: "PUT",
                body: JSON.stringify(currentSong),
                headers: {
                    "Content-type": "application/json"
                }
            })
            .then( res => res.json())
            .then( res => {
                setShowPlaylistChoice(false)
            })
            .catch( err => console.error(err))
        }
    }, [currentSong])

    const handleChange = (e) => {
        setCurrentPlaylist(e.target.value)
    }

    useEffect(() => {
        fetch(`${API}/playlists`)
        .then( res => res.json())
        .then( res => setPlaylists(res))
        .catch( err => console.error(err))

        fetch(`${API}/music/${id}`)
        .then( res => res.json())
        .then( res => setCurrentSong(res))
        .catch( err => console.error(err))
    }, [])

    return (
        <>
          <div className='confirmShow-overlay'></div>
          <div className="playlist-choice">
            <Form.Select aria-label="Default select example" onChange={handleChange}>
              <option>Open this select menu</option>
              {playlists.map( playlist => {
                return <option key={playlist.id} value={playlist.id}>{playlist.playlist_name}</option>
              })}
            </Form.Select>
            <Button variant='outlined' className="btn-outlined" onClick={handleSubmit}>Submit</Button>
            <Button variant='outlined' className="btn-outlined" onClick={() => setShowPlaylistChoice(false)}>Back</Button>
          </div>
        </>
    );
};

export default PlaylistSelect;