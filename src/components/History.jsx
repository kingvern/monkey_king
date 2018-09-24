import React from 'react'
import {connect} from 'react-redux';

import images from '../theme/images'
import Modal from "react-modal";

const modalStyle = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

class History extends React.Component {
    state={
        imageIsOpen:false,
        imageIndex:0
    }

    showKey(key) {
        if (this.props.show) {
            this.props.show(key)
        }
    }
    closeImageModal(){
        this.setState({
            imageIsOpen:false
        })
    }

    renderLevel = (level, idx) => {
        console.log('page:', this.props.firstPage, this.props.secondPage)

        let curLevel = this.props.player.level ? this.props.player.level : '0'
        return (
            <div key={idx}
                 className={idx <= 5 ? this.props.firstPage + ' level_item_bg' : this.props.secondPage + ' level_item_bg'}
                 style={{background: 'url(' + images.level_avatar_bg + ')'}}
                 onClick={()=>{
                     this.setState({
                         imageIndex:idx,
                         imageIsOpen:true
                     })
                 }}>
                <div className={idx < curLevel ? 'showStyle' : 'hideStyle'}>
                    <span className='avatarBg'>{this.props.levelRes[idx].title}</span>
                    <img className='avatarImg' src={this.props.levelRes[idx].avatar}/>
                    <img className='avatarFg' src={images.level_avatar_fg}/>
                    <img className='avatarFgWall' src={images.avatar_fg_wall}/>
                </div>

            </div>
        )

    }

    render() {
        return (
            <div className={this.props.HistoryIsOpen ? 'level_panel' : 'hide'}
                 style={{background: 'url(' + images.level_panel + ')'}}>
                <div className='level_item_button'>

                    <span onClick={this.props.gotoFistPage}>上一页</span>
                    <span onClick={this.props.gotoSecondPage}>下一页</span>
                    <span onClick={this.props.handleHideRank}>关闭</span>
                </div>
                <div className='level_item_box'>
                    {this.props.levels.map((level, idx) => this.renderLevel(level, idx))}
                </div>
                <Modal
                    isOpen={this.state.imageIsOpen}
                    onRequestClose={this.closeImageModal.bind(this)}
                    style={modalStyle}
                    contentLabel=""
                >
                    <h1 >{this.props.levelRes[this.state.imageIndex].title} </h1>
                    <img src={this.props.levelRes[this.state.imageIndex].image} />
                    <h2 >{this.props.levelRes[this.state.imageIndex].story} </h2>
                </Modal>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        show(key) {
            const action = {
                type: 'show',
                key: key
            }
            dispatch(action);
        },

        handleHideRank() {
            const action = {
                type: 'hide_History'
            }
            dispatch(action);
        },
        gotoFistPage() {
            const action = {
                type: 'goto_firstPage_h'
            }
            dispatch(action);
        },
        gotoSecondPage() {
            const action = {
                type: 'goto_secondPage_h'
            }
            dispatch(action);
        }


    }
}

const mapStateToProps = (state) => {
    console.log('state', state)
    return {
        player: state.player,
        HistoryIsOpen: state.HistoryIsOpen,
        levels: state.levels,
        levelRes: state.levelRes,
        curPage: state.curHistoryPage,
        firstPage: state.fistHistoryPage,
        secondPage: state.secondHistoryPage,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(History);
