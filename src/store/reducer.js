import images from '../theme/images'

const initState = {
	avatar: images.avatar,
	res: '',
    fight: 0,
	state: true,
	level: 0,
	power: 100,
    rankIsOpen: false,
    modalIsOpen: true,
    levelIsOpen: false,
    powerIsOpen: false,
    fightIsOpen: false,
    nameInput: '',
    powerInput: '',
    fightInput: '',
	name: '',
    rankData:[1,2,3,4,5],
    fightRankData:[],
    timesRankData:[],
    monkey:[],
    player:[],
    levels:[],
    hasMonkey:false,
    nextDifficulty:0
}

export default (state = initState,action) => {
    //init

    if( action.type === 'no_monkey') {
        const newState = JSON.parse(JSON.stringify(state));
        newState.hasMonkey = false;
        return newState;
    }

    if( action.type === 'has_monkey') {
        const newState = JSON.parse(JSON.stringify(state));
        newState.hasMonkey = true;
        return newState;
    }
    if( action.type === 'set_monkey_info') {
        const newState = JSON.parse(JSON.stringify(state));
        newState.monkey = action.monkey;
        console.log('newState',newState)
        return newState;
    }

    if( action.type === 'set_player_info') {
        const newState = JSON.parse(JSON.stringify(state));
        newState.player = action.player;
        // console.log('newState',newState)
        return newState;
    }
    if( action.type === 'set_levels_info') {
        const newState = JSON.parse(JSON.stringify(state));
        newState.levels = action.levels;
        console.log('newState',newState)
        return newState;
    }

    if( action.type === 'set_next_difficulty') {
        const newState = JSON.parse(JSON.stringify(state));
        newState.nextDifficulty = action.nextDifficulty;
        console.log('newState',newState)
        return newState;
    }

	//rankList
    if( action.type === 'set_rank_data'){
        const newState = JSON.parse(JSON.stringify(state));
        newState.fightRankData = action.data[0];
        newState.timesRankData = action.data[1];
        return newState;
    }

    if( action.type === 'show_rank'){
        const newState = JSON.parse(JSON.stringify(state));
        newState.rankIsOpen = true;
        return newState;
    }
    if( action.type === 'hide_rank'){
        const newState = JSON.parse(JSON.stringify(state));
        newState.rankIsOpen = false;
        return newState;
    }

    //LevelList

    if( action.type === 'show_level'){
        const newState = JSON.parse(JSON.stringify(state));
        newState.levelIsOpen = true;
        return newState;
    }
    if( action.type === 'hide_level'){
        const newState = JSON.parse(JSON.stringify(state));
        newState.levelIsOpen = false;
        return newState;
    }

    //modal
    if( action.type === 'change_power_input'){
        const newState = JSON.parse(JSON.stringify(state));
        newState.powerInput = action.value;
        return newState;
    }
    if( action.type === 'set_name'){
        const newState = JSON.parse(JSON.stringify(state));
        newState.name = action.value;
        newState.powerIsOpen = false;
        return newState;
    }
    if( action.type === 'open_power_modal'){
        const newState = JSON.parse(JSON.stringify(state));
        newState.powerIsOpen = true;
        return newState;
    }
    if( action.type === 'close_power_modal'){
        const newState = JSON.parse(JSON.stringify(state));
        newState.powerIsOpen = false;
        return newState;
    }

    if( action.type === 'have_monkey') {
        const newState = JSON.parse(JSON.stringify(state));
        newState.hasMonkey = true;
        return newState;
    }


    if( action.type === 'change_fight_input'){
        const newState = JSON.parse(JSON.stringify(state));
        newState.fightInput = action.value;
        return newState;
    }
    if( action.type === 'open_fight_modal'){
        const newState = JSON.parse(JSON.stringify(state));
        newState.fightIsOpen = true;
        return newState;
    }
    if( action.type === 'close_fight_modal'){
        const newState = JSON.parse(JSON.stringify(state));
        newState.fightIsOpen = false;
        return newState;
    }

	//example

    if( action.type === 'load_data') {
        const newState = JSON.parse(JSON.stringify(state));
        newState.res = action.data;
        return newState;
    }

    //
	if( action.type === 'init_list_data'){
		const newState = JSON.parse(JSON.stringify(state));
		newState.list = action.data;
		return newState;
	}
	if( action.type === 'change_input_value'){
		const newState = JSON.parse(JSON.stringify(state));
		newState.inputValue = action.value;
		return newState;
	}
	if( action.type === 'add_input_value'){
		const newState = JSON.parse(JSON.stringify(state));
		newState.list.push(newState.inputValue);
		newState.inputValue = '';
		return newState;
	}
	if( action.type === 'del_input_value'){
		const newState = JSON.parse(JSON.stringify(state));
		newState.list.splice(action.value, 1);
		return newState;
	}
    if( action.type === 'change_res'){
        const newState = JSON.parse(JSON.stringify(state));
        newState.res = action.data;
        return newState;
    }

	return state;
}
