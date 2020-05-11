/* eslint-disable react/prop-types */
import React from 'react';

const Form = ({value, handleChange, handleSubmit}) => {

    return(
        <div className="form-content-view">
            <form onSubmit={handleSubmit}>
                <input
                id="form-input"
                type="text"
                name="input"
                value={value}
                required={true}
                autoComplete="off"
                onChange={handleChange}
                placeholder=""/>
                <button id="form-button" type="submit" onSubmit={handleSubmit}>submit</button>
            </form>
        </div>
    )
}
export default Form;