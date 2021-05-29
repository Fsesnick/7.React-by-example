import React from 'react';
import propTypes from 'prop-types';


const ConfirmedFilter = props =>
    <div>
        <h2>Inviteed</h2>
        <label>
            <input
            type="checkbox"
            onChange={props.toggleFilter}
            checked={props.isFiltered}
            />{" "}
            Hide those who Haven't responde
        </label>
    </div>;

ConfirmedFilter.propTypes ={
    toggleFilter: propTypes.func.isRequired,
    isFiltered: propTypes.bool.isRequired
};

export default ConfirmedFilter;