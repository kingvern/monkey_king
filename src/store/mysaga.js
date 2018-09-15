import { put, takeEvery } from 'redux-saga/effects'
import axios from 'axios'

import { web3 } from "wallet";
const abi = require("../abi/MonkeyCore").abi;
const main = web3.loadContract(
    abi,
    "0x67da03db2943387c613439fba2375e18f8cf1e13"
);

console.log(main);

const api = 'http://www.baidu.com'

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* getLevelLength() {
   try {
      const res = yield main.GetLevelLength();
      console.log(res)
      yield put({type: "change_res", data: res.c[0]});
   } catch (e) {
      console.log(e)
   }
}

function* getPanelInfo() {
    try {
        const res = yield main.GetOwnerInfo();
        console.log(res)
        yield put({type: "set_panel_info", data: res});
    } catch (e) {
        console.log(e)
    }
}

function* getMonkeyInfo() {
    try {
        const res = yield main.GetMonkeyInfo();
        console.log(res)
        yield put({type: "set_panel_info", data: res});
    } catch (e) {
        console.log(e)
    }
}

function* getPlayerInfo() {
    try {
        const res = yield main.GetPlayerInfo();
        console.log(res)
        yield put({type: "set_panel_info", data: res});
    } catch (e) {
        console.log(e)
    }
}

function* getOwnerInfo() {
    try {
        const res = yield main.GetOwnerInfo();
        console.log(res)
        yield put({type: "set_panel_info", data: res});
    } catch (e) {
        console.log(e)
    }
}

function* getPanelInfo() {
    try {
        const res = yield main.GetOwnerInfo();
        console.log(res)
        yield put({type: "set_panel_info", data: res});
    } catch (e) {
        console.log(e)
    }
}

function* refreshRankData() {
    try {
        const res = yield axios.get('./data.json');
        console.log(res.data)
        yield put({type: "set_rank_data", data: res.data});
    } catch (e) {
        console.log(e)
    }
}


function* mySaga() {
  yield takeEvery("refresh_rank_data", refreshRankData);
  yield takeEvery("get_panel_info", getPanelInfo);
  yield takeEvery("get_level_length", getLevelLength);
}


export default mySaga;
