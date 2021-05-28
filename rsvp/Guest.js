import React from 'react';
import PropTypes from 'prop-types';

const Guest = props =>
<ul>
    {props.guests.map((guest, index) => 
    <li key={index}>
    <span>{guest.name} </span>
    <label>
        <input type="checkbox" checked={guest.isConfirmed} /> 
    </label>
    <button>edit</button>
    <button>remove</button>
    </li>
    )}
</ul>;


Guest.propTypes={
    guests: PropTypes.array.isRequired
}

export default Guest;