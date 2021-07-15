<template lang="html">
  <transition name="modal-fade">
    <div class="modal-backdrop" @click="close">
      <div class="modal"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
        <header
          class="modal-header"
          id="modalTitle"
        >
          <slot name="header" style="color:">
            <div class="cover-empty"></div>
            <button
              type="button"
              class="btn-close"
              @click="close"
              aria-label="Close modal"
            >
              ×
            </button>
          </slot>
        </header>
        <img :src="image" />
      </div>
    </div>
  </transition>
</template>

<script>

export default {
  props: ['image'],
  methods: {
    close() {
      this.$emit('close');
    },
  },
};
</script>

<style lang="scss" scoped>
@media screen and (max-width: 1000px) {
  .modal {
    max-width: 100%;
  }
}

@media screen and (min-width: 1000px) {
  .modal {
    max-width: 100%;
  }
}
.modal-backdrop {
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 1;
  overflow-y: auto;
}

.modal {
  position: static;
  background: white;
  box-shadow: 2px 2px 20px 1px;
  display: block;
  flex-direction: column;
  border-radius: 5px;
  overflow-y: auto;
}

img {
  width: 60%;
  overflow-y: auto;
  margin-right: auto;
  margin-left: auto;
  display: block;
  padding-bottom: 20px;
}

.modal-header {
  color: #4AAE9B;
  justify-content: space-between;
  border-bottom: none;
}

.modal-footer {
  border-top: 1px solid #eeeeee;
  justify-content: flex-end;
}

.modal-body {
  position: relative;
  padding: 0;
  margin-bottom: 10px;
  margin-right: auto;
  margin-left: auto;
  display: block;
}

.title {
  font-size: 25px;
  color: #be0819;
  font-family: IKEABold;
  margin-left: auto;
  margin-right: auto;
  display: block;
  font-weight: bold;
}
.btn-close {
  border: none;
  font-size: 30px;
  padding: 20px;
  cursor: pointer;
  font-weight: bold;
  color: #be0819;
  background: transparent;
  position: absolute;
  right: 0;
}
.modal-title {
  border: none;
  margin: 20px 0;
  margin-left: 50px;
  font-size: 20px;
  font-weight: bold;
  color: black;
  background: transparent;
  font-family: IKEABold;
  text-align: center;
}

.modal-fade-enter,
.modal-fade-leave-active {
opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.5s ease;
}

.btn-close:hover {
  opacity:0.6;
}

.size-table {
  border: solid 1px #DDEEEE;
  border-collapse: collapse;
  border-spacing: 0;
}
.size-table thead th {
  background-color: black;
  color:white;
  padding: 10px;
  text-align: center;
  font-size: 14px;
  font-family: IKEABold;
}

.size-table tbody th {
  background-color: white;
  border: solid 1px #DDEEEE;
  color: black;
  padding: 10px;
  text-align: center;
  text-shadow: 1px 1px 1px #fff;
  font-size: 14px;
  font-family: IKEABold;
}
.size-table tbody td {
  border: solid 1px #DDEEEE;
  color: #333;
  padding: 10px;
  text-shadow: 1px 1px 1px #fff;
  text-align: center;
  font-size: 14px;
  font-family: Proxima;
}
</style>
