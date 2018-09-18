import React from 'react'

import Modal from 'react-modal';
import {connect} from "react-redux";


const modalStyle = {
    content: {
        top: '30%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

class Power extends React.Component {

    handleBuyPower(value) {
        if(this.props.BuyPower){
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
                        <input value={this.props.powerInput} onChange={this.props.handleChangePowerInput}/>
                        <button onClick={this.handleBuyPower.bind(this, this.props.powerInput)}>确定</button>
                    </div>
                    <h3 onClick={this.props.FreePower}>领取体力</h3>
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

        BuyPower(value) {
            const action = {
                type: 'buy_power',
                value: value
            }
            dispatch(action);
        },
        FreePower(){
            const action = {
                type: 'free_power'
            }
            dispatch(action);
        },
    }
}

const mapStateToProps = (state) => {
    return {
        powerIsOpen: state.powerIsOpen,
        powerInput: state.powerInput
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Power);
