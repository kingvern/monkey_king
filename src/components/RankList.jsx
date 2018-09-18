import React from 'react'
import {connect} from 'react-redux';

class RankList extends React.Component {



    renderItem = (rowData,idx) => {
        return (
            <div key={idx}>{rowData[0]}-{rowData[1]}-{rowData[2]}-{rowData[3]}-{rowData[4]}-{rowData[5]}</div>
        )
    }

    render() {
        return (
            <div onClick={this.props.handleHideRank} className={this.props.rankIsOpen ? 'rank_panel' : 'hide'}>
                <h1>战力排位榜</h1>
                {this.props.fightRankData.map((rowData,idx) => this.renderItem(rowData,idx))}
                <h1>通关次数排位榜</h1>
                {this.props.timesRankData.map((rowData,idx) => this.renderItem(rowData,idx))}
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
        fightRankData: state.fightRankData,
        timesRankData: state.timesRankData,
        rankIsOpen: state.rankIsOpen
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RankList);
