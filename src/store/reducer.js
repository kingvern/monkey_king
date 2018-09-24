import images from '../theme/images'

const initState = {
	avatar: images.avatar,
    avatar_bg:images.avatar_bg,
    avatar_fg: images.avatar_fg,
	res: '',
    fight: 0,
	state: true,
	level: 0,
	power: 100,
    rankIsOpen: false,
    modalIsOpen: true,
    levelIsOpen: false,
    HistoryIsOpen: false,
    powerIsOpen: false,
    fightIsOpen: false,
    nameInput: '',
    powerInput: '5',
    fightInput: '',
	name: '',
    rankData:[1,2,3,4,5],
    fightRankData:[],
    timesRankData:[],
    monkey:[],
    player:[],
    levels:[],
    hasMonkey:false,
    nextDifficulty:0,
    curLevelPage:0,
    fistLevelPage: 'showStyle',
    secondLevelPage: 'hideStyle',
    curHistoryPage:0,
    fistHistoryPage: 'showStyle',
    secondHistoryPage: 'hideStyle',
    levelRes:[
        {
            title:'第九难 陡涧换马',
            avatar:images.level_01_s,
            image:images.level_01,
            story:'在蛇盘山鹰愁涧，小白龙吃掉唐僧的白马，唐僧落泪，悟空恼怒，六丁六甲、五方揭谛、四值功曹、一十八珈蓝奉观音菩萨差遣，前来轮流当值暗中保护唐僧，孙悟空打的小白龙不敢露头，派金头揭谛请来观音菩萨收服小白龙，将小白龙变成白马，当唐僧西天取经路上的坐骑。'
        },
        {
            title:'第十二难 收降八戒',
            avatar:images.level_02_s,
            image:images.level_02,
            story:'唐僧和孙悟空路径高老庄，帮老高头收服霸占他三闺女高翠兰的福陵山云栈洞猪妖——猪刚鬣，这猪刚鬣曾被观音菩萨点化的，要给唐僧做徒弟的，他本名猪刚鬣，观音菩萨给他取法名猪悟能，唐僧又给他去个名字叫猪八戒。'         },
        {
            title:'第十六难 收得沙僧',
            avatar:images.level_03_s,
            image:images.level_03,
            story:'讲猪八戒难降水妖，孙悟空下水又不行，没办法，求观音菩萨派惠岸收服水妖，点化水妖给唐僧做徒弟，取名沙僧沙悟净的事。这一难跟第十五难也能合为一难，有凑数嫌疑。'
        },
        {
            title:'第十八难 五庄观中',
            avatar:images.level_04_s,
            image:images.level_04,
            story:'唐僧师徒途径万寿山五庄观，孙悟空三人偷吃人参果被清风明月发现后一顿痛骂，孙悟空难忍被骂，推倒人参果树，半夜偷跑出五庄观被赶来的镇元大仙用一招“袖里乾坤”抓回五庄观，严刑拷打之事。'
        },
        {
            title:'第二十难 贬退心猿',
            avatar:images.level_05_s,
            image:images.level_05,
            story:'唐僧师徒四人西行路过白虎岭，尸魔白骨夫人三次变成良善之辈欲抓唐僧，吃唐僧（吃唐僧肉可长生不老的言论从这里开始），三次都被孙悟空识破，最终被孙悟空打死，但此时的唐僧还是肉眼凡胎，以为孙悟空胡乱杀生，又经猪八戒从旁挑唆，唐僧恼恨，辞退孙悟空。'
        },
        {
            title:'第二十八难 号山逢怪',
            avatar:images.level_06_s,
            image:images.level_06,
            story:'唐僧师徒不畏惧风餐露宿，继续西行，途径号山，遭遇枯松涧火云洞牛魔王之子圣婴大王红孩儿，孙悟空明知红孩儿是妖魔，但是唐僧对他有些反感，孙悟空怕说破了唐僧不信，反而念紧箍咒咒他，便不敢说破。古灵精怪的红孩儿不叫猪八戒他们驮，主动叫孙悟空背着他，孙悟空嘿嘿冷笑，见唐僧在前面走远了些后，惯摔红孩儿。'
        },
        {
            title:'第四十二难 吃水遭毒',
            avatar:images.level_07_s,
            image:images.level_07,
            story:'唐僧师徒离开金兜山，来到西梁女国，不知道这里的河水不能乱喝，喝了就会怀孕生孩子，结果唐僧和猪八戒误饮了子母河里的泉水，开始快速怀胎，三日后便产子。经老婆婆指点得知，解阳山破儿洞里有口落胎泉，喝一口那泉水，就能堕胎。于是孙悟空来到解阳山破儿洞，打败想守着落胎泉发财的、不肯让孙悟空打捞泉水的牛魔王弟弟、红孩儿的叔叔——如意真仙，取来落胎泉的泉水给唐僧、八戒喝，二人这才消了肿胀，肚里怀的胎儿化成血团肉块。'
        },
        {
            title:'第四十六难 难辨猕猴',
            avatar:images.level_08_s,
            image:images.level_08,
            story:'孙悟空被贬后，没脸回花果山更没脸访友，去了南海找观音菩萨诉苦，观音菩萨叫他暂住南海。不曾想，六耳猕猴假冒孙悟空，来找唐僧，想代替孙悟空西天取经，见唐僧不搭理他，火上心头，打倒唐僧，抢了包裹行李自己要去取经，后被孙悟空知道，两人打将起来，功夫不分伯仲，难见高低，为分辨二人真假，先后到唐僧处、到观音处、到天庭、到地府具不能说明白、讲明白，后来打到如来佛祖的灵山大雷音寺殿前，如来用钵盂收服六耳猕猴，孙悟空一棒子打死六耳猕猴。'
        },
        {
            title:'第四十八难 求取蕉扇',
            avatar:images.level_09_s,
            image:images.level_09,
            story:'孙悟空来到翠云山找铁扇公主借芭蕉扇，铁扇公主怪孙悟空害了他儿子红孩儿，不仅不借芭蕉扇，还一扇子讲孙悟空扇到了小须弥山，灵吉菩萨送孙悟空定风丹，来到翠云山，找铁扇公主再借芭蕉扇，铁扇公主还拿芭蕉扇扇孙悟空，见芭蕉扇扇不动孙悟空，跑进洞里不出来了。孙悟空想办法跑进罗刹女肚子里折腾，疼痛不已的罗刹女假意屈服，那个假的芭蕉扇糊弄孙悟空，孙悟空回火焰山煽风，结果适得其反，火焰山的火势越扇越旺盛。'
        },
        {
            title:'第四十九难 收缚魔王',
            avatar:images.level_10_s,
            image:images.level_10,
            story:'孙悟空十分气恼，后经火焰山土地提示，孙悟空找旧日的异性兄弟牛魔王索借芭蕉扇，牛魔王不借，二人大打出手，战罢一时，牛魔王竟然不顾孙悟空，骑着避水金晶兽到碧波潭赴约去了。孙悟空借机假冒牛魔王，从铁扇公主那里骗出芭蕉扇，不想，半道上又被牛魔王变的猪八戒骗了回去，自此，孙悟空和牛魔王彻底撕破脸，牛魔王大战孙悟空，不敌想逃跑，结果四面八方都有如来佛祖派来的人阻挡牛魔王去路，危机时刻，天庭的托塔李天王和哪吒父子又过来绞杀牛魔王，牛魔王不敌，眼看就要被杀，为了保命，赶紧向西方佛界投降。'

        },
        {
            title:'第五十九难 七情迷没',
            avatar:images.level_10_s,
            image:images.level_10,
            story:'话说三藏师徒别了朱紫国，来到盘丝岭，遭遇盘丝洞的七个蜘蛛精，先是唐僧被抓，后是孙悟空变老鹰叼走七个正在洗澡女妖精的衣物，再后来，猪八戒调戏七个貌美如花的女妖精不成，反而被七个蜘蛛精吐出的蜘蛛网捆住，再后来，孙悟空救出唐僧和猪八戒，七个蜘蛛精逃跑。'
        },
    ]
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
        newState.HistoryIsOpen = false;
        return newState;
    }
    if( action.type === 'hide_level'){
        const newState = JSON.parse(JSON.stringify(state));
        newState.levelIsOpen = false;
        return newState;
    }
    if( action.type === 'goto_firstPage'){
        const newState = JSON.parse(JSON.stringify(state));
        newState.fistLevelPage = 'showStyle';
        newState.secondLevelPage = 'hideStyle';
        return newState;
    }
    if( action.type === 'goto_secondPage'){
        const newState = JSON.parse(JSON.stringify(state));
        newState.fistLevelPage = 'hideStyle';
        newState.secondLevelPage = 'showStyle';
        return newState;
    }

    //History

    if( action.type === 'show_History'){
        const newState = JSON.parse(JSON.stringify(state));
        newState.HistoryIsOpen = true;
        newState.levelIsOpen = false;
        return newState;
    }
    if( action.type === 'hide_History'){
        const newState = JSON.parse(JSON.stringify(state));
        newState.HistoryIsOpen = false;
        return newState;
    }
    if( action.type === 'goto_firstPage_h'){
        const newState = JSON.parse(JSON.stringify(state));
        newState.fistHistoryPage = 'showStyle';
        newState.secondHistoryPage = 'hideStyle';
        return newState;
    }
    if( action.type === 'goto_secondPage_h'){
        const newState = JSON.parse(JSON.stringify(state));
        newState.fistHistoryPage = 'hideStyle';
        newState.secondHistoryPage = 'showStyle';
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
