import { getterTree, mutationTree, actionTree } from 'typed-vuex'
import Axios from "axios";
import { Country, Filter, Leader, StoreState, Summary, User } from '~/types/Leaders'


const Axios1 = Axios.create({
    baseURL: "https://wakatime.com/api/v1/"
})
const Axios2 = Axios.create({
    baseURL: "https://restcountries.com/v2/alpha/"
})
export const state = (): StoreState => ({
    leaders: [],
    country: undefined,
    filters: {
        page: 1,
        total_pages: 100
    }
})

export const getters = getterTree(state, {
    getLeaders: state => state.leaders,
    country: state => state.country,
    getFilters: state => state.filters,
    summary: state => state.summary,
    user: state => state.user
})

export const mutations = mutationTree(state, {
    SET_LEADERS(state, newValue: Leader[]) {
        state.leaders = newValue
    },
    SET_COUNTRY(state, newValue: Country) {
        state.country = newValue
    },

    SET_SUMMARY(state, newValue: Summary) {
        state.summary = newValue
    },

    SET_USER(state, newValue: User) {
        state.user = newValue
    },
    SET_FILTERS(state, newValue: Filter) {
        state.filters = newValue
    },
})

export const actions = actionTree(
    { state, getters, mutations },
    {
        async initialise({ commit }, { page, country_code, language, is_hireable }) {
            let query = "", exists = false;
            if (page) {
                query = query + "page=" + page
                exists = true
            }
            if (country_code) {
                if (exists) {
                    query = `${query}&country_code=${country_code}`
                } else {
                    query = `${query}country_code=${country_code}`
                }
                exists = true
            }
            if (language) {
                if (exists) {
                    query = `${query}&language=${language}`
                } else {
                    query = `${query}language=${language}`
                }
                exists = true
            }
            if (is_hireable) {
                if (exists) {
                    query = `${query}&is_hireable=${is_hireable}`
                } else {
                    query = `${query}is_hireable=${is_hireable}`
                }
                exists = true
            }
            const { data } = await Axios1.get("/leaders?" + query, {
            })
            commit('SET_LEADERS', data.data)
            commit('SET_FILTERS', {
                page: data.page,
                total_pages: data.total_pages,
                range: data.range,
                language: data.language,
                country_code: data.country_code
            })
        },
        async getCountry({ commit }, country_code) {
            const { data } = await Axios2.get("/" + country_code)
            commit('SET_COUNTRY', data)
        },
        async saveUser({ commit }, user) {
            commit('SET_USER', user)
        },
        async getSummary({ commit }, user_id) {
            const { data } = await Axios1.get("/users/" + user_id + "/stats/last_7_days")
            commit('SET_SUMMARY', data.data)
        }
    }
)
