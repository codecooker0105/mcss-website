<template>
  <div class="events centered">
    <h1>THANK YOU <br/><span>FOR YOUR PURCHASE</span></h1>
    <hr class="hr1">

    <div class="centered">
        <p class="instructions">
          A confirmation and the receipt for your order has been sent to your email.
          Please send us an email at <span>vp-external@mcss.ca</span> for any questions related
          to your order.
        </p>
    </div>
    <div class="event2">
      <b-img-lazy
        src="https://res.cloudinary.com/die52atcc/image/upload/q_auto,f_auto/v1603139752/MCSS/card2020_ap1nc4.png"
        alt="2020 Membership Card"
        style="border-radius: 7px;"
      />
    </div>
    <div class="centered">
        <p class="instructions">On any merchandise purchase, you will receive a free MCSS membership
          card on any purchases. With our membership card, you can now get numerous discounts
          at various restaurants and stores across the city!
        </p>
    </div>
    <div class="centered">
        <p class="instructions">
          You should also receive an email containing the membership code with the
          next steps for activating your membership card within a few minutes. Make sure to check
          your spam folder as well.
        </p>
    </div>
    <button class="home-intro-btn" @click="gotoMain">Back to Home</button>
    <hr class="hr2">
  </div>
</template>

<script>
export default {
  name: 'success',
  methods: {
    gotoMain() {
      this.$router.push('/announcements');
    },
  },
  created() {
    this.$store.dispatch('resetCart');
  },
};
</script>

<style scoped>
  .events {
    margin-top: 50px;
  }

  p span {
    color: #be0819;
    font-size: 2rem;
    font-family: Proxima;
  }

  .centered {
    margin-left: auto;
    margin-right: auto;
    display: block;
    text-align: center;
  }

  p.instructions {
    margin-top: 2%;
    font-family: Proxima;
    font-size: 2rem;
    text-align: justify;
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

  .hr1{
      background-color: #be0819;
      width: 28%;
      height: 1px;
  }

  @media screen and (min-width: 1000px) {
    .event2 img{
        border-radius: 7px;
        margin-top: 20px;
        margin-left: auto;
        margin-right: auto;
        display: block;
        width: 40%;
        height: auto;
    }
    .instructions {
      margin-right: 30%;
      margin-left: 30%;
  }
  }

  @media screen and (max-width: 1000px) and (min-width: 700px){
    .event2 img{
        border-radius: 7px;
        margin-top: 20px;
        margin-left: auto;
        margin-right: auto;
        display: block;
        width: 60%;
        height: auto;
    }
    .instructions {
      margin-right: 20%;
      margin-left: 20%;
    }
  }

  @media screen and (max-width: 700px) {
    .event2 img{
        border-radius: 7px;
        margin-top: 20px;
        margin-left: auto;
        margin-right: auto;
        display: block;
        width: 80%;
        height: auto;
    }
    .instructions {
      margin-right: 10%;
      margin-left: 10%;
  }
  }

  .home-intro-btn {
      font-family: IKEABold;
      width: 25rem;
      height: 5rem;
      background: #be0819;
      color: white;
      border: none;
      border-radius: 5px;
      outline: none;
      font-size: 2rem;
      transition: all 0.3s ease-out;
      margin: auto;
      display: block;
    }
    .home-intro-btn:hover {
      transform: translateY(-0.4rem);
      font-weight: 600;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
        0 6px 20px 0 rgba(0, 0, 0, 0.19);
      cursor: pointer;
    }

  .hr2 {
    margin-top: 3rem;
    margin-bottom: 3rem;
    width: 80%;
    border: 0;
    border-top: 1px solid rgba(0,0,0,.1);
  }

</style>
