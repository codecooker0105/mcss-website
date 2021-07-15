<template>
<!-- Shopping cart table -->
  <div v-if="cartCount > 0">
    <cart-table-mobile class="cart-table-mobile" />
    <cart-table class="cart-table" />
    <div class="prices-flexbox">
      <h3>
        Total:
      </h3>
      <h3>
        ${{ cartTotalPrice().toFixed(2) }} CAD
      </h3>
    </div>
    <div class="prices-flexbox">
      <h3>
        Shipping:
      </h3>
      <h3 v-if="shippingPrice()">
        ${{ shippingPrice().toFixed(2) }} CAD
      </h3>
      <h3 v-else>
        FREE
      </h3>
    </div>
     <div class="prices-flexbox">
      <h3 class="font-weight-bolder">
        Order Total:
      </h3>
      <h3 class="font-weight-bolder">
        ${{ (shippingPrice() + cartTotalPrice()).toFixed(2) }} CAD
      </h3>
    </div>
    <div class="checkout-btn" v-if="isOnlyMembershipCard()">
      <stripe-checkout
        ref="checkoutRef"
        :pk="publishableKey"
        :lineItems="checkoutItems()"
        :mode="mode"
        :successUrl="successUrl"
        :cancelUrl="cancelUrl"
        :clientReferenceId="checkoutMetadata()"
      >
        <template slot="checkout-button">
          <button
            class="checkout-button-redirect"
            @click="checkout"
          >
            CHECKOUT
          </button>
        </template>
      </stripe-checkout>
    </div>
    <div class="checkout-btn" v-else>
      <stripe-checkout
        ref="checkoutRef"
        :pk="publishableKey"
        :lineItems="checkoutItems()"
        :mode="mode"
        :successUrl="successUrl"
        :cancelUrl="cancelUrl"
        :shippingAddressCollection="{allowedCountries: ['CA']}"
        :clientReferenceId="checkoutMetadata()"
      >
        <template slot="checkout-button">
          <button
            class="checkout-button-redirect"
            @click="checkout"
          >
            CHECKOUT
          </button>
        </template>
      </stripe-checkout>
    </div>
    <hr class="hr2">
    <div class="referral">
      <h1>Been referred by an exec?</h1>
      <model-select :options="options"
        v-model="referral"
        placeholder="Exec Name">
      </model-select>
    </div>
    <hr class="hr2">
  </div>
  <div class="empty-cart" v-else>
    <h1 style="color: black; margin-bottom: 30px;">
      Your shopping bag is empty!
    </h1>
    <button
      class="checkout-button-redirect"
      @click="redirectToShop"
    >
      SHOP NOW
    </button>
    <hr class="hr2">
  </div>
  <!-- End -->
</template>

<script>
import { StripeCheckout } from 'vue-stripe-checkout';
import { ModelSelect } from 'vue-search-select';
import CartTable from '../components/CartTable.vue';
import CartTableMobile from '../components/CartTableMobile.vue';
import 'vue-search-select/dist/VueSearchSelect.css';

export default {
  name: 'Shopping',
  components: {
    CartTable,
    CartTableMobile,
    StripeCheckout,
    ModelSelect,
  },
  data() {
    return {
      options: [
        { value: 'amy', text: 'Amy Li' },
        { value: 'annie', text: 'Annie Sun' },
        { value: 'dan', text: 'Danielle Zhu' },
        { value: 'gltor', text: 'Gloria Ma' },
        { value: 'mike', text: 'Mike He' },
        { value: 'chris', text: 'Chris Gao' },
        { value: 'dim', text: 'Dimitri Yang' },
        { value: 'nancy', text: 'Nancy Xiang' },
        { value: 'xiran', text: 'Xi Ran Chen' },
        { value: 'mel', text: 'Melody Zhou' },
        { value: 'aiyu', text: 'Aiyu Wang' },
        { value: 'huub', text: 'Huub de Jong' },
        { value: 'kar', text: 'Karist Ng' },
        { value: 'jer', text: 'Jeremy Leung' },
        { value: 'sher', text: 'Sherry Chen' },
        { value: 'yr', text: 'Young Rock Han' },
        { value: 'jul', text: 'Julian Qu' },
        { value: 'yue', text: 'Yuecheng Huang' },
        { value: 'jia', text: 'Jia Liu' },
        { value: 'jess', text: 'Jessica Yip' },
        { value: 'xin', text: 'Xin Rui Li' },
        { value: 'ivy', text: 'Ivy Chen' },
        { value: 'vick', text: 'Vicky Dong' },
        { value: 'dian', text: 'Dian Dian' },
        { value: 'hatt', text: 'Hattie Chen' },
        { value: 'andy', text: 'Andy Wang' },
        { value: 'jenn', text: 'Jennifer Chen' },
        { value: 'wan', text: 'Wan Er Jin' },
        { value: 'anita', text: 'Anita Zheng' },
        { value: 'kev', text: 'Kevin Say' },
        { value: 'yuh', text: 'Yuheng Liu' },
        { value: 'emi', text: 'Emily Zhang' },
        { value: 'owen', text: 'Owen Bai' },
      ],
      referral: '',
      mode: 'payment',
      publishableKey: process.env.VUE_APP_PUBLISHABLE_KEY,
      successUrl: process.env.VUE_APP_SUCCESS_URL,
      cancelUrl: process.env.VUE_APP_CANCEL_URL,
    };
  },
  computed: {
    StoreCart() {
      return this.$store.getters.StoreCart;
    },
    cartCount() {
      return this.StoreCart.length;
    },
  },
  methods: {
    removeItem(index) {
      this.$store.dispatch('removeItem', index);
    },

    shippingPrice() {
      // eslint-disable-next-line arrow-body-style
      if (this.cartTotalPrice() > 30 || this.isOnlyMembershipCard()) {
        return 0;
      }
      return 5;
    },
    isOnlyMembershipCard() {
      // eslint-disable-next-line arrow-body-style
      return this.$store.getters.StoreCart.reduce((total, product) => {
        return total && (product.itemName === 'MCSS Membership Card');
      }, true);
    },
    cartTotalPrice() {
      // eslint-disable-next-line arrow-body-style
      return this.$store.getters.StoreCart.reduce((total, product) => {
        return total + (product.itemPrice * product.quantity);
      }, 0);
    },
    checkoutItems() {
      const items = [];
      this.$store.getters.StoreCart.forEach((product) => {
        items.push({ price: product.itemSku, quantity: product.quantity });
      });

      if (this.shippingPrice()) {
        items.push({ price: 'price_1HnstHKCEqBnqoVgzqnw6rev', quantity: 1 });
      }
      return items;
    },
    checkoutMetadata() {
      const items = [];
      if (this.referral && !this.isOnlyMembershipCard()) {
        items.push(this.referral);
      } else {
        items.push('n/a');
      }
      this.$store.getters.StoreCart.forEach((product) => {
        items.push(`${product.itemDbName}_${product.itemSize}:${product.quantity}`);
      });
      const result = items.join();
      return result;
    },
    checkout() {
      this.$refs.checkoutRef.redirectToCheckout();
    },
    redirectToShop() {
      this.$router.push('/shop');
    },
  },
};
</script>

<style lang="scss" scoped>
#shopping-cart {
  width: 100%;
  max-height: 400px;
  border: 1px solid rgba(#000, 0.12);
  .md-layout {
    margin-top: 2%;
    width: 70%;
    background-color: rgb(255, 255, 255);
    margin: auto;
    z-index: 9999999;
    padding: 20px;
    border-bottom: 1px solid rgb(126, 126, 126);
    .md-layout-item {
      margin-top: 2%;
      img {
        width: 25%;
      }
    }
  }
  .md-span {
    text-align: right;
    width: 100%;
  }

  .shoppingBody {
    display: none;
    position: fixed;
    z-index: 9999999;
    padding-top: 25px;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(0, 0, 0);
    background-color: rgba(0, 0, 0, 0.4);
  }
}
.table-container {
  border: 3px solid black;
  border-radius: 3px;
  margin-bottom: 20px;
}

.table-header {
  font-size: 15px;
}

.table-responsive {
  z-index: -1;
}
h1 {
  color: black;
  font-family: IKEABold;
  font-size: 30px;
}
.total-prices {
  width: 15%;
  margin-top: 5%;
  text-align: justify;
  margin-right: auto;
  margin-left: auto;
  display: block;
}

.prices-flexbox {
  display: flex;
  justify-content: space-between;
  width: 25%;
  margin-right: auto;
  margin-left: auto;
}

.checkout-button-redirect {
  margin-top: 20px;
}
.checkout-button-redirect {
  font-family: IKEABold;
  height: 4rem;
  background: #be0819;
  color: white;
  border: none;
  border-radius: 5px;
  outline: none;
  font-size: 1.5rem;
  transition: all 0.3s ease-out;
  margin-right: auto;
  margin-left: auto;
  display: block;
}
.checkout-button-redirect:hover {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
    0 6px 20px 0 rgba(0, 0, 0, 0.19);
  cursor: pointer;
  opacity: 0.8;
}

.empty-cart {
  text-align: center;
}

@media screen and (min-width: 840px) {
  .prices-flexbox {
    display: flex;
    justify-content: space-between;
    width: 25%;
    margin-right: auto;
    margin-left: auto;
  }
  .cart-table-mobile {
    display: none;
  }
  .checkout-button-redirect {
    width: 25%;
  }
  .referral {
    width: 40%;
    margin-right: auto;
    margin-left: auto;
    display: block;
    margin-top: 40px;
    text-align: center;
  }
  .hr2 {
    margin-top: 80px;
    margin-bottom: 80px;
    width: 80%;
    border: 0;
    border-top: 1px solid rgba(0,0,0,.1);
  }
}
@media screen and (max-width: 840px) {
  .prices-flexbox {
    display: flex;
    justify-content: space-between;
    width: 80%;
    margin-right: auto;
    margin-left: auto;
  }
  .cart-table {
    display: none;
  }
  .checkout-button-redirect {
    width: 80%;
  }
  .referral {
    width: 80%;
    margin-right: auto;
    margin-left: auto;
    display: block;
    margin-top: 40px;
    text-align: center;
  }
  .hr2 {
    margin-top: 40px;
    margin-bottom: 40px;
    width: 80%;
    border: 0;
    border-top: 1px solid rgba(0,0,0,.1);
  }
}

</style>
