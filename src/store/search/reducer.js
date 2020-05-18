/*
 * @Date: 2020-05-12 09:40:49
 * @LastEditors: gzk
 * @LastEditTime: 2020-05-18 17:15:51
 */

// information列表总数据

let defaultState = {
    slistAllData: [],// information列表总数据
    slistSearchAllData: [], // information列表搜索的全部数据
    slistPartData: [],// 列表在当前界面展示的数据
    ssearchInputValue: "",// 搜索输入框的值
    scurrentNum: 1, // 当前数据的页码
    spageSize: 10, //每一页多少条数据
    stotalPageNum: 1, // 默认总页数
};

function reducer(state = defaultState, action) {
    switch (action.type) {
        case "LIST_ALLPARTTOTAL_DATA": { // 用于初始总数据 更新全部数据、当前展示数据和总页数
            return {
                ...state,
                ...action.data,
            }
        }
        case "PART_CURRENT_BTN": { // 用于改变当前页码 更新当前展示数据，当前页码
            return {
                ...state,
                ...action.data,
            }
        }
        case "SEARCH_INPUT_VALUE": { // 用于搜索更新 输入框值、当前展示数据、搜索总数据、总页码
            return {
                ...state,
                ...action.data,
            }
        }
        case "COMPILE_POPUP_BTN": { // 用于编辑更新 总数据和搜索总数据
            return {
                ...state,
                ...action.data,
            }
        }

        default:
            return state;
    }
}

export default {
    reducer
};