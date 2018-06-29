import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { addPerson, removePerson } from '../../actions/PersonActions';
import { connect } from 'react-redux';
import { toJS } from '../decorators/toJS';

class HomeView extends Component {
    constructor(props) {
        super(props);
        this.addPerson = this.addPerson.bind(this);
        this.removePerson = this.removePerson.bind(this);
    }

    addPerson() {
        const person = {"name": "person"+this.props.count};
        this.props.PersonActions.addPerson(person);
    };

    removePerson() {
        this.props.PersonActions.removePerson();
    };

    render() {

        const peopleElements = this.props.people.map(person => <p>{person.name}</p>);

        return (
            <div>
                <h1>hi</h1>
                <div>
                    <button onClick={this.addPerson}>Add</button>
                    <button onClick={this.removePerson}>Remove</button>
                </div>
                {peopleElements}

            </div>
        );
    }
}

const mapStateToProps = state => ({
    people: state.getIn(['person', 'people']),
    count: state.getIn(['person', 'count'])
});

const mapDispatchToProps = dispatch => ({
    PersonActions: bindActionCreators({ addPerson, removePerson }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(toJS(HomeView));

