<template>
    <div>
        <ProfileBreadcrumbs />

        <div class="flex justify-center w-screen my-5">
            <div class="w-2/3 flex justify-between">
                <div class="w-1/4 h-96">
                    <ProfileCard />
                </div>
                <div class="w-3/4">
                    <SummaryCard />
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ProfileBreadcrumbs from '~/components/ProfileBreadcrumbs.vue'
import ProfileCard from "~/components/ProfileCard.vue"
import SummaryCard from "~/components/SummaryCard.vue"

export default defineComponent({
    setup() {
        return {};
    },
    data() {
        return {
            progress: false,
        };
    },
    mounted() {
        this.loadUserInfo();
    },
    computed: {
        user() {
            return this.$accessor.leaders.user;
        },
        userSummary() {
            return this.$accessor.leaders.summary;
        }
    },
    methods: {
        loadUserInfo: async function () {
            this.progress = true;
            // extract the user id
            let user = this.$route.params.leader;
            if (user) {
                user = user.replace("@", "");
            }
            await this.$accessor.leaders.getSummary(user);
            this.progress = false;
        }
    },
    components: { ProfileBreadcrumbs, ProfileCard, SummaryCard }
})
</script>

<style scoped>

</style>