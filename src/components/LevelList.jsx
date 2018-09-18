import React from 'react'
import {connect} from 'react-redux';

import images from '../theme/images'

class LevelList extends React.Component {


    // key: levelRaw[0],
    // difficulty: levelRaw[1],
    // special: levelRaw[2],
    // specialcount: levelRaw[3],
    // allcount: levelRaw[4],
    // addrange: levelRaw[5],
    // addmin: levelRaw[6],
    // state: levelRaw[7]

    handleUpgradeLevel(key) {
        if(this.props.UpgradeLevel){
            this.props.UpgradeLevel(key)
        }
    }

    renderLevel = (level, idx) => {
        return (
            <div key={idx} onClick={this.handleUpgradeLevel.bind(this,level.key)}>{level.key}-{level.difficulty}-{level.special}-{level.specialcount}-{level.allcount}-{level.addrange}
            -{level.addmin}-{level.state}</div>
        )
    }

    render() {
        return (
            <div onClick={this.props.handleHideRank} className={this.props.levelIsOpen ? 'level_panel' : 'hide'}>

                <img className='level_bg' src={images.level_panel}/>
                {this.props.levels.map((level, idx) => this.renderLevel(level, idx))}
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        UpgradeLevel(key) {
            const action = {
                type: 'upgrade_level',
                key: key
            }
            dispatch(action);
        },

        handleHideRank() {
            const action = {
                type: 'hide_level'
            }
            dispatch(action);
        }


    }
}

const mapStateToProps = (state) => {
    console.log('state', state)
    return {
        levelIsOpen: state.levelIsOpen,
        levels: state.levels
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LevelList);
