import React from 'react'
import {connect} from 'react-redux';

import Actor from '../../components/Actor.jsx'
import RankList from '../../components/RankList.jsx'
import Panel from '../../components/Panel.jsx'
import Name from "../../components/Name.jsx";

import images from '../../theme/images'

import './home.css'
import LevelList from "../../components/LevelList";
import Power from "../../components/Power";
import Training from "../../components/Training";
import History from "../../components/History";

class Home extends React.Component {
    componentDidMount() {
        this.props.load()
        this.timerID = setInterval(
            () => {
                this.props.load()
            },
            2000
        );

    }



    render() {
        return (
            <React.Fragment>
                <div className="stage">

                    <div className='bgDiv' >
                        <img className='bgAni' src={images.stage00} />
                        <img className='bgImg' src={images.stage01} />
                    </div>
                    <Panel />
                    <Power />
                    <Training />
                    {this.props.hasMonkey ? <Actor id={'sun'} src={images.monkey1} /> : (<div id={'start_button'} className="fight" style={{background:'url('+images.fight_bg+')'}} onClick={this.props.freeMonkey}>
                        <span>领取猴子</span>
                    </div>)}
                    <Actor id={'tang'} src={images.tangseng} />

                    <RankList />
                    <LevelList />
                    <History />
                    {/*<Name />*/}
                </div>

                {/*<div className='white'>res: {this.props.res}</div>*/}
            </React.Fragment>)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleEvent() {
            const action = {
                type: 'handle_event'
            }
            dispatch(action);
        },
        load() {
            console.log('start load')
            const action = {
                type: 'load'
            }
            dispatch(action);
        },
        freeMonkey() {
            const action = {
                type: 'free_monkey'
            }
            dispatch(action);
        }
    }
}

const mapStateToProps = (state) => {
    return {
        avatar: images.avatar,
        res: state.res,
        rankIsOpen: state.rankIsOpen,
        fight: state.fight,
        state: state.state,
        level: state.level,
        power: state.power,
        modalIsOpen: state.modalIsOpen,
        nameInput: state.nameInput,
        name: state.name,
        rankData:state.rankData,
        fightRankData:state.fightRankData,
        timesRankData:state.timesRankData,
        monkey:state.monkey,
        player:state.player,
        hasMonkey:state.hasMonkey
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
