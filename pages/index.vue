<template>
  <div class="p-3">

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
        <Paginate :progress="progress" @pageChanged="fetchLeaders" />
      </div>

    </div>

  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import RankItem from "@/components/RankItem.vue"
import Paginate from "@/components/Paginate.vue"

export default Vue.extend({
  components: { RankItem, Paginate },
  name: 'IndexPage',
  data() {
    return {
      progress: false,
    }
  },
  mounted: function () {
    this.fetchLeaders(Number(this.$route.query.page))
  },
  methods: {
    fetchLeaders: async function (page: number) {
      this.progress = true
      await this.$accessor.leaders.initialise(page)
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
