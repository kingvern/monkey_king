import React from 'react'
import {connect} from "react-redux/";
import images from "../theme/images";

class Panel extends React.Component {

    componentWillMount() {
        this.props.getPanelInfo()
    }

    render() {
        return (
            <div className="panel">
                <img className='panel_bg' src={images.panel_bg} />
                <div className="avatar" >
                    <img className='avatarImg' src={this.props.avatar} />
                </div>

                <div className="status_bar">
                    <h3>战力:{this.props.fight}</h3>
                    <h3>体力:{this.props.power}</h3>
                </div>
                <div className="fight">
                    <h3>迎战所需战力</h3>
                    <h3>{this.props.power}</h3>
                </div>
                <div className="history">
                    <h3 onClick={this.props.showLevel}
                    >目前通关数</h3>
                    <h3>{this.props.level}</h3>
                </div>
                <div className="rank_button">
                    <h3 onClick={()=> {
                        this.props.showRank();
                        this.props.refreshRankData();
                    }}>排位榜</h3>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getPanelInfo(){
            const action = {
                type: 'get_panel_info'
            }
            dispatch(action);
        },
        showRank() {
            const action = {
                type: 'show_rank'
            }
            dispatch(action);
        },
        showLevel() {

            const action = {
                type: 'show_level'
            }
            dispatch(action);
        },
        refreshRankData() {
            const action = {
                type: 'refresh_rank_data'
            }
            dispatch(action);
        },
    }
}

const mapStateToProps = (state) => {

    console.log('state',state)
    return {
        avatar: state.avatar,
        rowData: state.rowData,
        fight: state.fight,
        power: state.power,
        level: state.level
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Panel);



