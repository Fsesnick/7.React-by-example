import React from 'react';
import propTypes from 'prop-types';

import GuestInputForm from './GuestInputForm'
const Header = props =>
    <header>
        <h1>RSVP</h1>
        <p>A Treehouse App</p>
        <GuestInputForm 
            newGuestSubmitHandler={props.newGuestSubmitHandler}
            pendingGuest={props.pendingGuest}
            handlerNameInput={props.handlerNameInput}
        />

    </header>

Header.propTypes = {
    newGuestSubmitHandler: propTypes.func.isRequired,
    pendingGuest: propTypes.string.isRequired,
    handlerNameInput: propTypes.func.isRequired
};

export default Header;

/*<header>
<h1>RSVP</h1>
<p>A Treehouse App</p>
<form onSubmit = {this.newGuestSubmitHandler} >
    <input type="text"
    onChange = {this.handleNameInput}
    value={this.state.pendingGuest}
    placeholder="Invite Someone"/>
 <button type="submit" name="submit" value="submit">Submit</button>
</form>
</header>
*/