import React from "react";

const Search = () => {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder="Buscar um usuário" />
      </div>
      <div className="userChat">
        <img
          src="https://images.pexels.com/photos/19539378/pexels-photo-19539378/free-photo-of-bolsa-sacola-alforje-valise.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt=""
        />
        <div className="userChatInfo">
          <span>Danilo</span>
        </div>
      </div>
    </div>
  );
};

export default Search;
