<template>
  <h1>Stars: {{ $store.state.stars }}</h1>
</template>
<template>
  <ul>
    <li v-for="todo in todos">
      <input type="checkbox" :checked="todo.done" @change="toggle(todo)">
      <span :class="{ done: todo.done }">{{ todo.text }}</span>
    </li>
    <li><input placeholder="What needs to be done?" @keyup.enter="addTodo"></li>
  </ul>
</template>

<script>
    import { mapMutations } from 'vuex'

    export default {
        computed: {
            todos () {
                return this.$store.state.todos.list
            }
        },
        methods: {
            addTodo (e) {
                this.$store.commit('todos/add', e.target.value)
                e.target.value = ''
            },
            ...mapMutations({
                toggle: 'todos/toggle'
            })
        },
        async fetch ({ store, params }) {
            await store.dispatch('GET_STARS');
        },
        middleware: 'stats'
    }

</script>

<style>
  .done {
    text-decoration: line-through;
  }
</style>
