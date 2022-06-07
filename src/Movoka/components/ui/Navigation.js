import React, { useRef } from 'react';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Navigation.scss';

function Navigation(props) {
  const _searchBar = useRef();
  const _handleSearchIconClick = (e) => {
    const searchBar = _searchBar.current;

    if (searchBar) {
      const input = searchBar.querySelector('.input');
      if (input) {
        searchBar.style.display = 'block';
        input.focus();
      }
    }
  };
  const _handleSearchBarBlur = (e) => {
    const searchBar = _searchBar.current;

    if (searchBar) {
      const input = searchBar.querySelector('.input');
      if (input) {
        searchBar.style.display = 'none';
        input.focus();
      }
    }
  };

  return (
    <nav className="navigation">
      <div className="left">
        <div className="logo">
          <div>Movoka</div>
        </div>
        <div className="nav_container">
          <ul className="nav_list">
            <li className="nav_list_item_text">Home</li>
            <li className="nav_list_item_text">Browse Movies</li>
            <li className="nav_list_item_text">Rating</li>
          </ul>
        </div>
      </div>
      
      {/* <div>navigation
        <ul className="nav_list">
          <li>Browse Movies</li>
          <li>Rating</li>
        </ul>
      </div> */}
      <div className="right">
        <div className="nav_container">
          <ul className="nav_list">
            <li className="nav_list_item">
              <div className="search_bar" ref={ _searchBar }>
                <div className="separate"></div>
                <input className="input" placeholder="원하는 영화를 검색해보세요." onBlur={ _handleSearchBarBlur }/>
              </div>
            </li>
            <li className="nav_list_item">
              <div className="icon_box" onClick={ _handleSearchIconClick }>
                <div className="icon">
                  <FontAwesomeIcon icon={faSearch} size="lg" />
                </div>
              </div>
            </li>
            <li className="nav_list_item">
                <div className="user"></div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;