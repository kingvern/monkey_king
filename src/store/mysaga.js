import {put, takeEvery} from 'redux-saga/effects'
import axios from 'axios'

import {web3} from "wallet";

const abi = require("../abi/MonkeyCore").abi;
const main = web3.loadContract(
    abi,
    "0x51e75333304a38805eb191a27bd3c5487f9d52df"
);
console.log(main);

const from_address = web3.eth.accounts[0]
const monkey_key = ''
const player_key = ''
const fight = ''

// function GetMonkeyListener() {
//     var myEvent = main.BuyMonkeySuccess({}, {fromBlock: 0, toBlock: 'latest'});
//     myEvent.watch(
//         function (err, result) {
//             console.log(result)
//             if (err) {
//                 console.log(err)
//             }
//         }
//     )
// }
//
// GetMonkeyListener()

//购买猴子
function* FreeMonkey() {
    try {
        const res = yield main.FreeMonkey();
        console.log(res)
    } catch (e) {
        console.log(e)
    }
}

//抢猴子
function* BuyMonkey(action) {
    try {
        var res = yield axios.get(api + get_buy_min_value + action.key + '/' + from_address);
        var buy_min_value = res.data
        console.log('get_buy_min_value', buy_min_value)

        var value = web3.toWei(buy_min_value,'wei');
        var key = action.key;
        res = yield main.BuyMonkey(key,{value});

    } catch (e) {
        console.log(e)
    }
}


//领取体力 5点
function* FreePower() {
    try {
        const res = yield main.FreePower();
        console.log('FreePower', res)
    } catch (e) {
        console.log(e)
    }
}

//购买体力 （1点体力0.001eth）
function* BuyPower(action) {
    try {
        var value = web3.toWei(action.value * 0.001,'ether')
        const res = yield main.BuyPower(action.value,{value});
        console.log('BuyPower', res)
        yield put({type: "close_power_modal"});
    } catch (e) {
        console.log(e)
    }
}

//修炼 （1战斗值0.0001eth）
function* Training(action) {
    try {
        var value = web3.toWei(action.value * 0.0002,'ether');
        const res = yield main.Training(action.value,{value});
        console.log('Training', res)
        yield put({type: "close_fight_modal"});
    } catch (e) {
        console.log(e)
    }
}

//闯关 关卡的key值
function* UpgradeLevel(action) {
    try {
        const res = yield main.UpgradeLevel(action.key);
        console.log('UpgradeLevel', res)
    } catch (e) {
        console.log(e)
    }
}

//Read form api

const api = 'http://58.87.125.190:9996'
const get_free_monkey_count = '/travelmonkey/api/v1/get_free_monkey_count/'
const get_owner_info = '/travelmonkey/api/v1/get_owner_info/'
const get_monkey_info = '/travelmonkey/api/v1/get_monkey_info/'
const get_player_info = '/travelmonkey/api/v1/get_player_info/'
const get_own_min_value = '/travelmonkey/api/v1/get_own_min_value/'
const get_buy_min_value = '/travelmonkey/api/v1/get_buy_min_value/'
const get_level_length = '/travelmonkey/api/v1/get_level_length/'
const get_level_info = '/travelmonkey/api/v1/get_level_info/'
const get_training_value = '/travelmonkey/api/v1/get_training_value/'
const rank_list = '/travelmonkey/api/v1/rank_list/'
const get_player_length = '/travelmonkey/api/v1/get_player_length/'
const get_all_level_info = '/travelmonkey/api/v1/get_all_level_info/'

function* test() {
    //1,get from_address
    var from_address = yield web3.eth.getAccounts()
    console.log('from_address', from_address)
    //2,get monkey_key player_key
    let res = yield axios.get(api + get_owner_info + from_address);
    console.log('get_owner_info', res.data)
    const monkey_key = res.data[1]
    const player_key = res.data[0]
    if (res.data[1] == 0) {
        return
        let res = yield main.FreeMonkey();
        console.log('free_monkey', res)
        yield put({type: "set_monkey_key", data: res});
    }

    // console.log(apiCreator(from_address,monkey_key, player_key))
    // var apiParam = apiCreator(from_address,monkey_key, player_key)

    res = yield axios.get(api + get_player_info + player_key + '/' + from_address);
    var player = {
        key: res.data[0],
        owner: res.data[1],
        level: res.data[2],
        power: res.data[3],
        logintime: res.data[4],
        state: res.data[5]
    }
    console.log('get_player_info', player)

    res = yield axios.get(api + get_monkey_info + monkey_key + '/' + from_address);
    var monkey = {
        key: res.data[0],
        fight: res.data[1],
        state: res.data[2],
        level: res.data[3],
        owner: res.data[4],
        value: res.data[5]
    }
    console.log('get_monkey_info', monkey)

    var fight = monkey.fight

    //静态方法
    res = yield axios.get(api + get_free_monkey_count + from_address);
    console.log('get_free_monkey_count', res.data)

    res = yield axios.get(api + rank_list + from_address);
    console.log('战力猴子排行', res.data[0]);
    console.log('通关次数猴子排行', res.data[0]);

    res = yield axios.get(api + get_level_length + from_address);
    console.log('get_level_length', res.data)

    res = yield axios.get(api + get_level_info + player_key + '/' + from_address);
    var level = {
        key: res.data[0],
        difficulty: res.data[1],
        special: res.data[2],
        specialcount: res.data[3],
        allcount: res.data[4],
        addrange: res.data[5],
        addmin: res.data[6],
        state: res.data[7]
    }
    console.log('get_level_info', level)

    res = yield axios.get(api + get_player_length + from_address);
    var player_length = res.data
    console.log('get_player_length', player_length)

    res = yield axios.get(api + get_training_value + fight + '/' + from_address);
    var training_value = res.data
    console.log('get_training_value', training_value)

    res = yield axios.get(api + get_own_min_value + from_address);
    var own_min_value = res.data
    console.log('get_own_min_value', own_min_value)

    res = yield axios.get(api + get_buy_min_value + monkey_key + '/' + from_address);
    var buy_min_value = res.data
    console.log('get_buy_min_value', buy_min_value)

}

function* load() {
    console.log('load start')
    //1,get from_address
    var from_address = yield web3.eth.getAccounts()
    console.log('from_address', from_address)
    //2,get monkey_key player_key
    let res = yield axios.get(api + get_owner_info + from_address);
    console.log('get_owner_info', res.data)
    const monkey_key = res.data[1]
    const player_key = res.data[0]
    if (res.data[1] == 0) {
        yield put({type: "no_monkey"});
    } else {
        yield put({type: "has_monkey"});

        res = yield axios.get(api + get_player_info + player_key + '/' + from_address);
        var player = {
            key: res.data[0],
            owner: res.data[1],
            level: res.data[2],
            power: res.data[3],
            logintime: res.data[4],
            state: res.data[5]
        }
        console.log('set_player_info', player)
        var nextLevel = player.level + 1
        yield put({type: "set_player_info", player});

        res = yield axios.get(api + get_monkey_info + monkey_key + '/' + from_address);
        var monkey = {
            key: res.data[0],
            fight: res.data[1],
            state: res.data[2],
            level: res.data[3],
            owner: res.data[4],
            value: res.data[5]
        }
        console.log('set_monkey_info', monkey)
        yield put({type: "set_monkey_info", monkey});

        res = yield axios.get(api + get_all_level_info + from_address);
        console.log('get_level_info', res)
        var levelsRaw = res.data;
        var levels = []
        levelsRaw.map(levelRaw => {
            var level = {
                key: levelRaw[0],
                difficulty: levelRaw[1],
                special: levelRaw[2],
                specialcount: levelRaw[3],
                allcount: levelRaw[4],
                addrange: levelRaw[5],
                addmin: levelRaw[6],
                state: levelRaw[7]
            }
            levels.push(level)
        })
        console.log('levels', levels)
        yield put({type: "set_levels_info", levels});
        yield put({type: "set_next_difficulty", nextDifficulty:levels[nextLevel].difficulty});

    }

    //静态方法
    res = yield axios.get(api + get_free_monkey_count + from_address);
    console.log('get_free_monkey_count', res.data)

    res = yield axios.get(api + get_level_length + from_address);
    console.log('get_level_length', res.data)


    res = yield axios.get(api + rank_list + from_address);
    console.log('战力猴子排行', res.data[0]);
    console.log('通关次数猴子排行', res.data[1]);
    yield put({type: "set_rank_data", data: res.data});

    res = yield axios.get(api + get_player_length + from_address);
    var player_length = res.data
    console.log('get_player_length', player_length)


}

function* refreshRankData() {

}


function* mySaga() {
    yield takeEvery("load", load);
    yield takeEvery("refresh_rank_data", refreshRankData);

    yield takeEvery("buy_power", BuyPower);
    yield takeEvery("free_monkey", FreeMonkey)
    yield takeEvery("training", Training);
    yield takeEvery("free_power", FreePower);
    yield takeEvery("buy_monkey", BuyMonkey);
    yield takeEvery("upgrade_level", UpgradeLevel);

}


export default mySaga;
