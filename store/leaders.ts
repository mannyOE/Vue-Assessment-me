import { getterTree, mutationTree, actionTree } from 'typed-vuex'
import Axios from "axios";
import { Filter, Leader, StoreState } from '~/types/Leaders'

export const state = (): StoreState => ({
    leaders: [],
    filters: {
        page: 1,
        total_pages: 100
    }
})

export const getters = getterTree(state, {
    getLeaders: state => state.leaders,
    getFilters: state => state.filters
})

export const mutations = mutationTree(state, {
    SET_LEADERS(state, newValue: Leader[]) {
        state.leaders = newValue
    },
    SET_FILTERS(state, newValue: Filter) {
        state.filters = newValue
    },
})

export const actions = actionTree(
    { state, getters, mutations },
    {
        async initialise({ commit }, page) {
            let query = "";
            if (page) {
                query = query + "page=" + page
            }
            const { data } = await Axios.get("/wakatime/leaders?" + query, {
            })
            commit('SET_LEADERS', data.data)
            commit('SET_FILTERS', {
                page: data.page,
                total_pages: data.total_pages,
                range: data.range,
                language: data.language,
                country_code: data.country_code
            })
        }
    }
)
