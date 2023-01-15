<template>
    <div class="w-full">

        <form class="flex items-center w-full" id="searchform">
            <label for="simple-search" class="sr-only">Search</label>
            <div class="relative w-full">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor"
                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                            clip-rule="evenodd"></path>
                    </svg>
                </div>
                <input v-model="searchField" @focusin="onfocus" type="text" id="simple-search"
                    class=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search..." />

                <div v-if="users.length > 0" id="dropdown" :class="showDropdown"
                    class="z-10 divide-y absolute bg-white text-gray-900 rounded shadow w-full overflow-scroll">
                    <ul class="py-1 text-sm text-gray-700" aria-labelledby="dropdownDefaultButton">
                        <li @click="gotoUser(user)" v-for="(user, i) of users" :key="i">
                            <a href="#" class="block px-4 py-2 hover:bg-gray-100  dark:hover:text-gray-700">{{
                                user.display_name
                            }}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </form>




    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Leader, User } from '~/types/Leaders'

export default defineComponent({
    setup() {


        return {}
    },
    data() {
        return {
            showDropdown: "hidden",
            searchField: ""
        }
    },
    computed: {
        getLeaders() {
            return this.$accessor.leaders.getLeaders
        },
        users() {
            let leaders = this.getLeaders
            if (this.searchField.length > 0) {
                var regexp = new RegExp("^" + this.searchField, "i");
                return leaders.filter((leader: Leader) => regexp.test(leader.user.display_name)).map((leader: Leader) => {
                    return leader.user
                })
            }
            return leaders.map((leader: Leader) => {
                return leader.user
            })
        }
    },
    mounted() {
        document.addEventListener('click', this.eventHandler);
    },
    methods: {
        onfocus() {
            this.showDropdown = ""
        },
        async gotoUser(user: User) {
            this.searchField = user.display_name
            var access = document.getElementById(user.id);
            if (access) {
                const offset = 80;
                const bodyRect = document.body.getBoundingClientRect().top;
                const elementRect = access.getBoundingClientRect().top;
                const elementPosition = elementRect - bodyRect;
                const offsetPosition = elementPosition - offset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
                setTimeout(() => {
                    access.classList.add("animate__flash")
                }, 500)
            }
            this.showDropdown = "hidden"
        },

        eventHandler(e: MouseEvent) {
            const container = document.getElementById('searchform');
            if (!container || !container.contains(e.target)) {
                this.showDropdown = "hidden"
            } else {
            }
        }
    }
})
</script>

<style scoped>
#dropdown {
    max-height: 15rem;
    min-height: 0px;
}
</style>