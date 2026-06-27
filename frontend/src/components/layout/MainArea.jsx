import React from "react";

import Auth from "../auth/Auth";
import Playlist from "../player/Playlist";
import SearchBar from "../search/SearchBar";
import SongList from "../player/SongList";
import SongGrid from "../songs/SongGrid";
import { useSelector } from "react-redux";

import "../../css/mainArea/MainArea.css";

const MainArea = ({ view, CurrentIndex,
          onSelectedSong,
          onSelectFavourites,
          onSelectTag,
          songsToDisplay,
          setSearchSongs,
         }) => {
            const auth=useSelector((state)=>state.auth);
           
  return (
    <div className="mainarea-root">
      <div className="mainarea-top">
        <Auth />
        {view === "home" && <Playlist onSelectTag={onSelectTag} />}
        {view === "search" && <SearchBar setSearchSongs={setSearchSongs} />}
      </div>

      <div className="mainarea-scroll">
        {(view === "home" || view === "search") && (
          <SongList
            songs={songsToDisplay}
            onSelectedSong={onSelectedSong}
            CurrentIndex={CurrentIndex}
          />
        )}

        {view === "favourites" && (
            <SongGrid
              songs={auth.user?.favourites || []}
              onSelectFavourites={onSelectFavourites}
            />
          
        )}
      </div>
    </div>
  );
};

export default MainArea;
