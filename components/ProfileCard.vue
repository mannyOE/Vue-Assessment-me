<template>
    <div class="p-4 w-full">
        <div class="w-full flex justify-center">
            <img class="rounded w-52 h-52" :src="user?.photo + '?s=420'" alt="Extra large avatar" />
        </div>

        <div class="my-3">
            <div id="display_name" class="text-lg font-bold text-gray-800">{{ user?.display_name }}</div>
            <span class="italic" v-if="user?.username">@{{ user?.username }}</span>
            <span class="italic" v-else>@{{ user?.display_name }}</span>
        </div>

        <div class="mt-4">
            <div class="flex gap-2 my-1 text-xs items-center">
                <img id="icon" src="/map-pin.svg" alt="icon"> <span>{{ user?.city.name }}, {{
                    user?.city.country
                }}</span>
            </div>
            <div class="flex gap-2 mb-1 text-xs items-center" v-if="user?.is_email_public">
                <img id="icon" src="/mail.svg" alt="icon"> <span>{{ user?.email }}</span>
            </div>
            <div class="flex gap-2 mb-1 text-xs items-center" v-if="user?.website">
                <img id="icon" src="/link.svg" alt="icon"> <a :href="user.website" target="_blank">{{
                    user?.website
                }}</a>
            </div>
            <div class="flex gap-2 text-xs items-center" v-if="user?.is_hireable">
                <img id="icon" src="/send.svg" alt="icon"> <span
                    class="bg-indigo-100 text-indigo-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-indigo-900 dark:text-indigo-300">Hireable</span>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {


        return {}
    },
    computed: {
        user() {
            return this.$accessor.leaders.user;
        },
    },
})
</script>

<style scoped>
#display_name {
    margin-bottom: -10px;
}

#icon {
    height: 15px;
    width: 15px;
}
</style>