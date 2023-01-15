<template>
    <PageComponent />
</template>

<script lang="ts">
import Vue from 'vue'
import PageComponent from '~/components/PageComponent.vue'

export default Vue.extend({
    components: { PageComponent },
    name: 'IndexPage',
})
</script>
