import React from 'react'
import {connect} from 'react-redux';

import images from '../theme/images'

class LevelList extends React.Component {



    renderItem = (rowData,idx) => {
        return (
            <div key={idx}>{rowData[0]}-{rowData[1]}-{rowData[2]}-{rowData[3]}-{rowData[4]}-{rowData[5]}</div>
        )
    }

    render() {
        return (
            <div onClick={this.props.handleHideRank} className={this.props.levelIsOpen ? 'level_panel' : 'hide'}>

                <img className='panel_bg' src={images.level_bg} />
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleHideRank() {

            const action = {
                type: 'hide_level'
            }
            dispatch(action);
        }


    }
}

const mapStateToProps = (state) => {
    console.log('state',state)
    return {
        levelIsOpen: state.levelIsOpen
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LevelList);
