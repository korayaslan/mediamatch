import React from "react";
import "./Featured.scss";

function Featured() {
  return (
    <div className="featured">
      <div className="container">
        <div className="left">
          <h1>
            Find the best Social Media Services
          </h1>
          <div className="search">
            <div className="searchInput">
              <img src="./img/search.png" alt="" />
              <input type="text" placeholder='Try "video editor"' />
            </div>
            <button>Search</button>
          </div>
          
        </div>
        <div className="right">
          <img src="./img/platforms.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Featured;
