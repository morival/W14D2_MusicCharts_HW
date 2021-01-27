import React, {useState, useEffect} from 'react';
import TopSongsList from '../components/TopSongsList';

const TopSongsContainer = () => {

    const [topSongs, setTopSongs] = useState({});
    const [loaded, setLoaded] = useState(false);


    useEffect(() => {
        getTopSongs();
    }, [])

    const getTopSongs = () => {
        console.log("fetching...");
        fetch(`https://itunes.apple.com/gb/rss/topsongs/limit=20/json`)
        .then(res => res.json())
        .then(data => setTopSongs(data))
        .then(() => setLoaded(true))
    }

    return(
        <div className="container">
            <div className="header">
            <h1>The Official UK Top 20 Charts</h1>
            </div>
            <TopSongsList topSongs={topSongs} loaded={loaded} />
        </div>
    )
}

export default TopSongsContainer;