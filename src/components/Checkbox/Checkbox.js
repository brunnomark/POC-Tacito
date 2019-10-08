import React, { Component } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import './Checkbox.css';

class checkbox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: false
        }
    }

    handleChange = () => {
        this.setState((prevState) => {
            return {checked: !prevState.checked}
        });
    };

    render() {
        return (
            <div className="checkbox">
                <Checkbox
                    checked={this.state.checked}
                    onChange={this.handleChange}        
                    inputProps={this.props.inputProps}
                />
                <p>
                    <span className="block-a">{this.props.value.name}</span>
                    <span className="block-b">{this.props.value.lastExecutionDate}</span>
                </p>
            </div>
            );
    }
}

export default checkbox;
