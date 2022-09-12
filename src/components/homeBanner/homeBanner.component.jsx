import React from "react";

const HomeBanner = () => {
  return (
    <div>
      <div className="header">What are you inspired to create today?</div>
      <p className="subheader">Find a chef</p>
      <div className="search">
        <form action="">
          <input type="search" placeholder="Search recipes" />
          <button>Search</button>
        </form>
      </div>
    </div>
  );
};

export default HomeBanner;
