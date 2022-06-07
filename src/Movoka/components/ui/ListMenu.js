import React from 'react';
import './ListMenu.scss';

function ListMenu(props) {
  const _generateItemList = function (items) {
    return items.map((item, index) => {
      return (
        <li className="list_menu_item" key={index}>
          <div className="list_item_content">
            {item}
          </div>
        </li>
      );
    });
  }
  return (
    <ul className={props.menuName}>
      {_generateItemList(props.items)}
    </ul>
  )
}

export default ListMenu;