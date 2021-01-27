import React from 'react';

const Song = ({song, position}) => {
    return (
            <li>
                <div className="box">
                    <div className="position">{position}</div>
                    <div className="name">{song["im:name"].label}</div>
                    <div className="artist"> by {song["im:artist"].label}</div>
                </div>
            </li>
    )
}

export default Song;