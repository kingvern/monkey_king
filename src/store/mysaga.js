import { put, takeEvery } from 'redux-saga/effects'
import axios from 'axios'

import { web3 } from "wallet";
const abi = require("../abi/MonkeyCore").abi;
const main = web3.loadContract(
    abi,
    "0x67da03db2943387c613439fba2375e18f8cf1e13"
);
console.log(main);

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* getLength() {
   try {
      const res = yield main.GetLevelLength();
      console.log(res)
      yield put({type: "change_res", data: res.c[0]});
   } catch (e) {
      console.log(e)
   }
}

function* initList() {
    try {
        const res = yield axios.get('./data.json');
        console.log(res.data)
        yield put({type: "init_list_data", data: res.data});
    } catch (e) {
        console.log(e)
    }
}


function* mySaga() {
  yield takeEvery("init_list", initList);
  yield takeEvery("get_length", getLength);
}


export default mySaga;
