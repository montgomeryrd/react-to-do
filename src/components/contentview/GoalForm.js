import React from 'react';

class GoalForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            content : ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e) {
        this.setState({ content : e.target.value });
    }
    handleSubmit(e) {
        e.preventDefault();
        
    }

    render() {
        return (
            <div className="goal-form-view">
                <form onSubmit={}>
                    {/* <input 
                        id="input" 
                        type="text" 
                        name="quest" 
                        value={ this.value } 
                        required="true" 
                        autoComplete="off" 
                        onChange={ this.handleChange } 
                        placeholder="what is your quest"/>
                    <button id="enter" type="submit" onSubmit={ this.handleSubmit }>submit</button> */}
                </form>
            </div>
        )
    }
}

export default GoalForm;