<template>
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
            <div></div>
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
            <div class="title">
              <h1 style="font-family: IKEABold;">FOLLOW US ON WECHAT!</h1>
            </div>
            <b-img-lazy
              src="https://res.cloudinary.com/die52atcc/image/upload/q_auto,f_auto/v1603139753/MCSS/wechat-qr_waamy4.jpg"
              alt="wechat"
              style="border-radius: 7px;"
              class="wechat"
            />
          </slot>
        </section>
        <footer class="modal-footer">
          <slot name="footer">
            <button
              type="button"
              class="btn-green"
              @click="close"
              aria-label="Close modal"
              style="font-family: IKEABold; font-size: 15px;"
            >
              OK!
            </button>
          </slot>
        </footer>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'modal',
  methods: {
    close() {
      this.$emit('close');
    },
  },
};
</script>

<style scoped>
  @media screen and (max-width: 1000px) {
    .modal {
      max-width: 70%;
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
    overflow-x: hidden;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    max-height: 500px;
    border-radius: 5px;
  }

  .modal-header,
  .modal-footer {
    display: flex;
    max-height: 100px;
  }

  .wechat {
    width: 90%;
    height: auto;
    max-height: 250px;
    max-width: 250px;
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
  }

  .title {
    font-size: 25px;
    color: #be0819;
    font-family: Lato, sans-serif;
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

  .btn-green {
    margin-top: 23px;
    width: 30%;
    height: 90%;
    margin-left: auto;
    margin-right: auto;
    display: block;
    color: white;
    background: #be0819;
    border: 1px solid grey;
    border-radius: 2px;
    transition: all 0.3s ease-out;
  }

  .modal-fade-enter,
  .modal-fade-leave-active {
  opacity: 0;
  }

  .modal-fade-enter-active,
  .modal-fade-leave-active {
    transition: opacity 0.5s ease;
  }

  .btn-green:hover {
    color: #be0819;
    background: white;
    transform: translateY(-0.4rem);
    font-weight: 600;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
      0 6px 20px 0 rgba(0, 0, 0, 0.19);
    cursor: pointer;
  }

  .btn-close:hover {
    opacity:0.6;
  }
</style>
