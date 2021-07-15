<template>
  <b-col sm="12" md="6" lg="4" xl="3" class="avatar">
    <div class="card" @click="goToItem(path)">
      <img :src="image" :alt="name" class="card-img-top">
      <div class="card-body">
        <h4 class="card-title">{{ name }}</h4>
        <div class="card-text">${{ price }}</div>
      </div>
    </div>
  </b-col>
</template>

<script>
export default {
  name: 'product',
  props: ['id', 'name', 'image', 'price', 'path'],
  methods: {
    goToItem(itemPath) {
      this.$router.push(`/shop/${itemPath}`);
    },
  },
};
</script>

<style scoped>
.col-md-4 {
  margin-bottom: 5%;
}

.column {
  width: 409px;
}
.card {
  border: none;
}

.card:hover {
  cursor:pointer;
}

.card-body {
  text-align: center;
}

.card-title {
  font-family: IKEABold;
  font-size: 20px;
}
.card-text {
  font-family: IKEABold;
  font-size: 15px;
}
img {
  max-height: 306px;
  height: auto;
  width: auto;
  max-width: 75vw;
  margin-right: auto;
  margin-left: auto;
  display: block;
}
@media screen and (min-width: 1000px) {
  img:hover {
    opacity: 0.7;
  }
}
</style>
