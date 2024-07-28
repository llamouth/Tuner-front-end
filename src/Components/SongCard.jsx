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

// STYLES
import '../scss/SongCard.scss';

const SongCard = ({ setShowPlaylistChoice }) => {
  const [song, setSong] = useState({});
  const [showLyrics, setShowLyrics] = useState(false);
  const [editSongDisplay, setEditSongDisplay] = useState(false);
  const [editSong, setEditSong] = useState({
    songName: "",
    artist: "",
    is_favorite: song.is_favorite,
    album: ""
  });

  const API = import.meta.env.VITE_BASE_URL;
  const { id } = useParams();
  const navigate = useNavigate();

  const handleDelete = () => {
    fetch(`${API}/music/${id}`, {
      method: "DELETE"
    })
      .then(res => res.json())
      .then(res => navigate("/songs"))
      .catch(err => console.error(err));
  };

  const handleCheckBox = () => {
    setEditSong((prevState) => {
      return { ...prevState, is_favorite: !editSong.is_favorite };
    });
  };

  const handleChange = (e) => {
    setEditSong((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const handlePlaylistChoice = () => {
    setShowPlaylistChoice(true)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`${API}/music/${id}`, {
      method: "PUT",
      body: JSON.stringify(editSong),
      headers: {
        "Content-type": "application/json"
      }
    })
      .then(res => res.json())
      .then(res => setEditSongDisplay(!editSongDisplay))
      .catch(err => console.error(err));
  };

  useEffect(() => {
    fetch(`${API}/music/${id}`)
      .then(res => res.json())
      .then(res => setSong(res))
      .catch(err => console.error(err));
  }, []);

  useEffect(() => {
    fetch(`${API}/music/${id}`)
      .then(res => res.json())
      .then(res => setSong(res))
      .catch(err => console.error(err));

    setShowLyrics(false);
  }, [editSongDisplay]);

  useEffect(() => {
    setEditSong({
      songname: song.songname,
      artist: song.artist,
      is_favorite: song.is_favorite,
      album: song.album
    });
  }, [song]);

  return (
    <Card className="card-container">
      <CardContent>
        {editSongDisplay ?
          (
            <Form onSubmit={handleSubmit}>
              <Form.Group className="form-group">
                <Form.Label className="form-label">Song Name</Form.Label>
                <Form.Control value={editSong.songname} name='songname' onChange={handleChange} className="form-control"/>
              </Form.Group>
              <Form.Group className="form-group">
                <Form.Label className="form-label">Artist</Form.Label>
                <Form.Control value={editSong.artist} name='artist' onChange={handleChange} className="form-control"/>
              </Form.Group>
              <Form.Group className="form-group">
                <Form.Label className="form-label">Album</Form.Label>
                <Form.Control value={editSong.album} name='album' onChange={handleChange} className="form-control"/>
              </Form.Group>

              <div className="favorite-checkbox">
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  Favorite song?
                </Typography>
                <Checkbox checked={editSong.is_favorite} onClick={handleCheckBox} />
              </div>

              <div className="card-buttons">
                <Button variant='outlined' type='submit' className="btn-outlined">Submit</Button>
                <Button variant='outlined' onClick={() => setEditSongDisplay(!editSongDisplay)} className="btn-outlined">Back</Button>
              </div>
            </Form>
          )
          :
          (
            <>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom className="card-header">
                Artist
              </Typography>
              <Typography sx={{ mb: 1.5 }} variant="h5" component="div" name='artist' className="card-title">
                {song.artist}
              </Typography>
              <Typography sx={{ mb: 0, fontSize: 12 }} color="text.secondary" name='songname' className="card-subtitle">
                Song Name
              </Typography>
              <Typography sx={{ mb: 1.5 }} variant="h5" name='songname' className="card-album">
                {song.songname}
              </Typography>
              <Typography sx={{ mb: 0, fontSize: 12 }} color="text.secondary" name='songname' className="card-subtitle">
                Album
              </Typography>
              <Typography sx={{ mb: 1.5}} variant="h5"  name='album' className="card-album">
                {song.album}
              </Typography>
                <div className="card-buttons">
                  <Button variant='outlined' onClick={() => setEditSongDisplay(!editSongDisplay)} className="btn-outlined">Edit</Button>
                  <Button variant='outlined' onClick={handleDelete} className="btn-outlined">Delete</Button>
                  <Button variant='outlined' onClick={() => navigate("/songs")} className="btn-outlined">Back</Button>
                  <Button variant='outlined' onClick={handlePlaylistChoice} className="btn-outlined">Add to a playlist</Button>
                </div>
              <CardActions className="card-actions">
                <Button size="small" onClick={() => setShowLyrics(!showLyrics)} className="btn-outlined">Lyrics</Button>
              </CardActions>
            </>
          )
        }
      </CardContent>

      {showLyrics &&
        <CardContent className="lyrics-section">
          <SongLyrics song={song} />
        </CardContent>
      }

    </Card>
  );
};

export default SongCard;
