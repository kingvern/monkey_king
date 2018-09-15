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

class Name extends React.Component {


    render() {
        return (
            <div>
                <img onClick={this.props.openModal}/>
                <Modal
                    isOpen={this.props.modalIsOpen}
                    style={modalStyle}
                    contentLabel=""
                >

                    <div>
                        <input value={this.props.nameInput} onChange={this.props.handleChangeNameInput} />
                        <button onClick={this.props.handleSetNameInput}>确定</button>
                    </div>
                </Modal>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

        openModal() {
            const action = {
                type: 'open_modal'
            }
            dispatch(action);
        },
        closeModal() {
            const action = {
                type: 'close_modal'
            }
            dispatch(action);
        },
        handleChangeNameInput(e){
            const action = {
                type: 'change_name_input',
                value: e.target.value
            }
            dispatch(action);
        },

        handleSetNameInput(){
            const action = {
                type: 'set_name'
            }
            dispatch(action);
        },
    }
}

const mapStateToProps = (state) => {
    return {
        rowData: state.rowData,
        modalIsOpen: state.modalIsOpen
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Name);
