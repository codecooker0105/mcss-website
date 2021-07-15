<template lang="html">
  <div class="flex-container">
    <div style="width: 408px;">
      <vueper-slides class="no-shadow"
        ref="vueperslides1"
        :autoplay="false"
        fade
        :bullets="false"
        @slide="$refs.vueperslides2.goToSlide($event.currentSlide.index, { emit: false })"
        :slide-ratio="408 / 272"
        :arrows="true">
        <vueper-slide
          v-for="(slide, i) in product.displayImages"
          :key="i"
          :image="slide.image"
          @click.native="print(slide.image)">
        </vueper-slide>
      </vueper-slides>
      <br />
      <vueper-slides
        class="no-shadow thumbnails"
        ref="vueperslides2"
        @slide="$refs.vueperslides1.goToSlide($event.currentSlide.index, { emit: false })"
        :visible-slides="product.displayImages.length"
        fixed-height="105px"
        :slide-ratio="105 / 70"
        :bullets="false"
        :touchable="false"
        :gap="2.5"
        :arrows="false">
        <vueper-slide
          v-for="(slide, i) in product.displayImages"
          :key="i"
          :image="slide.image"
          @click.native="$refs.vueperslides2.goToSlide(i)">
        </vueper-slide>
      </vueper-slides>
    </div>
    <size-chart-modal
      :item="product.path.split('-').slice(-1)[0]"
      v-show="isSizeModalVisible"
      @close="closeSizeModal"
    />
    <return-policy-modal
      :item="product.path.split('-').slice(-1)[0]"
      v-show="isReturnModalVisible"
      @close="closeReturnModal"
    />
    <div class="desktop-only">
      <ImageZoom
        :image="imageURL"
        v-show="isImageZoom"
        @close="closeImageZoom"
      />
    </div>
    <div class="item-desc">
      <h1 class="product-name">{{ product.name }}</h1>
      <h2 class="product-detail">{{ product.description }}</h2>
      <h1 class="product-price">${{ product.price }} CAD</h1>
      <div class="flex-sizes">
        <span v-for="size in product.size" :key="size">
          <input
            :id="size"
            v-model="selectedSize"
            name="Radios" type="radio"
            :value="size"
            :disabled="inventory[size] <= 0"
          >
          <label :for="size">{{ size }}</label>
        </span>
      </div>
      <button
        type="button"
        class="size-guide"
        @click="showSizeModal"
        v-if="product.path.split('-').slice(-1)[0] != 'card'"
      >
        <i class='fas fa-ruler-horizontal' style='font-size:15px'></i>
        Sizing Guide
      </button>
      <div class="buttons">
        <button
          class="add_cart_btn"
          @click="addToCart(product.name,
          product.image, product.price, product.sizeSku, product.dbName)"
          :disabled="!selectedSize"
        >
          ADD TO BAG
        </button>
        <button
          class="redirect_to_cart_btn"
          @click="redirectToCart()"
          v-if="itemAdded"
        >
          VIEW CART
        </button>
      </div>
      <div class="free-shipping">
        <i class="fas fa-shipping-fast"></i>
        Free Shipping on Orders over $30
      </div>
      <button
        type="button"
        class="returns-guide"
        @click="showReturnModal"
      >
        <i class="fas fa-shield-alt"></i>
        Returns &amp; Exchange
      </button>
    </div>
    <hr class="hr2">
  </div>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides';
import 'vueperslides/dist/vueperslides.css';
import axios from 'axios';
import sizeChartModal from '../components/sizeChartModal.vue';
import ReturnPolicyModal from '../components/ReturnPolicyModal.vue';
import ImageZoom from '../components/ImageZoom.vue';

export default {
  props: ['itemPath'],
  components: {
    VueperSlides,
    VueperSlide,
    sizeChartModal,
    ReturnPolicyModal,
    ImageZoom,
  },
  data() {
    return {
      product: {},
      selectedSize: '',
      itemAdded: false,
      inventory: {},
      isSizeModalVisible: false,
      isReturnModalVisible: false,
      isImageZoom: false,
      imageURL: '',
    };
  },
  methods: {
    addToCart(name, image, price, sizeSku, dbName) {
      const item = {
        itemName: name,
        itemImage: image,
        itemPrice: price,
        itemSize: this.selectedSize,
        itemSku: sizeSku[this.selectedSize],
        itemDbName: dbName,
      };
      this.$store.dispatch('addItem', item);
      this.itemAdded = true;
    },
    redirectToCart() {
      this.$router.push('/shopping-bag');
    },
    showSizeModal() {
      this.isSizeModalVisible = true;
    },
    closeSizeModal() {
      this.isSizeModalVisible = false;
    },
    showReturnModal() {
      this.isReturnModalVisible = true;
    },
    closeReturnModal() {
      this.isReturnModalVisible = false;
    },
    closeImageZoom() {
      this.isImageZoom = false;
    },
    print(image) {
      this.imageURL = image;
      this.isImageZoom = true;
    },
  },
  created() {
    // eslint-disable-next-line arrow-body-style
    const foundProduct = this.$store.getters.products.filter((product) => {
      return product.path === this.$route.params.itemPath;
    });
    if (foundProduct.length > 0) {
      // eslint-disable-next-line prefer-destructuring
      this.product = foundProduct[0];
    } else {
      this.$router.push('/404');
    }
    axios
      .get(`https://mcss-website-backend.herokuapp.com/inventory/${this.product.dbName}`)
      .then((response) => {
        this.inventory = response.data;
      })
      .catch(error => console.log(error));
  },
};
</script>

<style lang="scss">
.item-desc h1 {
  font-size: 30px;
  font-family: IKEABold;
  color: #be0819;
}
.size-guide {
  font-size: 15px;
  font-family: IKEABold;
  border: none;
  background: none;
  margin-bottom: 20px;
}
h2 {
  white-space: pre-wrap;
  word-wrap: break-word;
  font-family: Proxima;
}
.flex-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
}
.flex-sizes {
  display: flex;
  justify-content: space-between;
}
.thumbnails {
  margin: auto;
  max-width: 300px;
}

.thumbnails .vueperslide {
  box-sizing: border-box;
  border: 1px solid #fff;
  transition: 0.3s ease-in-out;
  opacity: 0.7;
  cursor: pointer;
}

.thumbnails .vueperslide--active {
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.3);
  opacity: 1;
  border-color: #000;
}

input[type="radio"],
input[type="checkbox"] {
    /* hide the inputs */
    display: none;
}

input[type="radio"] + label:hover,
input[type="checkbox"] + label:hover {
    /* hide the inputs */
    border: 1px solid black;
}

input[type="radio"]:disabled + label,
input[type="checkbox"]:disabled + label {
  border: none;
  background: #E9E9E9;
  color: #C7C7C7;
  cursor: not-allowed;
}

/* style your lables/button */
input[type="radio"] + label,
input[type="checkbox"] + label {
  /* keep pointer so that you get the little hand showing when you are on a button */
  cursor: pointer;
  /* the following are the styles */
  padding: 10px 15px;
  border: 1px solid #ccc;
  background: white;
  color: black;
  border-radius: 3px;
  font-family: IKEABold;
  text-shadow: 1px 1px 0 rgba(0,0,0,0);
  font-size: 1.5rem;
  min-width: 50px;
  text-align: center;
}

input[type="radio"]:checked + label,
input[type="checkbox"]:checked + label{
    /* style for the checked/selected state */
    background: #be0819;
    border-color: #be0819;
    color: white;
}

.add_cart_btn {
  width: 100%;
  height: 40px;
  background: #be0819;
  font-family: IKEABold;
  border: none;
  color: white;
  border-radius: 5px;
  font-size: 1.5rem;
  margin-bottom: 10px;
}
.add_cart_btn:hover {
  cursor: pointer;
  opacity: 0.8;
}

.redirect_to_cart_btn {
  width: 100%;
  height: 40px;
  background: white;
  font-family: IKEABold;
  border: 3px solid black;
  color: black;
  border-radius: 5px;
  font-size: 1.5rem;
}
.redirect_to_cart_btn:hover {
  cursor: pointer;
  opacity: 0.8;
  background: black;
  font-family: IKEABold;
  color: white;
  transition: 0.5s;
}

.add_cart_btn:disabled {
  border: none;
  background: #E9E9E9;
  color: #C7C7C7;
  cursor: not-allowed;
}

.vueperslides__arrow {
  color: black;
  background: rgba(255,255,255,0.5)
}

.vueperslide {
  background-size: 100% !important;
  background-repeat: no-repeat !important;
}

.product-name, .product-detail, .product-price, .buttons {
  margin-bottom: 20px;
}

.free-shipping, .returns-guide {
  font-size: 2rem;
  font-family: Proxima;
}

.fa-shipping-fast, .fa-shield-alt {
  font-size: 2rem;
}

.flex-sizes {
  margin-bottom: 10px;
}

.flex-container .hr2 {
  margin-top: 50px;
  margin-bottom: 50px;
  width: 80%;
  border: 0;
  border-top: 1px solid rgba(0,0,0,.1);
}

@media screen and (min-width: 840px) {
  .item-desc {
    margin-top: 7%;
    margin-left: 10%;
    width: 270px;
  }
  .returns-guide {
    border: none;
    background: none;
    padding: 0;
  }

  .returns-guide:hover {
    text-decoration: underline;
  }
  .size-guide:hover {
    text-decoration: underline;
  }
}
@media screen and (max-width: 840px) {
  .thumbnails {
    display: none;
  }

  .item-desc {
    margin-top: 5%;
    width: 80%;
  }
  .returns-guide {
    border: none;
    background: none;
    padding: 0;
    text-decoration: underline;
  }
  .size-guide {
    text-decoration: underline;
  }
  .desktop-only {
    display: none;
  }
}
</style>
