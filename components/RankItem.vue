<template>
    <tr class="bg-white border-b text-gray-900">
        <th scope="row" class="px-6 py-4 whitespace-nowrap text-xs">
            {{ item.rank }}
        </th>
        <td class="px-3 py-4 flex items-center gap-1 text-xs">
            <img class="w-4 h-4 rounded-full" :src="item.user.photo" alt="Rounded avatar" />
            {{ item.user.display_name }}
        </td>
        <td class="px-3 py-4 text-xs">
            {{ item.running_total.human_readable_total }}
        </td>
        <td class="px-3 py-4 text-xs">
            {{ item.running_total.human_readable_daily_average }}
        </td>
        <td class="px-3 py-4 text-xs" v-html="item.running_total.languages_html">

        </td>
        <td class="px-3 py-4 text-xs flex items-center justify-between gap-2">
            <span v-if="item.user.is_hireable"
                class="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">hireable</span>
            <span v-else></span>
            <span :class="'fis fi fi-' + item.user?.city?.country_code?.toLocaleLowerCase()"></span>

        </td>
    </tr>
</template>

<script lang="ts">
import "/node_modules/flag-icons/css/flag-icons.min.css";
import type { PropType } from 'vue'
import { Leader } from '@/types/Leaders'

export default {
    props: {
        item: {
            type: Object as PropType<Leader>,
            required: true
        }
    }
}
</script>

<style scoped>

</style>