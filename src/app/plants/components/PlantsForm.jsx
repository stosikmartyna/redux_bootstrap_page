import React from 'react';
import { connect } from 'react-redux';
import actions from '../plants_actions';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap';
import './PlantsForm.css';

const PlantsForm = (props) => {
    const plantInput = React.createRef();
    const addPlant = (event) => {
        event.preventDefault();
        props.add(plantInput.current.value)
        plantInput.current.value = ''
    }

    return (
        <Form onSubmit={addPlant}>
            <Form.Control className="form-control" ref={plantInput} type="text" placeholder="Plant name" />
            <Button className="form-button" type="submit" size="sm" variant="success" block={true}>
                Add plant
            </Button>
        </Form>
    )
}

const mapDispatchToProps = dispatch => ({
    add: plant => dispatch(actions.add(plant))
})

export default connect(null, mapDispatchToProps)(PlantsForm)