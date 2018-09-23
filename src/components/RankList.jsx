import React from 'react'
import {connect} from 'react-redux';
import images from "../theme/images";

class RankList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            detailShow: 'none',
            x: 0,
            y: 0
        }
    }

    handleBuyMonkey(key) {
        if (this.props.BuyMonkey) {
            this.props.BuyMonkey(key)
        }
    }

    handleMouseOver = (e) => {
        console.log('e:', e)
        this.setState({
            detailShow: 'block',
            x: e.pageX, //pageX是以html左上角为原点，相应的clientX是以浏览器左上角为原点
            y: e.pageY - 79,
            idx: e.key
        })
    }

    handleMouseOut = () => {
        this.setState({
            detailShow: 'none',
            x: 0,
            y: 0
        })
    }

    renderItem = (rowData, idx) => {
        return (
            <div>
                <div key={idx} onMouseOver={this.handleMouseOver}
                     onMouseOut={this.handleMouseOut}
                     onClick={this.handleBuyMonkey.bind(this, rowData[0])} className='rank_item_bg'
                     style={{background: 'url(' + images.rank_item_bg + ')'}}>
                    {/*key fight status level price*/}
                    {/*<img src={images.rank_item_bg} />*/}
                    <span className='rank_item_text'>{idx + 1} {rowData[1]} {rowData[3]} {rowData[4] / 1e18}</span>
                </div>

            </div>
        )
    }

    render() {
        return (
            <div>
                <div onClick={this.props.handleHideRank} className={this.props.rankIsOpen ? 'rank_panel_left' : 'hide'}
                     style={{background: 'url(' + images.rank_bg + ')'}}>

                    {/*<img className='rank_bg' src={images.rank_bg}/>*/}
                    <span className='rank_title'>战力排位榜</span><br/>
                    <span className='rank_head_text'>排名 战斗力 等级 价格</span>
                    {this.props.fightRankData.map((rowData, idx) => this.renderItem(rowData, idx))}
                </div>
                <div onClick={this.props.handleHideRank} className={this.props.rankIsOpen ? 'rank_panel_right' : 'hide'}
                     style={{background: 'url(' + images.rank_bg + ')'}}>

                    {/*<img className='rank_bg' src={images.rank_bg}/>*/}
                    <span className='rank_title'>通关次数排位榜</span><br/>
                    <span className='rank_head_text'>排名 战斗力 等级 价格</span>
                    {this.props.timesRankData.map((rowData, idx) => this.renderItem(rowData, idx))}
                </div>
                {/*将所需的值通过props传递给组件B*/}
                <B
                    dx={this.state.x}
                    dy={this.state.y}
                    detailShow={this.state.detailShow}
                />
            </div>
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return {

        BuyMonkey(key) {
            const action = {
                type: 'buy_monkey',
                key: key
            }
            dispatch(action);
        },

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

//----------------------------------------------
class B extends React.Component {


    render() {
        const {dx, dy, detailShow, idx} = this.props;
        if (dx < 1000) {
            return (
                <div style={{position: 'absolute', top: dy, left: 386, display: detailShow}}>
                    <ul style={{listStyleType: 'none', padding: 15}}>
                        <li>{dy}</li>
                        <li>{dx}</li>
                        <li>{idx}</li>
                    </ul>
                </div>
            )
        }
        else {
            return (
                <div style={{position: 'absolute', top: dy, right: 386, display: detailShow}}>
                    <ul style={{listStyleType: 'none', padding: 15}}>
                        <li>{dy}</li>
                        <li>{dx}</li>
                        <li>{idx}</li>
                    </ul>
                </div>
            )

        }


    }
}
