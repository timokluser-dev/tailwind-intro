<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
body {
  @apply bg-gray-50;
}

#app {
  @apply text-center;
  @apply text-vue-blue;
}

#nav {
  @apply p-5;

  a {
    @apply font-bold;
    @apply text-vue-blue;
    @apply uppercase;

    &.router-link-exact-active {
      @apply text-vue-green;
    }
  }
}
</style>
