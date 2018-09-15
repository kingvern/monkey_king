import React from 'react'

import bagModalStyle from '../modalStyle'
import Modal from 'react-modal';
import connect from "react-redux/es/connect/connect";

require('./style/example.css')

const Item = ({row, idx}) => {
    return (
        <div className="rank_list_item" key={idx}>
            <h1>{row}</h1>
        </div>
    )
}

class Example extends React.Component {


    render() {
        return (
            <div>
                <img onClick={this.props.openModal}/>
                <Modal
                    isOpen={this.props.modalIsOpen}
                    onRequestClose={this.props.closeModal}
                    style={bagModalStyle}
                    contentLabel=""
                >

                    <div>
                        <div>
                            {this.props.rowData.map((row, idx) => (
                                <Item idx={idx}
                                      row={row}/>
                            ))}
                        </div>
                        <button onClick={this.props.openModal}>close</button>
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
        }
    }
}

const mapStateToProps = (state) => {
    return {
        rowData: state.rowData,
        times: state.times,
        texts: state.texts,
        modalIsOpen: state.modalIsOpen
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Example);
