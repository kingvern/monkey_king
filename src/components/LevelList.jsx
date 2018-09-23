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
        console.log('page:',this.props.firstPage , this.props.secondPage)
            return (
                <div key={idx} className={ idx <= 5 ? this.props.firstPage+' level_item_bg' : this.props.secondPage+' level_item_bg'}  style={{background:'url('+images.level_avatar_bg+')'}} onClick={this.handleUpgradeLevel.bind(this,level.key)}>
                    <span className='avatarBg'>{this.props.levelRes[idx].title}</span>
                    {/*{level.key}-{level.difficulty}-{level.special}-{level.specialcount}-{level.allcount}-{level.addrange}*/}
                    {/*-{level.addmin}-{level.state}*/}
                    <img className='avatarImg' src={this.props.levelRes[idx].avatar} />
                    <img className='avatarFg' src={images.level_avatar_fg} />
                </div>
            )

    }

    render() {
        return (
            <div  className={this.props.levelIsOpen ? 'level_panel' : 'hide'} style={{background:'url('+images.level_panel+')'}}>
                <div className='level_item_button'>

                    <span onClick={this.props.gotoFistPage}>上一页</span>
                    <span onClick={this.props.gotoSecondPage}>下一页</span>
                    <span onClick={this.props.handleHideRank}>关闭</span>
                </div>
                <div className='level_item_box'>
                {this.props.levels.map((level, idx) => this.renderLevel(level, idx))}
                </div>
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
        },
        gotoFistPage() {
            const action = {
                type: 'goto_firstPage'
            }
            dispatch(action);
        },
        gotoSecondPage(){
            const action = {
                type: 'goto_secondPage'
            }
            dispatch(action);
        }


    }
}

const mapStateToProps = (state) => {
    console.log('state', state)
    return {
        levelIsOpen: state.levelIsOpen,
        levels: state.levels,
        levelRes: state.levelRes,
        curPage: state.curLevelPage,
        firstPage: state.fistLevelPage,
        secondPage: state.secondLevelPage,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LevelList);
