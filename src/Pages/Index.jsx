import React from 'react';
import Songs from '../Components/Songs';
import '../scss/Index.scss';

const Index = ({ currentPlaylist }) => {
  return (
    <div className="index-container">
      <h3>All Songs</h3>
      <Songs currentPlaylist={currentPlaylist}/>
    </div>
  );
};

export default Index;
