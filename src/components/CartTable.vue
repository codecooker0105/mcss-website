<template>
  <div class="table-container">
    <div class="table-responsive">
      <table class="table">
        <thead>
          <tr>
            <th scope="col" class="border-0 bg-light">
              <div class="p-2 px-3 text-uppercase table-header">Product</div>
            </th>
            <th scope="col" class="border-0 bg-light text-center">
              <div class="py-2 text-uppercase table-header">Price</div>
            </th>
            <th scope="col" class="border-0 bg-light text-center">
              <div class="py-2 text-uppercase table-header">Size</div>
            </th>
            <th scope="col" class="border-0 bg-light text-center">
              <div class="py-2 text-uppercase table-header">Quantity</div>
            </th>
            <th scope="col" class="border-0 bg-light text-center">
              <div class="py-2 text-uppercase table-header">Remove</div>
            </th>
          </tr>
        </thead>
        <tbody>
          <cart-item
            v-for="(item, index) in StoreCart" :key="index"
            :name="item.itemName"
            :image="item.itemImage"
            :price="item.itemPrice"
            :size="item.itemSize"
            :quantity="item.quantity"
            :index="index"
          />
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import CartItem from './CartItem.vue';

export default {
  name: 'CartTable',
  components: {
    CartItem,
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
  margin: 0 10%;
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
</style>
