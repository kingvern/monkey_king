import React from 'react'
import {connect} from 'react-redux';

class RankList extends React.Component {



    renderItem = (rowData,idx) => {
        return (
            <div key={idx}>{rowData}</div>
        )
    }

    render() {
        return (
            <div onClick={this.props.handleHideRank} className={this.props.rankIsOpen ? 'rank_panel' : 'hide'}>
                <h1>排位榜</h1>
                {this.props.rankData.map((rowData,idx) => this.renderItem(rowData,idx))}
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleHideRank() {
            const action = {
                type: 'hide_rank'
            }
            dispatch(action);
        }


    }
}

const mapStateToProps = (state) => {
    return {
        rankData: state.rankData,
        rankIsOpen: state.rankIsOpen
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RankList);
