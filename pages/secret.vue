<template>
  <h1>Secret page</h1>
</template>

<script>
    export default {
        middleware ({ store, redirect }) {
            // If the user is not authenticated
            if (!store.state.authenticated) {
                return redirect('/')
            }
        }
    }
</script>
