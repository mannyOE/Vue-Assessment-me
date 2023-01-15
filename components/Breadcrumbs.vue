<template>
    <div>

        <!-- Breadcrumb -->
        <nav class="flex justify-between items-center px-5 py-3 text-gray-900 border" aria-label="Breadcrumb">
            <ol class="inline-flex items-center space-x-1 md:space-x-3">
                <li class="inline-flex items-center">
                    <a @click.prevent="queryHome" href="#"
                        class="inline-flex items-center text-sm font-medium text-gray-700  dark:text-gray-400">
                        <svg aria-hidden="true" class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z">
                            </path>
                        </svg>
                        Home
                    </a>
                </li>
                <li v-if="languageFilter" aria-current="page">
                    <div class="flex items-center">
                        <svg aria-hidden="true" class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clip-rule="evenodd"></path>
                        </svg>
                        <a href="#" @click.prevent="queryLanguage"
                            class="ml-1 text-sm font-medium text-gray-700 md:ml-2 dark:text-gray-400 ">{{
                                languageFilter
                            }}</a>
                    </div>
                </li>

                <li v-if="countryFilter" aria-current="page">
                    <div class="flex items-center">
                        <svg aria-hidden="true" class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clip-rule="evenodd"></path>
                        </svg>
                        <a @click.prevent="queryCountry" href="#"
                            class="ml-1 text-sm font-medium text-gray-700 md:ml-2 dark:text-gray-400">{{
                                countryFilter
                            }}</a>
                    </div>
                </li>

                <li v-if="hireableFilter" aria-current="page">
                    <div class="flex items-center">
                        <svg aria-hidden="true" class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clip-rule="evenodd"></path>
                        </svg>
                        <a href="" @click.prevent="queryHireable"
                            class="ml-1 text-sm font-medium text-gray-700 md:ml-2 dark:text-gray-400 ">Hireable</a>
                    </div>
                </li>
            </ol>

            <div>
                <Paginate :progress="progress" />
            </div>
        </nav>

    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Country } from '~/types/Leaders';
import Paginate from './Paginate.vue';

export default defineComponent({
    props: {
        progress: {
            type: Boolean,
            required: true,
            default: false,
            readonly: true
        }
    },
    setup() {
        return {};
    },
    components: { Paginate },
    methods: {
        queryCountry() {
            let query = { ...this.$route.query };
            delete query.is_hireable
            this.$router.push({ query })

        },
        queryHireable() {
            let query = { ...this.$route.query };
            this.$router.push({ query })

        },
        queryLanguage() {
            let query = { ...this.$route.query };
            delete query.is_hireable
            delete query.country_code
            this.$router.push({ query })
        },
        queryHome() {
            let query = { ...this.$route.query };
            delete query.is_hireable
            delete query.country_code
            this.$router.push({ query, path: "/leaders/" })
        }
    },
    computed: {
        languageFilter(): string | null {
            let language = null;
            if (this.$route.params.language) {
                //@ts-ignore
                language = this.$route.params.language;
            }
            return language;
        },
        countryObject(): Country {
            //@ts-ignore
            return this.$accessor.leaders.country
        },
        countryFilter(): string | null {
            let country = null;
            if (this.$route.query.country_code) {
                //@ts-ignore
                country = this.$route.query.country_code;
                if (this.countryObject) {
                    country = this.countryObject.name
                }
            }
            //@ts-ignore
            return country;
        },
        hireableFilter(): boolean {
            let hireable = false;
            if (this.$route.query.is_hireable) {
                //@ts-ignore
                hireable = this.$route.query.is_hireable;
            }
            return hireable;
        }
    }
})
</script>

<style scoped>

</style>