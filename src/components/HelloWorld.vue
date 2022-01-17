<template>
  <div class="hello">
    <h1 class="font-mono text-xl mb-4">{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>

    <div class="plugins">
      <h3 class="plugins__title">Installed CLI Plugins</h3>
      <div class="plugins__container flex flex-col justify-between lg:flex-row gap-5">
        <div class="plugins__container-item">
          <a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank"
             rel="noopener">babel</a>
        </div>
        <div class="plugins__container-item">
          <a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router" target="_blank"
             rel="noopener">router</a>
        </div>
        <div class="plugins__container-item">
          <a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex" target="_blank"
             rel="noopener">vuex</a>
        </div>
        <div class="plugins__container-item">
          <a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank"
             rel="noopener">eslint</a>
        </div>
        <div class="plugins__container-item">
          <a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-unit-jest" target="_blank"
             rel="noopener">unit-jest</a>
        </div>
        <div class="plugins__container-item">
          <a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-e2e-cypress" target="_blank"
             rel="noopener">e2e-cypress</a>
        </div>
        <div class="plugins__container-item order-first">
          <a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-typescript" target="_blank"
             rel="noopener">typescript</a>
        </div>
      </div>
    </div>

    <div class="essential-links">
      <h3 class="essential-links__title">Essential Links</h3>
      <ul class="essential-links__list">
        <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
        <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
        <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
        <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
        <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
      </ul>
    </div>

    <div class="links">
      <h3 class="links__title">Ecosystem</h3>
      <div class="links__container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div class="links__container-item lg:col-span-3">
          <a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a>
        </div>
        <div class="links__container-item lg:col-span-2">
          <a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a>
        </div>
        <div class="links__container-item">
          <a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a>
        </div>
        <div class="links__container-item">
          <a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a>
        </div>
        <div class="links__container-item">
          <a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.plugins {
  @apply mx-5;
}

.links {
  @apply m-4;

  &__container {
    &-item {
      @apply bg-gray-200 rounded;
      @apply border-2 border-transparent;

      &:hover {
        @apply border-vue-green border-2;
      }
    }
  }
}

h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
