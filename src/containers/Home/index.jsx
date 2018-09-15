import React from 'react'
import {connect} from 'react-redux';

import Actor from '../../components/Actor.jsx'
import Rank_list from '../../components/Rank_list.jsx'
import Panel from '../../components/Panel.jsx'

import './home.css'


class Home extends React.Component {
    render() {
        return (
            <React.Fragment>

                <div className="stage" onClick={this.props.handleGetLength}>
                    <div>{this.props.res}</div>
                    <Panel />
                    <Rank_list />
                    <Actor />
                    <Actor />
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
