import VuexPersistence from 'vuex-persist'

export default ({ store }) => {
    new VuexPersistence({
        storage: window.localStorage,
        key: "Kippa",
        modules: ['leaders']
        /* your options */
    }).plugin(store);
}