import React from 'react';

import Item from './Item';
import './ItemsList.css';

const ItemsList = props => {
  return (
    <ul className="item-list">
      {props.items.map(item => (
        <Item
          key={item.id}
          id={item.id}
          onDelete={props.onDeleteItem}
        >
          {item.text}
        </Item>
      ))}
    </ul>
  );
};

export default ItemsList;
