import React, { Component } from 'react';
import PropTypes from 'prop-types';

class HomeView extends Component {
    constructor(props) {
        super(props);
        this.addPerson = this.addPerson.bind(this);
        this.removePerson = this.removePerson.bind(this);
    }

/*    static propTypes = {
        people: PropTypes.array.isRequired,
        count: PropTypes.number.isRequired
    };*/

    addPerson() {

    };

    removePerson() {

    };

    render() {

        const peopleElements = this.props.people.map(person => <p>person.name</p>);

        return (
            <div>
                <h1>hi</h1>
                <div>
                    <button onClick={this.addPerson}>Add</button>
                    <button onClick={this.removePerson}>Remove</button>
                </div>


            </div>
        );
    }
}

export default HomeView;

