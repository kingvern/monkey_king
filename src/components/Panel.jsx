import React from 'react'
import {connect} from "react-redux/";
import images from "../theme/images";

class Panel extends React.Component {

    componentWillMount() {
        this.props.getPanelInfo()
    }

    handleUpgradeLevel(key) {
        if(this.props.UpgradeLevel){
            this.props.UpgradeLevel(key)
        }
    }


    render() {
        return (
            <div className="panel">
                <img className='panel_bg' src={images.panel_bg} />
                <div className="avatar" >
                    <img className='avatarImg' src={this.props.avatar} />
                </div>

                <div className="status_bar">
                    <h3 onClick={this.props.openFightModal}>战力:{this.props.monkey.fight}</h3>
                    <h3>状态:{this.props.monkey.state ? 'true':'false'}</h3>
                    <h3 onClick={this.props.openPowerModal}>体力:{this.props.player.power}</h3>
                </div>
                <div className="fight">
                    <h3>迎战所需战力</h3>
                    <h3>{this.props.nextDifficulty}</h3>
                </div>
                <div className="history">
                    <h3 onClick={this.props.showLevel}
                    >目前通关数</h3>
                    <h3>{this.props.player.level}</h3>
                    <h3 onClick={this.handleUpgradeLevel.bind(this, (this.props.player.level + 1))}
                    >闯关</h3>
                </div>
                <div className="history">
                    <h3 onClick={this.props.BuyMonkey}
                    >买猴子</h3>


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

        UpgradeLevel(key) {
            const action = {
                type: 'upgrade_level',
                key: key
            }
            dispatch(action);
        },


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
        openPowerModal() {
            const action = {
                type: 'open_power_modal'
            }
            dispatch(action);
        },
        openFightModal() {
            const action = {
                type: 'open_fight_modal'
            }
            dispatch(action);
        },
    }
}

const mapStateToProps = (state) => {
    return {
        monkey: state.monkey,
        player: state.player,
        levels: state.levels,
        nextDifficulty: state.nextDifficulty,
        avatar: state.avatar,
        rowData: state.rowData,
        fight: state.fight,
        power: state.power,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Panel);



