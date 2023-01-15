<template>
    <div class="p-4">
        <div class="flex justify-start">
            <div class="w-2/5 pr-5">
                <div class="flex py-1 items-center gap-5">
                    <div class="text-sm">LAST WEEK</div>
                    <div class="text-xl font-semibold">{{ summary?.human_readable_total }}</div>
                </div>
                <Progress :value="30" />

                <div class="flex my-3 text-sm">
                    <h4>LANGUAGES</h4>
                </div>

                <div class="flex items-center w-full" v-for="({ name, percent }, i) of summary?.languages" :key="i">
                    <span class="w-2/5 text-right px-2 text-xs">{{
                        name
                    }}</span>
                    <div class="px-1 w-3/5">
                        <Progress height_class="h-2" :value="percent" bg="bg-white"
                            :color="percent && percent >= 50 ? 'bg-yellow-700' : 'bg-purple-500'" />
                    </div>
                </div>
            </div>
            <div class="w-2/5 pl-5">
                <div class="flex py-1 items-center gap-5">
                    <div class="text-sm">DAILY AVERAGE</div>
                    <div class="text-xl font-semibold">{{ summary?.human_readable_daily_average }}</div>

                </div>
                <Progress :value="30" />

                <div class="my-3">
                    <div class="flex mb-3 text-sm">
                        <h4>EDITORS</h4>
                    </div>

                    <div class="flex items-center" v-for="(editor, i) of summary?.editors" :key="i">
                        <span class="w-2/5 text-xs text-right">{{ editor.name }}</span>
                        <div class="px-1 w-3/5">
                            <Progress height_class="h-2" :value="editor.percent" bg="bg-white"
                                :color="editor.percent && editor.percent >= 50 ? 'bg-yellow-700' : 'bg-purple-500'" />
                        </div>
                    </div>



                    <div class="flex my-3 text-sm">
                        <h4>OPERATING SYSTEMS</h4>
                    </div>

                    <div class="flex items-center" v-for="(editor, i) of summary?.operating_systems" :key="i">
                        <span class="w-2/5 text-xs text-right">{{ editor.name }}</span>
                        <div class="px-1 w-3/5">
                            <Progress height_class="h-2" :value="editor.percent" bg="bg-white"
                                :color="editor.percent && editor.percent >= 50 ? 'bg-yellow-700' : 'bg-purple-500'" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Progress from './Progress.vue';

export default defineComponent({
    setup() {
        return {};
    },
    components: { Progress },
    computed: {
        summary() {
            return this.$accessor.leaders.summary;
        },
        randomColor() {
            let colors = ['bg-orange-500', 'bg-purple-500', 'bg-rose-500', 'bg-yellow-700'];

        }
    }
})
</script>

<style scoped>
.text-xs {
    font-size: 10px;
}
</style>