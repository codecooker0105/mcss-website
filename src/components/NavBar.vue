<template>
  <div>
    <div class="navbar">
      <b-navbar toggleable="lg" variant="faded">
        <b-navbar-brand @click="gotoHome">
          <img
            src="https://res.cloudinary.com/die52atcc/image/upload/q_auto,f_auto/v1603139753/MCSS/redlogo_jpk8nl.png"
            alt="redlogo"
            class="navbar-logo"
          />
        </b-navbar-brand>
        <b-navbar-brand
          class="shopping-cart-icon"
          @click="gotoCart"
          v-bind:class="{ active: routeName == '/shopping-bag'}"
        >
          <i class="fa fa-shopping-cart"></i> ({{ cartCount }})
        </b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto navbar-links">
            <b-nav-item
              class="nav-element link-with-border"
              @click="gotoAnnouncements"
              v-bind:class="{ active: routeName == '/announcements'}"
            >
              Announcements
            </b-nav-item>
            <b-nav-item class="nav-element link-with-border"
              @click="gotoEvents"
              v-bind:class="{ active: routeName == '/events'}"
            >
              Events
            </b-nav-item>

            <b-nav-item class="nav-element link-with-border"
              @click="gotoAbout"
              v-bind:class="{ active: routeName == '/about'}"
            >
              About Us
            </b-nav-item>
            <b-nav-item
              class="nav-element link-with-border"
              @click="gotoSponsors"
              v-bind:class="{ active: routeName == '/sponsors'}"
            >
              Sponsors
            </b-nav-item>

            <b-nav-item
              class="nav-element link-with-border"
              @click="gotoContact"
              v-bind:class="{ active: routeName == '/contact'}"
            >
              Contact
            </b-nav-item>
            <b-nav-item
              class="nav-element link-with-border"
              @click="gotoShop"
              v-bind:class="{ active: routeName == '/shop'}"
            >
              Shop
            </b-nav-item>
            <b-nav-item
              class="nav-element cart"
              @click="gotoCart"
              v-bind:class="{ active: routeName == '/shopping-bag'}"
            >
              <i class="fa fa-shopping-cart"></i> ({{ cartCount }})
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
  </div>
</template>

<script>

export default {
  name: 'mainPage',
  data() {
    return {
      currentPos: 0,
      targetPos: 0,
      transitionName: '',
      loading: false,
    };
  },
  methods: {
    checkout() {
      this.$refs.checkoutRef.redirectToCheckout();
    },
    gotoHome() {
      this.$router.push('/');
    },
    gotoAnnouncements() {
      if (this.$route.path !== '/announcements') {
        this.$router.push('/announcements');
      }
    },
    gotoEvents() {
      if (this.$route.path !== '/events') {
        this.$router.push('/events');
      }
    },
    gotoAbout() {
      if (this.$route.path !== '/about') {
        this.$router.push('/about');
      }
    },
    gotoSponsors() {
      if (this.$route.path !== '/sponsors') {
        this.$router.push('/sponsors');
      }
    },
    gotoContact() {
      if (this.$route.path !== '/contact') {
        this.$router.push('/contact');
      }
    },
    gotoShop() {
      if (this.$route.path !== '/shop') {
        this.$router.push('/shop');
      }
    },
    gotoCart() {
      if (this.$route.path !== '/shopping-bag') {
        this.$router.push('/shopping-bag');
      }
    },
  },
  computed: {
    routeName() {
      return this.$route.path;
    },
    getTransition() {
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.transitionName = this.currentPos < this.targetPos ? 'slide-right' : 'slide-left';
      return this.transitionName;
    },
    StoreCart() {
      return this.$store.getters.StoreCart;
    },
    cartCount() {
      return this.$store.getters.StoreCart.reduce((total, product) => total + product.quantity, 0);
    },
  },
};
</script>

<style lang="scss">
@media screen and (max-width: 991px) {
  .checkout-button-redirect {
    margin-top: 5px;
  }

  .nav-element.cart {
    display: none;
  }
  .shopping-cart-icon {
    position: absolute;
    right: 50px;
    top: 15px;
  }
  .shopping-cart-icon i {
    font-size: 25px;
  }
  .nav-link {
    font-size: 25px !important;
  }
  .link-with-border {
    border-top: 1px solid rgba(0, 0, 0, 0.1);
  }
}
@media screen and (min-width: 992px) {
  .shopping-cart-icon {
    display: none;
  }
}
.checkout-button-redirect {
  font-family: IKEABold;
  width: 25rem;
  height: 4rem;
  background: #be0819;
  color: white;
  border: none;
  border-radius: 2rem;
  outline: none;
  font-size: 2rem;
  letter-spacing: 0.1rem;
  transition: all 0.3s ease-out;
}

.shopping-cart-icon {
  color: rgba(0, 0, 0, 0.5);
  font-size: 2rem;
  padding-left: 5px !important;
  padding-right: 5px !important;
  font-family: IKEABold;
}

.navbar-toggler-icon {
  font-size: 20px !important;
}

.shopping-cart-icon.active {
  color: black !important;
}

.checkout-button-redirect:hover {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
    0 6px 20px 0 rgba(0, 0, 0, 0.19);
  cursor: pointer;
}
.navbar {
  width: 100vw;
  border-bottom: 3px solid #be0819;
  margin-bottom: 30px;
  .navbar-collapse {
    text-align: left;
  }
  .navbar-expand-lg {
    border: none;
    margin-bottom: 0;
  }
  .navbar-logo {
    margin-left: 5px;
    width: 12rem;
  }
  .navbar-logo:hover {
    transform: scale(1.2);
    cursor: pointer;
  }
  .navbar-links {
    color: rgba(0, 0, 0, 0.5);
  }
  .navbar-light .navbar-nav .nav-link {
    color: rgba(0, 0, 0, 0.5);
    font-size: 2rem;
    padding-left: 20px !important;
    padding-right: 20px !important;
    font-family: IKEABold;
  }
  .nav-link:hover {
    opacity: 0.8;
  }

  .navbar-links .active a{
    color: black !important;
  }
}
</style>
