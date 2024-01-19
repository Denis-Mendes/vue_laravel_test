<!-- resources/js/pages/UsersList.vue -->

<template>
  <div>
    <h1>Users List</h1>
    <ul>
      <li v-for="user in users" :key="user.id">
        {{ user.name }}
        <RouterLink :to="{ name: 'users-edit', params: { id: user.id } }">Edit</RouterLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const users = ref([])

onMounted(async () => {
  // Fetch users when the component is mounted
  // Assuming you have a fetchUsers action in your Vuex store
  await this.$store.dispatch('user/fetchUsers')
  users.value = this.$store.state.user.users
})
</script>
