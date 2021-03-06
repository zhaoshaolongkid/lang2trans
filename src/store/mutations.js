//写方法
import {
    SET_CHANNEL,
    GET_DETECTLANG,
    SET_ORIGNLANG,
    GET_GOALLANG,
    GET_TRANSLATION,
    SAVE_QUERYTEXT,
    ISCHECKED
} from './mutation-types.js'

export default {
    //获取翻译渠道
    [SET_CHANNEL](state, channel) {
        state.channel = channel
    },
    //获取检测语种
    [GET_DETECTLANG](state, lang) {
        state.langFrom = lang
    },
    //获取目标语种
    [GET_GOALLANG](state, lang) {
        state.langTo = lang
    },
    //获取翻译结果
    [GET_TRANSLATION](state, result) {
        state.result = result
    },
    //保存查询文本
    [SAVE_QUERYTEXT](state, query) {
        state.query = query
    },
    // 是否检测到源语种
    [ISCHECKED](state, ischecked) {
        state.hasChecked = ischecked
    }
}