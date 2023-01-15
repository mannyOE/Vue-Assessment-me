<template>
    <div class="p-3">
        <div>
            <Breadcrumbs :progress="progress" />
        </div>
        <div class="w-96 py-3">
            <SearchForm />
        </div>
        <div class="relative overflow-x-auto">
            <table class="w-full text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-900 uppercase">
                    <tr>
                        <th scope="col" class="px-6 text-xs py-3 text-xs">
                            Rank
                        </th>
                        <th scope="col" class="px-3 text-xs py-3">
                            Programmer
                        </th>
                        <th scope="col" class="px-3 text-xs py-3">
                            Hours Coded
                        </th>
                        <th scope="col" class="px-3 text-xs py-3">
                            Daily Average
                        </th>
                        <th scope="col" class="px-3 text-xs py-3">
                            Languages used
                        </th>
                        <th scope="col" class="px-6 text-xs py-3">

                        </th>
                    </tr>
                </thead>
                <tbody>
                    <RankItem v-for="(item, key) of getLeaders" :key="key" :item="item" />
                </tbody>
            </table>



            <div class="flex justify-center py-6 mb-5">
                <Paginate :progress="progress" />
            </div>

        </div>

    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import RankItem from "@/components/RankItem.vue"
import Paginate from "@/components/Paginate.vue"
import Breadcrumbs from '~/components/Breadcrumbs.vue'
import SearchForm from './SearchForm.vue'

export default Vue.extend({
    components: { RankItem, Paginate, Breadcrumbs, SearchForm },
    name: 'IndexPage',
    watch: {
        '$route.query.page': function () {
            let language = this.$route.params.language;
            let others = this.$route.query
            this.fetchLeaders({ ...others, language })
        },
        '$route.query.is_hireable': function () {
            let language = this.$route.params.language;
            let others = this.$route.query
            this.fetchLeaders({ ...others, language })
        },
        '$route.query.language': function () {
            let language = this.$route.params.language;
            let others = this.$route.query
            this.fetchLeaders({ ...others, language })
        },
        '$route.query.country_code': function (country_code: string) {
            this.$accessor.leaders.getCountry(country_code)
            let language = this.$route.params.language;
            let others = this.$route.query
            this.fetchLeaders({ ...others, language })
        }
    },
    data() {
        return {
            progress: false,
        }
    },
    mounted: function () {
        if (this.$route.query.country_code) {
            this.$accessor.leaders.getCountry(this.$route.query.country_code)
        }
        let language = this.$route.params.language;
        let others = this.$route.query
        this.fetchLeaders({ ...others, language })
    },
    methods: {
        fetchLeaders: async function ({ page, country_code, language, is_hireable }: { page?: number, country_code?: string, language?: string, is_hireable?: boolean }) {
            this.progress = true
            await this.$accessor.leaders.initialise({ page, country_code, language, is_hireable })
            this.progress = false
        }
    },
    computed: {
        getLeaders() {
            return this.$accessor.leaders.getLeaders
        },
        getFilters() {
            return this.$accessor.leaders.getFilters
        }
    }
})
</script>
