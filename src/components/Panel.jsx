import React from 'react'
import {connect} from "react-redux/";
import images from "../theme/images";

class Panel extends React.Component {

    componentWillMount() {
        this.props.getPanelInfo()
    }

    handleUpgradeLevel(key) {
        if (this.props.UpgradeLevel) {
            this.props.UpgradeLevel(key)
        }
    }


    render() {
        return (
            <div className="panel">
                <img className='panel_bg' src={images.panel_bg}/>
                <div className="avatar">
                    <img className='avatarBg' src={images.avatar_bg}/>
                    <img className='avatarImg' src={this.props.avatar}/>
                    <img className='avatarFg' src={images.avatar_fg}/>

                </div>

                <div className="status_bar">
                    <div className="status_item">
                        <span onClick={this.props.openFightModal}>战力</span>
                        <span onClick={this.props.openFightModal}>{this.props.monkey.fight ? this.props.monkey.fight : '0'} </span>
                    </div>
                    <div className="status_item">
                        <span>状态</span>
                        <span>{this.props.monkey.state ? 'true' : 'false'} </span>
                    </div>
                    <div className="status_item">
                        <span onClick={this.props.openPowerModal}>体力</span>
                        <span onClick={this.props.openPowerModal}> {this.props.player.power ? this.props.player.power : '0'} </span>
                    </div>
                </div>
                <div className="fight" style={{background:'url('+images.fight_bg+')'}}>
                    {/*<img className='absoluteImg' src={images.fight_bg}/>*/}
                    <span onClick={this.handleUpgradeLevel.bind(this, (this.props.player.level + 1))} >迎战</span>
                    <span>所需战力</span>
                    <span>{this.props.nextDifficulty} </span>
                </div>
                <div className="level">
                    <div className="status_item">
                        <span onClick={this.props.showLevel}
                        >目前通关</span>
                        <span>{this.props.player.level ? this.props.player.level : '0'} </span>
                    </div>
                    <div className="status_item">
                        <span onClick={this.props.showLevel}
                        >历</span>
                        <span onClick={this.props.showLevel}
                        >史</span>

                    </div>
                </div>

                {/*<div className="level">*/}
                    {/*<div className="status_item">*/}
                        {/*<span onClick={this.props.showLevel}*/}
                        {/*>目前通关数</span>*/}
                    {/*</div>*/}
                    {/*<div className="status_item">*/}
                        {/*<span>{this.props.player.level ? this.props.player.level : '0'} </span>*/}
                    {/*</div>*/}
                {/*</div>*/}
                {/*<div className="history">*/}
                    {/*<div className="status_item">*/}
                        {/*<span onClick={this.handleUpgradeLevel.bind(this, (this.props.player.level + 1))}*/}
                        {/*>历</span>*/}
                        {/*<span onClick={this.handleUpgradeLevel.bind(this, (this.props.player.level + 1))}*/}
                        {/*>史</span>*/}

                    {/*</div>*/}
                {/*</div>*/}

                <div className="rank_button"  style={{background:'url('+images.rank_button_bg+')'}}>

                    {/*<img className='absoluteImg' src={images.rank_button_bg} />*/}
                    <span onClick={() => {
                        this.props.showRank();
                        this.props.refreshRankData();
                    }}>排位榜</span>
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


        getPanelInfo() {
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
        avatar_bg: state.avatar_bg,
        avatar_fg: state.avatar_fg
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Panel);



