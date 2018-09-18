import React from 'react'
import {connect} from 'react-redux';

import Actor from '../../components/Actor.jsx'
import RankList from '../../components/RankList.jsx'
import Panel from '../../components/Panel.jsx'
import Name from "../../components/Name.jsx";

import images from '../../theme/images'

import './home.css'
import LevelList from "../../components/LevelList";

class Home extends React.Component {
    componentDidMount() {
        this.props.load()
    }

    render() {
        return (
            <React.Fragment>
                <div className="stage">

                    <div className='bgDiv' >
                        <img className='bgImg' src={images.stage01} />
                    </div>
                    <Panel />
                    <RankList />
                    <LevelList />
                    {this.props.hasMonkey ? <Actor id={'sun'} src={images.monkey1} /> : <h1 onClick={this.props.freeMonkey}>免费获取猴子</h1>}
                    <Actor id={'tang'} src={images.tangseng} />
                    {/*<Name />*/}
                </div>

                <div className='white'>res: {this.props.res}</div>
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
