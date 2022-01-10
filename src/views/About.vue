<template>
  <div class="about">
    <button class="about__link" @click.prevent="onClick($event)">Click me</button>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

@Component
export default class About extends Vue {
  // eslint-disable-next-line
  onClick($event: any): void {
    console.debug('button clicked', $event);
  }
}
</script>

<style scoped lang="scss">
.about {
  &__link {
    @apply text-white bg-vue-blue rounded p-4 px-12;
    @apply transform-gpu;
    @apply transition-all duration-150 delay-75;

    // same as `@apply hover:bg-vue-green`
    &:hover {
      @apply bg-vue-green;
      @apply scale-110;
    }
  }
}
</style>
