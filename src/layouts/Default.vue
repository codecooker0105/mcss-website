<script>
import NavBar from '../components/NavBar.vue';

export default {
  components: {
    NavBar,
  },
};
</script>

<template>
  <div>
    <nav-bar />
    <div>
      <slot />
    </div>
  </div>
</template>
