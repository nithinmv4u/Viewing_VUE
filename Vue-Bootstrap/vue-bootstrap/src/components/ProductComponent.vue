<template>
    <div class="product-display">
        <div class="product-container">
          <div class="product-image">
            <img :src="image" alt="green socks">
          </div>
          <div class="product-info">
            <h1>{{ product }}</h1>
          </div>
        </div>
      </div>
</template>

<script>
export default {
    name: 'ProductComponent',
    data () {
        return {
            product: 'product info',
            image: '@/assets/images/socks_green.jpg',
        }
    }
}
</script>