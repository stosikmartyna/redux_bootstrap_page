import React from 'react';
import { connect } from 'react-redux';

const PlantsContainer = ({plants}) => {
    return (
        <ul>
            {plants.list.map(plant => <li>{plant}</li>)}
        </ul>
    )
}

const mapStateToProps = state => ({
    plants: state.plants
})

export default connect(mapStateToProps, {})(PlantsContainer)