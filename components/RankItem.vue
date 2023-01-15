<template>
    <tr :id="item.user.id" class="bg-white animate__animated  border-b text-gray-900">
        <th scope="row" class="px-6 py-4 whitespace-nowrap text-xs">
            {{ item.rank }}
        </th>
        <td class="px-3 py-4 flex items-center gap-1 text-xs">
            <img class="w-4 h-4 rounded-full" :src="item.user.photo" alt="Rounded avatar" />
            <span @click="loadUserProfile(item.user)" class="text-base text-blue-700 hover:underline cursor-pointer">{{
                item.user.display_name
            }}</span>
        </td>
        <td class="px-3 py-4 text-xs">
            {{ item.running_total.human_readable_total }}
        </td>
        <td class="px-3 py-4 text-xs">
            {{ item.running_total.human_readable_daily_average }}
        </td>
        <td class="px-3 py-4 text-xs">
            <div class="text-ellipsis overflow-hidden whitespace-nowrap flex gap-1 w-96">
                <span class="cursor-pointer hover:underline" v-for="(language, index) of item.running_total.languages"
                    @click="queryLanguage(language.name)" :key="index">{{ language.name }}</span>
            </div>
        </td>
        <td class="px-3 py-4 text-xs flex items-center justify-between gap-2">
            <span @click="queryHireable()" v-if="item.user.is_hireable"
                class="bg-blue-100 cursor-pointer text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">hireable</span>
            <span v-else></span>
            <span @click="queryCountry(item.user.city.country_code)"
                :class="'fis cursor-pointer fi fi-' + item.user?.city?.country_code?.toLocaleLowerCase()"></span>

        </td>
    </tr>
</template>

<script lang="ts">
import "/node_modules/flag-icons/css/flag-icons.min.css";
import { defineComponent, PropType } from 'vue'
import { Leader, User } from '@/types/Leaders'

export default defineComponent({
    props: {
        item: {
            type: Object as PropType<Leader>,
            required: true
        }
    },
    methods: {
        queryCountry(c_code: string) {
            let query = { ...this.$route.query };
            query['country_code'] = c_code
            this.$router.push({ query })

        },
        queryHireable() {
            let query = { ...this.$route.query, is_hireable: 'true' };
            this.$router.push({ query })

        },
        loadUserProfile(user: User) {
            let query = this.$route.query
            this.$accessor.leaders.saveUser(user)
            this.$router.push({ path: `/@${user.id}`, query })
        },
        queryLanguage(language: string) {
            let query = { ...this.$route.query };
            this.$router.push({ path: "/leaders/language/" + language, query })

        }
    }
})
</script>

<style scoped>

</style>

