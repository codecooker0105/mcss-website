<template>
  <div id="app">
      <component :is="layout">
        <transition name="slide-fade">
        <router-view />
        </transition>
      </component>
  </div>
</template>

<script>
const defaultLayout = 'default';
export default {
  computed: {
    layout() {
      return `${this.$route.meta.layout || defaultLayout}-layout`;
    },
  },
};
</script>

<style lang="scss">
html, body {
  width: auto!important;
  overflow-x: hidden!important
}
#app {
  font-family: Lato, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.slide-fade-enter-active {
  transition: all 0.8s ease;
}
.slide-fade-leave-active {
  transition: all 0.1s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(5vw);
  opacity: 0;
}

.slide-left-enter, .slide-left-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(-100vw);
}
.slide-left-enter-active {
  transition: all 0.3s ease;
}

.slide-right-enter, .slide-right-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(100vw);
}
.slide-right-enter-active {
  transition: all 0.3s ease;
}
</style>
