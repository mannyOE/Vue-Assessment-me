import { getAccessorType, mutationTree, actionTree } from 'typed-vuex'
import { Context } from '@nuxt/types'

import * as Leaders from './leaders'

export const state = () => ({
})

type RootState = ReturnType<typeof state>

export const getters = {
}

export const mutations = mutationTree(state, {
    initialiseStore() {
        console.log('initialised')
    },
})

export const actions = actionTree(
    { state, getters, mutations },
    {
        async nuxtServerInit(_vuexContext, nuxtContext: Context) {
            console.log(nuxtContext.req)
        },
    }
)

export const accessorType = getAccessorType({
    actions,
    getters,
    mutations,
    state,
    modules: {
        leaders: Leaders,
    },
})
