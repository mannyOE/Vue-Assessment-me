<template>
    <div class="w-full" :class="`dark:${bg} ${bg} ${height_class}`">
        <div :class="`${color} ${height_class}`" :style="{ width: `${value}%` }"></div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        value: {
            type: Number,
            required: false,
            default: 0
        },
        height_class: {
            type: String,
            required: false,
            default: "h-2.5"
        },
        color: {
            type: String,
            required: false,
            default: 'bg-yellow-600'
        },
        bg: {
            type: String,
            required: false,
            default: 'bg-gray-200'
        }
    },
    setup() {


        return {}
    }
})
</script>

<style scoped>

</style>