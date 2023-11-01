
import Vue from 'vue'
import Vuex from 'vuex'

const actions = {
    sendLyricText({commit},payload){
        commit('storeLyricText',payload)
    },
    sendSongInform({commit},payload){
        commit('storeSongInform',payload)
    },
    sendIsPlay({commit},payload){
        commit('IsPlay',payload)
    }
}

const mutations = {
    storeLyricText(state,payload){
        state.lyricContain = payload
    },
    storeSongInform(state,payload){
        state.song ={... payload}
    },
    IsPlay(state,payload){
        state.IsPlay = payload
    }
}

const state = {
    lyricContain:[

    ],
    song:{

    },
    IsPlay:false
}

const getters = {

}

Vue.use(Vuex)
export default new Vuex.Store({
    actions,
    mutations,state,
    getters,
})