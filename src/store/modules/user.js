const state = {
    avatar: '',
}

const mutations = {

    SET_AVATAR: (state, avatar) => {
        state.avatar = avatar
    }
}

const actions = {}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}