<template>
  <tr>
    <th scope="row">
      <div class="image-product">
        <img :src="image" :alt="name" width="70" class="img-fluid rounded shadow-sm">
      </div>
    </th>
    <td class="align-middle text-center">
      <div class="ml-3 d-inline-block align-middle">
        <h5 class="mb-0 d-inline-block table-content font-weight-bold">{{ name }}</h5>
        <br />
        <span class="table-content">Size: {{ size }}</span>
        <br />
        <span class="table-content">Quantity: {{ quantity }}</span>
      </div>
    </td>
    <td class="text-center price-column">
      <button @click="removeItem(index)" class="remove-btn">&times;</button>
      <strong class="table-content">$ {{ price }}</strong>
    </td>
  </tr>
</template>

<script>
export default {
  name: 'cart-item-mobile',
  props: ['name', 'image', 'price', 'size', 'quantity', 'index'],
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
        width: 30%;
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

.image-product {
  max-width: 140px;
}
.image-product img {
  width: 100%;
}

.table-content {
  font-size: 15px;
}

.remove-btn {
  border: none;
  font-size: 30px;
  background: none;
}

.price-column {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 150px;
}
</style>
