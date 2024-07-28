import React, { useState } from 'react';
import SongCard from '../Components/SongCard';
import PlaylistSelect from '../Components/PlaylistSelect';
import '../scss/Show.scss';

const Show = () => {

  const [showPlaylistChoice, setShowPlaylistChoice] = useState(false)
  

  return (
    <div className="show-container">
      <h3>View Song</h3>
      <SongCard setShowPlaylistChoice={setShowPlaylistChoice} />
      {showPlaylistChoice && 
        <PlaylistSelect setShowPlaylistChoice={setShowPlaylistChoice}/>
      }
    </div>
  );
};

export default Show;
