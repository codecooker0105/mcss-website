<template>
  <div class="members">
    <div class="intro-container-1">
      <div class="intro-img">
        <b-img-lazy
          src="https://res.cloudinary.com/die52atcc/image/upload/q_auto,f_auto/v1603139816/MCSS/About/recruiting_zt7mob.png"
          alt="recruitment"
          width=300
          height=300
          style="border-radius: 7px;"
        />
      </div>
      <div class= "centered" style="margin-top: 3vw;">
        <h1>WANT TO KNOW MORE<span> ABOUT MCSS?</span></h1>
        <hr class="hr1">
        <p>Looking for more awesome events?</p>
        <p>Make sure to follow us on our social medias!</p>
        <modal v-show="isModalVisible" @close="closeModal" />
        <div class="social-btns">
          <a class="btn facebook" href="https://www.facebook.com/mcss.ca/" target="_blank">
            <i class="fa fa-facebook"></i>
          </a>
          <a class="btn instagram" href="https://www.instagram.com/mcssfam/?hl=en" target="_blank">
            <i class="fa fa-instagram"></i>
          </a>
          <button
            type="button"
            class="btn wechat-button"
            @click="showModal"
          >
            <i class="fa fa-wechat"></i>
          </button>
          <a class="btn youtube" href="https://www.youtube.com/user/MCSSvid" target="_blank">
            <i class="fa fa-youtube"></i>
          </a>
          <a class="btn envelope" href="mailto:vpexternal@mcss.ca" target="_blank">
            <i class="fa fa-envelope"></i>
          </a>
        </div>
      </div>
    </div>
    <hr class="hr2">
  </div>
</template>

<script>
import Modal from '../components/Modal.vue';

export default {
  name: 'contact',
  components: {
    Modal,
  },
  data() {
    return {
      isModalVisible: false,
    };
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
  },
};
</script>

<style scoped>
  @import 'https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css';

  .centered {
    margin-left: auto;
    margin-right: auto;
    display: block;
    text-align: center;
  }

  h1 {
    text-align: center;
    font-size: 30px;
    font-family: IKEABold;
  }

  h1 span {
    font-size: 30px;
    font-family: IKEABold;
    color: #be0819;
  }

  p {
    font-size: 20px;
    color: black;
    font-family: Proxima;
  }

  .members{
    width: 90%;
    margin: auto;
  }
  .hr3{
      background-color: #be0819;
      width: 15%;
      height: 1px;
  }
  .hr2 {
      margin-top: 3rem;
      margin-bottom: 3rem;
      width: 80%;
      border: 0;
      border-top: 1px solid rgba(0,0,0,.1);
  }
  .hr1{
      background-color: #be0819;
      width: 50%;
      height: 1px;
      margin-bottom: 4%;
  }
  h2{
    background-color: #0c5fa8;
    color: white;
    padding: 10px;
    border-radius: 30px;
  }
  .president {
    margin-left: auto;
    margin-right: auto;
    display: block;
    text-align: center;
  }
  .internals, .restOfBoard {
    margin-left: auto;
    margin-right: auto;
    display: block;
    text-align: center;
  }
  .avatar img{
    border-radius: 7px;
    width: 30vw;
    height: 44.97vw;
    margin-bottom: 20px;
  }
  .avatar .name{
    font-weight: bold;
    margin-bottom: 0;
  }
  .divider{
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    width: 100%;
    height: 100px;
  }
  .members li{
    display: inline-grid;
    padding: 10px 20px 10px 20px;
    font-weight: bold;
  }

  @media screen and (max-width: 840px) {
    .social-btns {
      margin-top: 5%;
    }
    .social-btns .btn .fa {
      font-size: 25px;
    }

    .social-btns a {
      margin: 0 10px;
    }

    .social-btns .btn:hover .fa:hover {
      color: #be0819;
    }
  }

  @media screen and (min-width: 840px) {
    .social-btns .btn,
    .social-btns .btn:before,
    .social-btns .btn .fa {
      transition: all 0.35s;
      transition-timing-function: cubic-bezier(0.31, -0.105, 0.43, 1.59);
    }
    .social-btns .btn:before {
      top: 90%;
      left: -110%;
    }
    .social-btns .btn .fa {
      -webkit-transform: scale(0.8);
              transform: scale(0.8);
    }
    .social-btns .btn.facebook:before {
      background-color: #3b5998;
    }
    .social-btns .btn.facebook .fa {
      color: #3b5998;
    }
    .social-btns .btn.instagram:before {
      background-color: #fe4164;
    }
    .social-btns .btn.instagram .fa {
      color: #fe4164;
    }
    .social-btns .btn.wechat-button:before {
      background-color: #5cc928;
    }
    .social-btns .btn.wechat-button .fa {
      color: #5cc928;
    }
    .social-btns .btn.youtube:before {
      background-color: #ff0000;
    }
    .social-btns .btn.youtube .fa {
      color: #ff0000;
    }
    .social-btns .btn.envelope:before {
      background-color: #00aff0;
    }
    .social-btns .btn.envelope .fa {
      color: #00aff0;
    }
    .social-btns .btn:focus:before,
    .social-btns .btn:hover:before {
      top: -10%;
      left: -10%;
    }
    .social-btns .btn:focus .fa,
    .social-btns .btn:hover .fa {
      color: #fff;
      -webkit-transform: scale(1);
              transform: scale(1);
    }
    .social-btns {
      margin-right: auto;
      margin-left: auto;
      height: 90px;
      font-size: 0;
      padding-top: 7px;
      text-align: center;
      margin-top: 3vw;
      border-radius: 30px;
      width: 90%;
      background-image: linear-gradient(
        to right bottom,
        rgba(190, 8, 51, 0.1),
        rgba(190, 8, 25, 0.1)
      );
    }
    .social-btns .btn {
      display: inline-block;
      background-color: #fff;
      width: 77px;
      height: 77px;
      line-height: 90px;
      margin: 0 10px;
      text-align: center;
      position: relative;
      overflow: hidden;
      border-radius: 28%;
      box-shadow: 0 5px 15px -5px rgba(0,0,0,0.1);
      opacity: 0.99;
    }
    .social-btns .btn:before {
      content: '';
      width: 120%;
      height: 120%;
      position: absolute;
      -webkit-transform: rotate(45deg);
              transform: rotate(45deg);
    }
    .social-btns .btn .fa {
      font-size: 38px;
    }
  }

  @media screen and (min-width: 1100px) {
    .intro-container-1 {
      display: flex;
      flex-wrap: nowrap;
      margin-left: 7vw;
    }

    .intro-container-2 {
      display: flex;
      flex-wrap: nowrap;
      margin-right: 7vw;
    }
  }
  @media screen and (max-width: 1100px) {
    .intro-container-1 {
      display: flex;
      flex-direction: column;
    }
    .intro-container-1 .intro-img {
      margin-left: auto;
      margin-right: auto;
      display: block;
      text-align: center;
    }

    .intro-container-2 {
      display: flex;
      flex-direction: column;
    }
    .intro-container-2 .intro-img {
      margin-left: auto;
      margin-right: auto;
      display: block;
      text-align: center;
    }
  }

  @media screen and (max-width: 840px) {
    h2 {
      font-size: 25px;
    }
    .members li{
      width: 95%;
    }
  }
</style>
