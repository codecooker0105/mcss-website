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
            <div class="modal-title">Returns &amp; Exchanges</div>
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
        <section
          class="modal-body"
          id="modalDescription"
        >
          <slot name="body">
            If you received a package that is defective or incorrect,
            you may contact us at <span class="email">vp_external@mcss.ca</span>
            to request for a return. You have 14 days after the reception
            of your package to request a return/exchange.
          </slot>
        </section>
      </div>
    </div>
  </transition>
</template>

<script>

export default {
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
    max-width: 90%;
  }
}

@media screen and (min-width: 1000px) {
  .modal {
    max-width: 40%;
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
}

.modal {
  position: static;
  background: white;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  max-height: 400px;
  border-radius: 5px;
}

.modal-header {
  display: flex;
  max-height: 100px;
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
  max-height: 300px;
  padding: 0;
  margin-bottom: 10px;
  margin-right: 10%;
  margin-left: 10%;
  display: block;
  font-size: 2rem;
  font-family: Proxima;
  text-align: justify;
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
  font-size: 20px;
  padding: 20px;
  cursor: pointer;
  font-weight: bold;
  color: #be0819;
  background: transparent;
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
.email {
  font-size: 2rem;
  font-family: Proxima;
  color: #be0819;
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
</style>
