import React from 'react';
import { connect } from 'react-redux';
import actions from '../plants_actions';

const PlantsForm = (props) => {
    const plantInput = React.createRef();
    const addPlant = (event) => {
        event.preventDefault();
        props.add(plantInput.current.value)
        plantInput.current.value = ''
    }

    return (
        <form onSubmit={addPlant}>
            <input ref={plantInput} />
            <button type="submit">Add plant</button>
        </form>
    )
}

const mapDispatchToProps = dispatch => ({
    add: plant => dispatch(actions.add(plant))
})

export default connect(null, mapDispatchToProps)(PlantsForm)