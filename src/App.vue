<template>
  <div id="app" class="bg-gray-50">
    <div class="app__nav fixed w-full bg-gray-50">
      <div id="nav" class="nav">
        <router-link to="/">Home</router-link>
        <span class="nav__separator">|</span>
        <router-link to="/about">About</router-link>
      </div>
    </div>
    <div class="app__background w-full h-full min-h-screen"></div>
    <div class="app__content h-4/5 py-10">
      <router-view/>
    </div>
  </div>
</template>

<style lang="scss">
.app {
  &__background {
    background-image: url("assets/app-bg.jpg");
    @apply bg-no-repeat bg-cover bg-bottom bg-fixed;
  }
}

.nav {
  @apply align-middle;

  &__separator {
    @apply px-1.5;
  }
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
