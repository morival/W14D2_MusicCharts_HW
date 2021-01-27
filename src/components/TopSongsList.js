import React from 'react';
import Song from './Song';

const TopSongsList = ({topSongs, loaded}) => {

    if(!loaded) {
        return <p>Loading...</p>
    }

    const topSongsArray = topSongs.feed.entry.map(song => {
        const position = topSongs.feed.entry.indexOf(song) + 1;
        return (
            <Song song={song} key={song.id.attributes["im:id"]} position={position}/>
        )
    });

    return (
        <div className="song-list">
            <ul>{topSongsArray}</ul>
        </div>
    )
}

export default TopSongsList;