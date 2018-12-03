<template>
  <div class="swiper-container"  ref="slide1">
    <div class="swiper-wrapper" :key='slide.id' v-for="slide in slides">
      <router-link class="swiper-slide" tag="div" :to="{name:'BookDetail',params:{id:slide.id}}">
        <img :src="slide.img_url"/>
      </router-link>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
export default {
  name: 'mytest',
  mounted () {
    Swiper(this.$refs.slide1, {
      pagination: this.$refs.pagination,
      paginationClickable: true,
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: 2500,
      autoplayDisableOnInteraction: false
    })
  },
  data () {
    return {
      slides: [
        {id: 1, img_url: '@assets/mypics/handlebars.png'},
        {id: 2, img_url: '@assets/mypics/pug.png'},
        {id: 3, img_url: '@assets/mypics/stylus.png'}
      ]
    }
  }
}
</script>

<style scoped>

</style>
