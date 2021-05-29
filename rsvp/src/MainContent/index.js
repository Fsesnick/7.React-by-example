import React from 'react';
import propTypes from 'prop-types';

import ConfirmedFilter from './ConfirmedFilter';
import GuestList from './GuestList';
import Counter from './Counter';

const MainContent = props =>
    <div className="main">
        <ConfirmedFilter
            toggleFilter={props.toggleFilter}
            isFiltered={props.isFiltered}
            />
        <Counter
            totalInvited={props.totalInvited}
            numberUnconfirmed={props.numberUnconfirmed}
            numberAttending={props.numberAttending}  />
        <GuestList
            guests={props.guests}
            toggleConfirmationAt={props.toggleConfirmationAt}
            toggleEditingAt={props.toggleEditingAt}
            setNameAt={props.setNameAt}
            isFiltered={isFiltered}
            removeGuestAt={props.removeGuestAt}
            PendingGuest={props.PendingGuest}
            />
    </div>;

    MainContent.propTypes ={
        toggleFilter:propTypes.func.isRequired,
        isFiltered: propTypes.bool.isRequired,
        totalInvited: propTypes.number.isRequired,
        numberAttending: propTypes.number.isRequired,
        numberUnconfirmed: propTypes.number.isRequired,
        guests: propTypes.array.isRequired,
        toggleConfirmationAt: propTypes.func.isRequired,
        toggleEditingAt: propTypes.func.isRequired,
        setNameAt: propTypes.func.isRequired,
        removeGuestAt: propTypes.func.isRequired,
        PendingGuest: propTypes.string.isRequired
    };

    export default MainContent;
