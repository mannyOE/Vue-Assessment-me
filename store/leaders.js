import Vue from 'vue'
import Vuex from 'vuex'
import PersistPlugin from "@/plugins/vuex-persist"

Vue.use(Vuex)

const leadersStore = new Vuex.Store < State > ({
    state: {

    },
    plugins: [PersistPlugin]
})

export default leadersStore