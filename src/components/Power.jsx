import React from 'react'

import Modal from 'react-modal';
import {connect} from "react-redux";
import images from "../theme/images";


const modalStyle = {
    content: {
        top: '30%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        background: 'url(' + images.modal_bg + ')',
        width: 386,
        height: 554,
        paddingTop: 80,
    }
};

class Power extends React.Component {

    state = {
        mouseStatus: 0
    }

    handleBuyPower(value) {
        if (this.props.BuyPower) {
            this.props.BuyPower(value)
        }
    }

    render() {
        return (
            <div>
                <Modal
                    isOpen={this.props.powerIsOpen}
                    onRequestClose={this.props.closePowerModal}
                    style={modalStyle}
                    contentLabel=""
                >

                    <div>
                        <span className='modal_container'>体力</span>

                        <div className='power_body'
                             // onMouseLeave={() => this.setState({mouseStatus: 0})}
                        >
                            <div className={this.state.mouseStatus == 2 ? 'buy_power_box' : 'hideStyle'}>
                                <div className='buy_power_change' style={{background:'url('+images.buy_power_change+')'}} onClick={this.props.addPowerInput}>
                                    <p>+</p>
                                </div>
                                <input className='buy_power_change'  style={{background:'url('+images.buy_power_change+')'}}
                                       value={this.props.powerInput}
                                       onChange={this.props.handleChangePowerInput}/>
                                <div className='buy_power_change' style={{background:'url('+images.buy_power_change+')'}} onClick={this.props.rmPowerInput}>
                                    <p>-</p>
                                </div>
                            </div>

                            <div className={this.state.mouseStatus == 2 ? 'hideStyle' : 'power_button'}
                                 style={{background: 'url(' + images.power_button_bg + ')'}}
                                 onClick={this.props.FreePower} >领取体力
                            </div>
                            <div className={this.props.hasFreePower ? 'power_button_hint' : 'hideStyle'}>今日免费体力已领完
                            </div>
                            <div className={this.props.hasFreePower ? 'power_button_hint' : 'hideStyle'}>可点击购买体力
                            </div>
                            <div className={this.state.mouseStatus == 1 ? 'hideStyle' : 'power_button'}
                                 style={{background: 'url(' + images.power_button_bg + ')'}}
                                 // onClick={this.handleBuyPower.bind(this, this.props.powerInput)}
                                 onClick={() => {
                                     if(this.state.mouseStatus != 2)
                                         this.setState({mouseStatus: 2})
                                     else
                                         this.handleBuyPower.bind(this, this.props.powerInput)
                                 }}
                            >购买体力
                            </div>
                        </div>
                        {/*<input value={this.props.powerInput} onChange={this.props.handleChangePowerInput}/>*/}
                        {/*<button onClick={this.handleBuyPower.bind(this, this.props.powerInput)}>确定</button>*/}
                    </div>
                    {/*<span onClick={this.props.FreePower}>领取体力</span>*/}
                </Modal>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

        openPowerModal() {
            const action = {
                type: 'open_power_modal'
            }
            dispatch(action);
        },
        closePowerModal() {
            const action = {
                type: 'close_power_modal'
            }
            dispatch(action);
        },
        handleChangePowerInput(e) {
            const action = {
                type: 'change_power_input',
                value: e.target.value
            }
            dispatch(action);
        },
        addPowerInput(){
            const action = {
                type: 'add_power_input'
            }
            dispatch(action);
        },
        rmPowerInput(){
            const action = {
                type: 'rm_power_input'
            }
            dispatch(action);
        },

        BuyPower(value) {
            const action = {
                type: 'buy_power',
                value: value
            }
            dispatch(action);
        },
        FreePower() {
            const action = {
                type: 'free_power'
            }
            dispatch(action);
        },
    }
}

const mapStateToProps = (state) => {
    return {
        hasFreePower: state.hasFreePower,
        powerIsOpen: state.powerIsOpen,
        powerInput: state.powerInput
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Power);
