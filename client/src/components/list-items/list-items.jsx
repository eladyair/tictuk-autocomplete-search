import React, { useRef, useCallback } from 'react';

// Styles
import './list-items.styles.scss';

// Components
import Item from '../item/item';

const ListItems = ({ results }) => {
    return (
        <div className='list-container'>
            <ul>
                {results.map(country => (
                    <Item key={country.code} country={country.name} />
                ))}
            </ul>
        </div>
    );
};

export default ListItems;
