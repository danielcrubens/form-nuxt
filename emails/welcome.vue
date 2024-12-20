<script setup>
// Import what you need from vue.
import { defineProps, computed } from 'vue'

const props = defineProps({
  name: String
})

const username = computed(() => props.name.toUpperCase())
</script>

<template>
  <section>
    <Layout>
      <!-- Importing Components that lives inside the emails folder is supported -->
      <h1>Welcome {{ username }}</h1>
    </Layout>
  </section>
</template>

