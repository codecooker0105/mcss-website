<template>
  <div class="events centered">
    <h1>UPCOMING <span>EVENTS</span></h1>
    <hr class="hr1">
    <div class="event-container event2 upcoming" v-on:click="toggle = !toggle">
      <b-img-lazy
        src="https://res.cloudinary.com/die52atcc/image/upload/q_auto,f_auto/v1603140018/MCSS/Events/halloween2020_t5u5cm.jpg"
        :class="{toggled: toggle}"
        alt="A Nightmare on Discord Street"
        style="border-radius: 7px;"
      />
      <a class="event-redirect" v-if="toggle" href="https://www.facebook.com/events/407027924028615" target="_blank">
        <div class="middle">
          <h2 style="font-family: IKEABold;" class="check-it-out">Check out our event page!</h2>
        </div>
      </a>
    </div>
    <hr class="hr2">
    <h1>PAST <span>EVENTS</span></h1>
    <hr class="hr1">
    <div class="slideshow-container">
      <vueper-slides
        lazy lazy-load-on-drag
        :slide-ratio="236 / 420"
        slide-image-inside
        :touchable="false"
      >
        <vueper-slide v-for="(slide, i) in slides" :key="i" :image="slide.image">
          <template v-slot:loader>
            <i class="icon icon-loader spinning"></i>
            <span>Loading...</span>
          </template>
        </vueper-slide>
      </vueper-slides>
    </div>
    <hr class="hr2">
  </div>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides';
import 'vueperslides/dist/vueperslides.css';

export default {
  name: 'events',
  components: { VueperSlides, VueperSlide },
  data() {
    return {
      toggle: false,
      slides: [
        {
          title: 'MCSS Welcome Party',
          content: 'First Picture',
          // You can also provide a URL for the image.
          image: 'https://res.cloudinary.com/die52atcc/image/upload/q_auto,f_auto/v1603140020/MCSS/Events/welcome-party_r00waq.png',
        },
        {
          title: 'Farewell My Concubine',
          content: 'First Picture',
          // You can also provide a URL for the image.
          image: 'https://res.cloudinary.com/die52atcc/image/upload/q_auto,f_auto/v1603140021/MCSS/Events/farewell_mvo7k9.jpg',
        },
        {
          title: 'Sogaeting',
          content: 'Second Picture',
          // You can also provide a URL for the image.
          image: 'https://res.cloudinary.com/die52atcc/image/upload/q_auto,f_auto/v1603140018/MCSS/Events/sogaeting_kqloui.jpg',
        },
        {
          title: 'Ski Trip',
          content: 'Third Picture',
          // You can also provide a URL for the image.
          image: 'https://res.cloudinary.com/die52atcc/image/upload/q_auto,f_auto/v1603140019/MCSS/Events/ski-trip-2020_qumfgc.png',
        },
        {
          title: 'Casino Night',
          content: 'Fourth Picture',
          // You can also provide a URL for the image.
          image: 'https://res.cloudinary.com/die52atcc/image/upload/q_auto,f_auto/v1603140020/MCSS/Events/casino-night-2019_eqk6tm.jpg',
        },
      ],
    };
  },
  methods: {
    switchFarewell() {
      this.farewellToggle = !this.farewellToggle;
    },
  },
};
</script>

<style scoped>
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

  .vueperslide, .vueperslide__image {
    border-radius: 7px;
  }

  .check-it-out {
    font-size: 3rem;
    position: absolute;
    text-align: center;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
    background-color: white;
    border:0.1em solid #000000;
    border-radius:2rem;
    padding:0.46em 1.6em;
    transition: all 0.5s;
    color: #be0819;
  }

  .check-it-out:hover {
    font-weight: 600;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
      0 6px 20px 0 rgba(0, 0, 0, 0.19);
    cursor: pointer;
    background: #be0819;
    color: white;
  }

  .vueperslide__image {
    border-radius: 7px;
  }

  .toggled {
    opacity: 0.4;
    transition: all 0.15s;
  }
  .hr1{
      background-color: #be0819;
      width: 22%;
      height: 1px;
  }
  .event2 {
    width: 80%;
    margin-left: auto;
    margin-right: auto;
  }
  .event2 img{
    border-radius: 7px;
    margin-top: 20px;
    margin-left: auto;
    margin-right: auto;
    display: block;
    width: 100%;
    height: auto;
  }

  .hr2 {
    margin-top: 3rem;
    margin-bottom: 3rem;
    width: 80%;
    border: 0;
    border-top: 1px solid rgba(0,0,0,.1);
  }
  .upcoming {
    cursor: pointer;
  }

  .event-container {
    position: relative;
  }

@media screen and (min-width: 840px) {
  .slideshow-container {
    width: 80%;
    margin-right: auto;
    margin-left: auto;
    display: block;
  }
  .event1 img{
    padding: 20px;
    margin-top: 20px;
    margin-left: auto;
    margin-right: auto;
    display: block;
    width: 80%;
    height: auto;
  }
  .event2 {
    width: 80%;
    margin-left: auto;
    margin-right: auto;
  }

  .middle:hover {
    cursor: pointer;
  }

  .event-container:hover .middle {
    opacity: 1;
  }

  .check-it-out {
    font-family: IKEABold;
    font-size: 3rem;
  }
}

@media screen and (max-width:840px) {
  .slideshow-container {
    width: 90%;
    margin-right: auto;
    margin-left: auto;
    display: block;
  }
  .event2 {
    width: 90%;
    margin-left: auto;
    margin-right: auto;
  }
  .event1 img{
    padding: 20px;
    margin-top: 20px;
    margin-left: auto;
    margin-right: auto;
    display: block;
    width: 90%;
    height: auto;
  }
  .check-it-out {
    font-family: IKEABold;
    font-size: 1.5rem;
  }
}

</style>
