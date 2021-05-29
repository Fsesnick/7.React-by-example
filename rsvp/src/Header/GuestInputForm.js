import React from 'react';
import propTypes from 'prop-types';

const GuestInputForm = props =>

<form onSubmit = {this.newGuestSubmitHandler} >
    <input 
        type="text"
        onChange = {this.handleNameInput}
        value={this.state.pendingGuest}
        placeholder="Invite Someone"/>
 <button type="submit" name="submit" value="submit">Submit</button>
</form>;

GuestInputForm.propTypes = {
    newGuestSubmitHandler: propTypes.func.isRequired,
    pendingGuest: propTypes.string.isRequired,
    handleNameInput: propTypes.func.isRequired
};

export default GuestInputForm;