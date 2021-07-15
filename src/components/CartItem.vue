<template>
  <tr>
    <th scope="row">
      <div class="p-2">
        <img :src="image" :alt="name" width="70" class="img-fluid rounded shadow-sm">
        <div class="ml-3 d-inline-block align-middle">
          <h5 class="mb-0 d-inline-block table-content font-weight-bold">{{ name }}</h5>
        </div>
      </div>
    </th>
      <td class="align-middle text-center">
        <strong class="table-content">$ {{ price }}</strong>
      </td>
      <td class="align-middle text-center">
        <strong class="table-content">{{ size }}</strong>
      </td>
      <td class="align-middle text-center">
        <strong class="table-content">{{ quantity }}</strong>
      </td>
      <td class="align-middle text-center">
        <button @click="removeItem(index)" class="remove-btn"><i class="fa fa-trash"></i></button>
      </td>
  </tr>
</template>

<script>
export default {
  name: 'cart-item',
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

.table-content {
  font-size: 15px;
}

.remove-btn {
  border: none;
  font-size: 15px;
}
</style>
