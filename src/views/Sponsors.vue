<template>
  <div class="sponsors">
    <div class="intro-container-1">
      <div>
        <div id="f1_container">
          <div id="f1_card">
            <div class="front face">
              <div class="intro-img mcss-card">
                <b-img-lazy
                  src="https://res.cloudinary.com/die52atcc/image/upload/q_auto,f_auto/v1603139815/MCSS/About/card-front_wu8sys.png"
                  alt="Sponsorship Card"
                  width=302
                  height=191
                />
              </div>
            </div>
            <div class="back face center">
              <div class="intro-img mcss-card">
                <b-img-lazy
                  src="https://res.cloudinary.com/die52atcc/image/upload/q_auto,f_auto/v1603139815/MCSS/About/card-back_eakkue.png"
                  alt="Sponsorship Card"
                  width=302
                  height=191
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="intro-text centered">
        <h1>MCSS <span>2020-2021</span> MEMBERSHIP CARD</h1>
        <hr class="hr1">
        <p>
          With our MCSS Membership card, students can get numerous discounts
          at various restaurants and stores across the city.
          We take pride in bringing our members the best deals and benefits with
          our annually updated list of participating sponsors.
          <button
            class="scroller-btn"
            v-on:click="scrollDown()"
          >
            Click here to check out our sponsors map.
          </button>
          <br /><br />
          Get yours today for only <b>$5</b> in our shop page!
        </p>
      </div>
    </div>
    <hr class="hr2">
    <h1>OUR <span>SPONSORS</span></h1>
    <hr class="hr3">
    <br />
    <div class="sponsors">
      <div class="restOfSponsors">
        <b-row>
          <b-col sm="12" md="4" class="avatar" v-for="sponsor in sponsorsList" :key="sponsor.name">
            <b-img-lazy
              :src="sponsor.image"
              blank-src="https://res.cloudinary.com/die52atcc/image/upload/q_auto,f_auto/v1603139815/MCSS/About/food-placeholder_st8uoq.jpg"
              offset="700"
              v-bind:alt="sponsor.name"
            />
            <p class="name">{{ sponsor.name }}</p>
            <p class="role">{{ sponsor.address }}</p>
            <br /><br />
          </b-col>
        </b-row>
      </div>
      <hr class="hr2">
      <div class="sponsor-map">
      <h1>SPONSORS <span>MAP</span></h1>
        <div style="width: 100%; overflow: hidden; height: 600px;">
          <iframe
            style="width: 80%;
            margin-top: -46px;"
            src="https://www.google.com/maps/d/embed?mid=1MCocHjxAGO78uFDjn0fm486kqSkhqhs6"
            width="640"
            height="480"
          >
          </iframe>
        </div>
        <hr id="anchor" class="hr2">
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'sponsors',
  methods: {
    scrollDown() {
      const elmnt = document.getElementById('anchor');
      elmnt.scrollIntoView({ behavior: 'smooth' }, { passive: true });
    },
  },
  data() {
    return {
      sponsorsList: [
        {
          name: 'Opiano',
          address: '1115 Sherbrooke St W',
          image: 'https://res.cloudinary.com/die52atcc/image/upload/q_auto,f_auto/v1603145690/MCSS/Sponsors/2020-2021/opiano_vwwccp.jpg',
        },
        {
          name: 'Restaurant Montako',
          address: '1250 Crescent St',
          image: 'https://res.cloudinary.com/die52atcc/image/upload/q_auto,f_auto/v1603145687/MCSS/Sponsors/2020-2021/montako_q4c65j.jpg',
        },
        {
          name: 'Café & Crêpe',
          address: '374 Saint-Catherine St W',
          image: 'https://res.cloudinary.com/die52atcc/image/upload/q_auto,f_auto/v1603143412/MCSS/Sponsors/2020-2021/cafecrepe_mig1ki.jpg',
        },
        {
          name: 'Matcha Zanmai',
          address: '1428 Mackay St',
          image: 'https://res.cloudinary.com/die52atcc/image/upload/q_auto,f_auto/v1603145685/MCSS/Sponsors/2020-2021/matcha_xh9l6a.jpg',
        },
        {
          name: 'Nouilles Zhonghua',
          address: '908 Sherbrooke St W',
          image: 'https://res.cloudinary.com/die52atcc/image/upload/q_auto,f_auto/v1603143587/MCSS/Sponsors/2020-2021/zhonghua_l9vcwf.jpg',
        },
        {
          name: 'A Beverage Store',
          address: '1863 Rue Sainte-Catherine',
          image: 'https://res.cloudinary.com/die52atcc/image/upload/q_auto,f_auto/v1603139936/MCSS/Sponsors/A_Beverage_Store_dz0umc.png',
        },
        {
          name: 'Ahi Poke',
          address: '820 Mont-Royal Ave E',
          image: 'https://res.cloudinary.com/die52atcc/image/upload/q_auto,f_auto/v1603145679/MCSS/Sponsors/2020-2021/ahi-poke_iu2uiv.jpg',
        },
        {
          name: 'Ali',
          address: '1425 René-Lévesque Blvd W',
          image: 'https://res.cloudinary.com/die52atcc/image/upload/q_auto,f_auto/v1603139944/MCSS/Sponsors/Ali_mfwpox.png',
        },
        {
          name: 'BMW Canbec',
          address: '4090 Rue Jean-Talon Ouest',
          image: 'https://res.cloudinary.com/die52atcc/image/upload/q_auto,f_auto/v1603139937/MCSS/Sponsors/BMW_Canbec_mfjfnu.png',
        },
        {
          name: 'Chatime',
          address: '1811 Saint-Catherine St W or 3428 Park Avenue',
          image: 'https://res.cloudinary.com/die52atcc/image/upload/q_auto,f_auto/v1603139929/MCSS/Sponsors/Chatime_hxiara.png',
        },
        {
          name: 'Chef on Call',
          address: '3430 Park Ave',
          image: 'https://res.cloudinary.com/die52atcc/image/upload/q_auto,f_auto/v1603139931/MCSS/Sponsors/Chef_on_Call_gcizcu.png',
        },
        {
          name: 'Chez Chen',
          address: '1618 Lincoln Avenue',
          image: 'https://res.cloudinary.com/die52atcc/image/upload/q_auto,f_auto/v1603139937/MCSS/Sponsors/Chez_Chen_sey4xe.png',
        },
        {
          name: 'Chez Chili',
          address: '1050b Clack Street',
          image: 'https://res.cloudinary.com/die52atcc/image/upload/q_auto,f_auto/v1603139933/MCSS/Sponsors/Chez_Chili_mbosin.png',
        },
        {
          name: 'Chicha Donburi',
          address: '1433A Bishop St',
          image: 'https://res.cloudinary.com/die52atcc/image/upload/q_auto,f_auto/v1603143722/MCSS/Sponsors/2020-2021/chicha-donburi_zilzbc.jpg',
        },
        {
          name: 'Coco Fresh Tea & Juice',
          address: '1388 Saint-Catherine St W',
          image: 'https://res.cloudinary.com/die52atcc/image/upload/q_auto,f_auto/v1603145680/MCSS/Sponsors/2020-2021/coco_cw07yr.jpg',
        },
        {
          name: 'Dimsum Imperial',
          address: '998 Boul St-Laurent 6th floor',
          image: 'https://res.cloudinary.com/die52atcc/image/upload/q_auto,f_auto/v1603145684/MCSS/Sponsors/2020-2021/imperial_teefdd.jpg',
        },
        {
          name: 'Dobe & Andy',
          address: '1111 St Urbain Street',
          image: 'https://res.cloudinary.com/die52atcc/image/upload/q_auto,f_auto/v1603139937/MCSS/Sponsors/Dobe_Andy_vxoa6j.png',
        },
        {
          name: 'Fisshu',
          address: '537 Saint-Catherine St W',
          image: 'https://res.cloudinary.com/die52atcc/image/upload/q_auto,f_auto/v1603145682/MCSS/Sponsors/2020-2021/fisshu_uaoj5k.jpg',
        },
        {
          name: 'GAZO',
          address: '1651 Saint-Catherine Street West 1701 or St Denis Street',
          image: 'https://res.cloudinary.com/die52atcc/image/upload/q_auto,f_auto/v1603139946/MCSS/Sponsors/GAZO_dy8r4s.png',
        },
        {
          name: 'Guru',
          address: '',
          image: 'https://res.cloudinary.com/die52atcc/image/upload/q_auto,f_auto/v1603139948/MCSS/Sponsors/GURU_pcafyg.png',
        },
        {
          name: 'Hot Pot Panda',
          address: '2170 Saint-Catherine St W',
          image: 'https://res.cloudinary.com/die52atcc/image/upload/q_auto,f_auto/v1603145684/MCSS/Sponsors/2020-2021/hotpot-panda_ccuio6.jpg',
        },
        {
          name: 'L2 Lounge',
          address: '71A Rue de la Gauchetière',
          image: 'https://res.cloudinary.com/die52atcc/image/upload/q_auto,f_auto/v1603139944/MCSS/Sponsors/L2_Lounge_yq1lju.png',
        },
        {
          name: 'La Cité',
          address: '350 Prince Arthur Street West',
          image: 'https://res.cloudinary.com/die52atcc/image/upload/q_auto,f_auto/v1603139957/MCSS/Sponsors/La_Cite%CC%81_ukqy6b.png',
        },
        {
          name: 'Mango Mango',
          address: '1625 Boulevard de Maisonneuve O',
          image: 'https://res.cloudinary.com/die52atcc/image/upload/q_auto,f_auto/v1603143819/MCSS/Sponsors/2020-2021/mango-mango_kz5zrg.jpg',
        },
        {
          name: 'Mei Restaurant',
          address: '1425 Mackay Street',
          image: 'https://res.cloudinary.com/die52atcc/image/upload/q_auto,f_auto/v1603139956/MCSS/Sponsors/Restaurant_Mei_u545aw.png',
        },
        {
          name: 'Meet Fresh',
          address: '1805 Saint-Catherine St W',
          image: 'https://res.cloudinary.com/die52atcc/image/upload/q_auto,f_auto/v1603145686/MCSS/Sponsors/2020-2021/meetfresh_j7s2ep.jpg',
        },
        {
          name: 'Misoya Ramen',
          address: '2065A Bishop Street',
          image: 'https://res.cloudinary.com/die52atcc/image/upload/q_auto,f_auto/v1603139955/MCSS/Sponsors/Misoya_Ramen_amjcoi.png',
        },
        {
          name: 'Nos Thés',
          address: '1609 Saint-Catherine St W',
          image: 'https://res.cloudinary.com/die52atcc/image/upload/q_auto,f_auto/v1603145688/MCSS/Sponsors/2020-2021/nosthes_kk6b52.jpg',
        },
        {
          name: 'One More The (Queen Mary)',
          address: '4986B Blvd Queen Mary',
          image: 'https://res.cloudinary.com/die52atcc/image/upload/q_auto,f_auto/v1603145690/MCSS/Sponsors/2020-2021/onemorethe_tt4gqy.png',
        },
        {
          name: 'Red Bull',
          address: '',
          image: 'https://res.cloudinary.com/die52atcc/image/upload/q_auto,f_auto/v1603139961/MCSS/Sponsors/Red_Bull_tqxogi.png',
        },
        {
          name: 'Shi Tang',
          address: '1622 Boulevard de Maisonneuve O',
          image: 'https://res.cloudinary.com/die52atcc/image/upload/q_auto,f_auto/v1603145691/MCSS/Sponsors/2020-2021/shitang_sgtyst.jpg',
        },
        {
          name: 'Simmer Huang',
          address: '2045 Bishop St',
          image: 'https://res.cloudinary.com/die52atcc/image/upload/q_auto,f_auto/v1603145693/MCSS/Sponsors/2020-2021/simmer_rdfrx4.jpg',
        },
        {
          name: 'Soupebol',
          address: '1245 Place Phillips',
          image: 'https://res.cloudinary.com/die52atcc/image/upload/q_auto,f_auto/v1603145694/MCSS/Sponsors/2020-2021/soupebol_bbyqhi.jpg',
        },
        {
          name: 'Stanbrooke',
          address: '2061 Stanley Street',
          image: 'https://res.cloudinary.com/die52atcc/image/upload/q_auto,f_auto/v1603139963/MCSS/Sponsors/Stanbrooke_dbxrea.png',
        },
        {
          name: 'Sugar Marmalade',
          address: '1228 Bishop St',
          image: 'https://res.cloudinary.com/die52atcc/image/upload/q_auto,f_auto/v1603145694/MCSS/Sponsors/2020-2021/sugar_hjxc3i.jpg',
        },
        {
          name: 'Sushiyo',
          address: '666 Sherbrooke St W Étage 0',
          image: 'https://res.cloudinary.com/die52atcc/image/upload/q_auto,f_auto/v1603145696/MCSS/Sponsors/2020-2021/sushiyo_xtaswb.jpg',
        },
        {
          name: 'Tsukuyomi Ramen Bishop',
          address: '1242 Bishop St',
          image: 'https://res.cloudinary.com/die52atcc/image/upload/q_auto,f_auto/v1603145697/MCSS/Sponsors/2020-2021/tsukuyomi_o4mmvm.jpg',
        },
        {
          name: 'Zoe Dessert',
          address: '2160 St Mathieu Street',
          image: 'https://res.cloudinary.com/die52atcc/image/upload/q_auto,f_auto/v1603139963/MCSS/Sponsors/Zoe_Dessert_Presotea_c0i0bx.png',
        },
        {
          name: '红翻天',
          address: '1110 Clark St',
          image: 'https://res.cloudinary.com/die52atcc/image/upload/q_auto,f_auto/v1603145682/MCSS/Sponsors/2020-2021/hongfantian_eq0fpo.jpg',
        },
      ],
    };
  },
};
</script>

<style scoped>
  .centered {
    margin-left: auto;
    margin-right: auto;
    display: block;
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

  .mcss-card img{
    border-radius: 7px;
    margin-bottom: 1vw;
    border-style: solid;
    border-color: black;
  }

  b {
    font-size: 1.8rem;
  }
  .checkout-button-redirect {
    margin: auto;
    display: block;
  }

  .scroller-btn {
    border: none;
    background-color: transparent;
    font-weight: bold;
    color: #be0819;
    padding: 0 !important;
    margin-left: 2px;
  }

  .scroller-btn:hover {
    opacity: 0.7;
  }
  .sponsors{
    width: 90%;
    margin: auto;
  }

  p.name {
    font-size: 2rem;
    font-family: IKEABold;
  }

  p.role {
    font-size: 1.5rem;
    font-family: Proxima;
  }

  iframe {
    margin-left: auto;
    margin-right: auto;
    display: block;
    text-align: center;
  }
  .hr3{
      background-color: #be0819;
      width: 22%;
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
      width: 30%;
      height: 1px;
  }

  .president {
    margin-left: auto;
    margin-right: auto;
    display: block;
    text-align: center;
  }
  .internals, .restOfSponsors {
    margin-left: auto;
    margin-right: auto;
    display: block;
    text-align: center;
  }
  .avatar img{
    border-radius: 7px;
    width: 80%;
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
  .sponsors li{
    display: inline-grid;
    padding: 10px 20px 10px 20px;
    font-weight: bold;
  }
  @media screen and (min-width: 840px) {
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

    .intro-text {
      margin-top: 2vw;
    }

    .intro-text p {
      margin-right: 10%;
      margin-left: 10%;
      margin-top: 30px;
      font-family: Proxima;
      font-size: 1.8rem
    }
  }
  @media screen and (max-width: 840px) {
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
    .intro-text {
      margin-top: 4vw;
    }

    .intro-text p {
      margin-right: 5%;
      margin-left: 5%;
      margin-top: 5%;
      font-family: Proxima;
      font-size: 1.8rem
    }
  }

  @media screen and (max-width: 992px) {
    .sponsors li{
      width: 95%;
    }
    iframe {
      display: none;
    }
    .scroller-btn {
      display: none;
    }
    .sponsor-map {
      display: none;
    }
  }
  @media screen and (min-width: 840px) {
    #f1_container {
      margin-top: 30%;
      position: relative;
      width: 302px;
      height: 191px;
      z-index: 1;
    }
    #f1_container {
      perspective: 1000;
    }
    #f1_card {
      width: 100%;
      height: 100%;
      transform-style: preserve-3d;
      transition: all 1.0s linear;
    }
    #f1_container:hover #f1_card {
      transform: rotateY(180deg);
    }
    .face {
      position: absolute;
      width: 100%;
      height: 100%;
      backface-visibility: hidden;
    }
    .face.back {
      display: block;
      transform: rotateY(180deg);
      box-sizing: border-box;
      padding: 10px;

      text-align: center;
    }
  }
</style>
