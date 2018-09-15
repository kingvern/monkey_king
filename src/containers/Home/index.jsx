import React from 'react'
import {connect} from 'react-redux';

import Actor from '../../components/Actor.jsx'
import RankList from '../../components/RankList.jsx'
import Panel from '../../components/Panel.jsx'
import Name from "../../components/Name.jsx";

import images from '../../theme/images'

import './home.css'

class Home extends React.Component {
    render() {
        return (
            <React.Fragment>
                {/*<div className="stage" onClick={this.props.handleGetLength}>*/}
                    {/*<div>{this.props.res}</div>*/}
                <div className="stage">
                    <div className='bgDiv' >
                        <img className='bgImg' src={images.bg} />
                    </div>
                    <Panel />
                    <RankList />
                    <Actor id={'sun'} src={images.sun} />
                    <Actor id={'tang'} src={images.tang} />
                    <Name />
                </div>
            </React.Fragment>)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleGetLength() {
            const action = {
                type: 'get_length'
            }
            dispatch(action);
        }
    }
}

const mapStateToProps = (state) => {
    return {
        res: state.res
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
