import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [
      {
        id: 1,
        name: 'Hotpot Tee',
        image: 'https://res.cloudinary.com/die52atcc/image/upload/dpr_auto,w_auto/v1605764203/MCSS/Merch/4_rkv5tr.png',
        displayImages: [
          { image: 'https://res.cloudinary.com/die52atcc/image/upload/dpr_auto,w_auto/v1605764203/MCSS/Merch/4_rkv5tr.png' },
          { image: 'https://res.cloudinary.com/die52atcc/image/upload/dpr_auto,w_auto/v1605762336/MCSS/Merch/first-drop/photoshoot/_YWD7963_PS_ealdga.jpg' },
          { image: 'https://res.cloudinary.com/die52atcc/image/upload/dpr_auto,w_auto/v1605762335/MCSS/Merch/first-drop/photoshoot/_YWD7987_PS_ii0n3c.jpg' },
          { image: 'https://res.cloudinary.com/die52atcc/image/upload/dpr_auto,w_auto/v1605762331/MCSS/Merch/first-drop/photoshoot/_YWD7710_p8ogjy.jpg' },
        ],
        description: 'Designed by Ivy Chen\n100% Cotton \nHeat-Pressed Graphic Print at front \nModel is 6ft wearing size M \n\n*FOR A LIMITED TIME* \nAll purchases come with a free MCSS Sponsorship E-Card',
        price: 19,
        size: ['S', 'M', 'L', 'XL'],
        sizeSku: {
          S: 'sku_IOgFZ2wX0A6oxf',
          M: 'sku_IOgF5h17P8dvT5',
          L: 'sku_IOgFcGcCmN1js7',
          XL: 'sku_IOgFT3YjFKrll9',
        },
        path: 'hotpot-tee',
        dbName: 'white-tee',
      },
      {
        id: 2,
        name: 'Chopstick Tee',
        image: 'https://res.cloudinary.com/die52atcc/image/upload/dpr_auto,w_auto/v1605764331/MCSS/Merch/5_uqeytf.png',
        displayImages: [
          { image: 'https://res.cloudinary.com/die52atcc/image/upload/dpr_auto,w_auto/v1605764331/MCSS/Merch/5_uqeytf.png' },
          { image: 'https://res.cloudinary.com/die52atcc/image/upload/dpr_auto,w_auto/v1605762332/MCSS/Merch/first-drop/photoshoot/_YWD7586_u34nkj.jpg' },
          { image: 'https://res.cloudinary.com/die52atcc/image/upload/dpr_auto,w_auto/v1605762332/MCSS/Merch/first-drop/photoshoot/_YWD7609_sh7xjq.jpg' },
        ],
        description: 'Designed by Dian Dian\n100% Cotton \nHeat-Pressed Graphic Print at front \nModel is 5\'2 ft wearing size M \n\n*FOR A LIMITED TIME* \nAll purchases come with a free MCSS Sponsorship E-Card',
        price: 19,
        size: ['S', 'M', 'L', 'XL'],
        sizeSku: {
          S: 'sku_IOgFO5tDlWEvAK',
          M: 'sku_IOgFHVJj9FNwBu',
          L: 'sku_IOgFYWlq5ibAhG',
          XL: 'sku_IOgFNE3QcMPCi0',
        },
        path: 'chopstick-tee',
        dbName: 'white-tee',
      },
      {
        id: 3,
        name: 'Crane Tee',
        image:
          'https://res.cloudinary.com/die52atcc/image/upload/dpr_auto,w_auto/v1605764330/MCSS/Merch/3_quwvbh.png',
        displayImages: [
          { image: 'https://res.cloudinary.com/die52atcc/image/upload/dpr_auto,w_auto/v1605764330/MCSS/Merch/3_quwvbh.png' },
          { image: 'https://res.cloudinary.com/die52atcc/image/upload/dpr_auto,w_auto/v1605762339/MCSS/Merch/first-drop/photoshoot/_YWD8167_PS_evvypn.jpg' },
          { image: 'https://res.cloudinary.com/die52atcc/image/upload/dpr_auto,w_auto/v1605762810/MCSS/Merch/first-drop/photoshoot/_YWD8199_atxtjc.jpg' },
        ],
        description: 'Designed by Ivy Chen\n100% Cotton \nHeat-Pressed Graphic Print at front \nModel is 6ft wearing size M \n\n*FOR A LIMITED TIME* \nAll purchases come with a free MCSS Sponsorship E-Card',
        price: 19,
        size: ['S', 'M', 'L', 'XL'],
        sizeSku: {
          S: 'sku_IOgFURV3rk41nN',
          M: 'sku_IOgFFTGlYWTsyg',
          L: 'sku_IOgFtyET2WKIQY',
          XL: 'sku_IOgFNg3r1R3M2Q',
        },
        path: 'crane-tee',
        dbName: 'white-tee',
      },
      {
        id: 4,
        name: 'Fruits Tee',
        image:
          'https://res.cloudinary.com/die52atcc/image/upload/dpr_auto,w_auto/v1605764279/MCSS/Merch/2_vwrrlz.png',
        displayImages: [
          { image: 'https://res.cloudinary.com/die52atcc/image/upload/dpr_auto,w_auto/v1605764279/MCSS/Merch/2_vwrrlz.png' },
          { image: 'https://res.cloudinary.com/die52atcc/image/upload/dpr_auto,w_auto/v1605762337/MCSS/Merch/first-drop/photoshoot/_YWD8117_PS_rmquq1.jpg' },
          { image: 'https://res.cloudinary.com/die52atcc/image/upload/dpr_auto,w_auto/v1605763215/MCSS/Merch/first-drop/photoshoot/_YWD8123_gfpjqb.jpg' },
        ],
        description: 'Designed by Dian Dian \n100% Cotton \nHeat-Pressed Graphic Print at front \nModel is 6ft wearing size M \n\n*FOR A LIMITED TIME* \nAll purchases come with a free MCSS Sponsorship E-Card',
        price: 19,
        size: ['S', 'M', 'L', 'XL'],
        sizeSku: {
          S: 'sku_IOgFcLB4dTkzdZ',
          M: 'sku_IOgFeZMlwB2Ujt',
          L: 'sku_IOgFzvhhwFElwW',
          XL: 'sku_IOgFJUlmbWlFqT',
        },
        path: 'fruits-tee',
        dbName: 'white-tee',
      },
      {
        id: 5,
        name: 'White Panda Crewneck',
        image:
          'https://res.cloudinary.com/die52atcc/image/upload/dpr_auto,w_auto/v1605764532/MCSS/Merch/pandaW_nfiirb.png',
        displayImages: [
          { image: 'https://res.cloudinary.com/die52atcc/image/upload/dpr_auto,w_auto/v1605764532/MCSS/Merch/pandaW_nfiirb.png' },
          { image: 'https://res.cloudinary.com/die52atcc/image/upload/dpr_auto,w_auto/v1605762339/MCSS/Merch/first-drop/photoshoot/_YWD8232_PS_dwoark.jpg' },
          { image: 'https://res.cloudinary.com/die52atcc/image/upload/dpr_auto,w_auto/v1605763014/MCSS/Merch/first-drop/photoshoot/_YWD8267_PS_e7eeyi.jpg' },
        ],
        description: 'Designed by Ivy Chen\n50% Preshrunk Cotton / 50% Polyester Blend \nHeat-Pressed Graphic on Chest \nModel is 6ft wearing size M \n\n*FOR A LIMITED TIME* \nAll purchases come with a free MCSS Sponsorship E-Card',
        price: 29,
        size: ['S', 'M', 'L', 'XL'],
        sizeSku: {
          S: 'sku_IPSIBVGTEinc6e',
          M: 'sku_IOgF5ur35vEaJq',
          L: 'sku_IOgFT7Kqhdo0uJ',
          XL: 'sku_IOgFsNrZAqKiI1',
        },
        path: 'white-panda-crewneck',
        dbName: 'white-crewneck',
      },
      {
        id: 6,
        name: 'Black Panda Crewneck',
        image:
          'https://res.cloudinary.com/die52atcc/image/upload/dpr_auto,w_auto/v1605764588/MCSS/Merch/pandaB_bcs4ox.png',
        displayImages: [
          { image: 'https://res.cloudinary.com/die52atcc/image/upload/dpr_auto,w_auto/v1605764588/MCSS/Merch/pandaB_bcs4ox.png' },
          { image: 'https://res.cloudinary.com/die52atcc/image/upload/dpr_auto,w_auto/v1605762337/MCSS/Merch/first-drop/photoshoot/_YWD7891_ucpjec.jpg' },
          { image: 'https://res.cloudinary.com/die52atcc/image/upload/dpr_auto,w_auto/v1605762335/MCSS/Merch/first-drop/photoshoot/_YWD7880_dkxmb8.jpg' },
          { image: 'https://res.cloudinary.com/die52atcc/image/upload/dpr_auto,w_auto/v1605763014/MCSS/Merch/first-drop/photoshoot/_YWD8267_PS_e7eeyi.jpg' },
        ],
        description: 'Designed by Ivy Chen\n50% Preshrunk Cotton / 50% Polyester Blend \nHeat-Pressed Graphic on Chest \nModel is 5\'2ft wearing size M \n\n*FOR A LIMITED TIME* \nAll purchases come with a free MCSS Sponsorship E-Card',
        price: 29,
        size: ['S', 'M', 'L', 'XL'],
        sizeSku: {
          S: 'sku_IOgFFneTsKoBG4',
          M: 'sku_IOgF72aSnpQeVJ',
          L: 'sku_IOgFWwidWdVObP',
          XL: 'sku_IOgFa5244iW94J',
        },
        path: 'black-panda-crewneck',
        dbName: 'black-crewneck',
      },
      {
        id: 7,
        name: 'Crane Tote Bag',
        image:
          'https://res.cloudinary.com/die52atcc/image/upload/dpr_auto,w_auto/v1605764120/MCSS/Merch/craneTOTE_egrrjq.png',
        displayImages: [
          { image: 'https://res.cloudinary.com/die52atcc/image/upload/dpr_auto,w_auto/v1605764120/MCSS/Merch/craneTOTE_egrrjq.png' },
          { image: 'https://res.cloudinary.com/die52atcc/image/upload/dpr_auto,w_auto/v1605762340/MCSS/Merch/first-drop/photoshoot/_YWD8279_biewlf.jpg' },
          { image: 'https://res.cloudinary.com/die52atcc/image/upload/dpr_auto,w_auto/v1605765146/MCSS/Merch/first-drop/photoshoot/_YWD8306_xw62ma.jpg' },
        ],
        description: 'Designed By Ivy Chen\n12oz Heavy Cotton Canvas \nBottom Gusset \nReinforced at stress points for prolonged durability \n\n*FOR A LIMITED TIME* \nAll purchases come with a free MCSS Sponsorship E-Card',
        price: 14,
        size: ['ONE SIZE'],
        sizeSku: {
          'ONE SIZE': 'sku_IOgFpWECB3v7mo',
        },
        path: 'crane-tote',
        dbName: 'tote',
      },
      {
        id: 8,
        name: 'Fruits Tote Bag',
        image:
          'https://res.cloudinary.com/die52atcc/image/upload/dpr_auto,w_auto/v1605763931/MCSS/Merch/fruitsTOTE_uhs803.png',
        displayImages: [
          { image: 'https://res.cloudinary.com/die52atcc/image/upload/dpr_auto,w_auto/v1605763931/MCSS/Merch/fruitsTOTE_uhs803.png' },
          { image: 'https://res.cloudinary.com/die52atcc/image/upload/dpr_auto,w_auto/v1605763518/MCSS/Merch/first-drop/photoshoot/_YWD7842_PS2_cqo75h.jpg' },
        ],
        description: 'Designed By Dian Dian\n12oz Heavy Cotton Canvas \nBottom Gusset \nReinforced at stress points for prolonged durability \n\n*FOR A LIMITED TIME* \nAll purchases come with a free MCSS Sponsorship E-Card',
        price: 14,
        size: ['ONE SIZE'],
        sizeSku: {
          'ONE SIZE': 'sku_IOgF7t3NxnDRKK',
        },
        path: 'fruits-tote',
        dbName: 'tote',
      },
      {
        id: 9,
        name: 'Hotpot Tote Bag',
        image:
          'https://res.cloudinary.com/die52atcc/image/upload/dpr_auto,w_auto/v1605763935/MCSS/Merch/hotpotTOTE_zeabbq.png',
        displayImages: [
          { image: 'https://res.cloudinary.com/die52atcc/image/upload/dpr_auto,w_auto/v1605763935/MCSS/Merch/hotpotTOTE_zeabbq.png' },
          { image: 'https://res.cloudinary.com/die52atcc/image/upload/dpr_auto,w_auto/v1605762332/MCSS/Merch/first-drop/photoshoot/_YWD7828_lerbak.jpg' },
          { image: 'https://res.cloudinary.com/die52atcc/image/upload/dpr_auto,w_auto/v1605762331/MCSS/Merch/first-drop/photoshoot/_YWD7811_wc7uv5.jpg' },
        ],
        description: 'Designed By Ivy Chen\n12oz Heavy Cotton Canvas \nBottom Gusset \nReinforced at stress points for prolonged durability \n\n*FOR A LIMITED TIME* \nAll purchases come with a free MCSS Sponsorship E-Card',
        price: 14,
        size: ['ONE SIZE'],
        sizeSku: {
          'ONE SIZE': 'sku_IOgF1hJJ8lHzNb',
        },
        path: 'hotpot-tote',
        dbName: 'tote',
      },
      {
        id: 10,
        name: 'MCSS Membership Card',
        image:
          'https://res.cloudinary.com/die52atcc/image/upload/dpr_auto,w_auto/v1605683351/MCSS/Merch/first-drop/mcss-card_yz797m.png',
        displayImages: [
          { image: 'https://res.cloudinary.com/die52atcc/image/upload/dpr_auto,w_auto/v1605683351/MCSS/Merch/first-drop/mcss-card_yz797m.png' },
          { image: 'https://res.cloudinary.com/die52atcc/image/upload/dpr_auto,w_auto/v1605468388/MCSS/Merch/first-drop/item-page/card-back_f2ciq0.jpg' },
          { image: 'https://res.cloudinary.com/die52atcc/image/upload/dpr_auto,w_auto/v1605468257/MCSS/Merch/first-drop/item-page/Screen_Shot_2020-11-15_at_2.23.20_PM_qnbjrt.png' },
        ],
        description: 'Get 10% off orders from 30+ restaurants across Montreal! \n\nAn activation code will be sent to your email.',
        price: 5,
        size: ['E-CARD'],
        sizeSku: {
          'E-CARD': 'price_1HXDz9KCEqBnqoVgoqEewCco',
        },
        path: 'membership-card',
        dbName: 'membership-card',
      },
    ],

    StoreCart: [],
  },
  getters: {
    products: state => state.products,
    StoreCart: state => state.StoreCart,
  },
  mutations: {
    ADD_Item(state, item) {
      // eslint-disable-next-line max-len
      const record = state.StoreCart.find(product => product.itemName === item.itemName && product.itemSize === item.itemSize);
      if (!record) {
        state.StoreCart.push({
          itemName: item.itemName,
          itemImage: item.itemImage,
          itemSize: item.itemSize,
          itemPrice: item.itemPrice,
          itemSku: item.itemSku,
          itemDbName: item.itemDbName,
          quantity: 1,
        });
      } else {
        record.quantity += 1;
      }
    },

    REMOVE_Item(state, index) {
      state.StoreCart.splice(index, 1);
    },
    RESET_Cart(state) {
      state.StoreCart = [];
    },
  },
  actions: {
    addItem(context, item) {
      context.commit('ADD_Item', item);
    },

    removeItem(context, index) {
      context.commit('REMOVE_Item', index);
    },
    resetCart(context) {
      context.commit('RESET_Cart');
    },
  },
  modules: {},
  plugins: [createPersistedState()],
});
