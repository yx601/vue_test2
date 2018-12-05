<template>
  <div>
    <span>{{ msg }}</span>
    <div class="swiper-container"  ref="slide1">
      <div class="swiper-wrapper" >
        <router-link class="swiper-slide" :key='slide.id' v-for="slide in slides" tag="div" :to="{name:'BookDetail',params:{id:slide.id}}">
          <img :src="slide.img_url"/>
        </router-link>
      </div>
      <div class="swiper-pagination" ref="pagination"></div>
    </div>
  </div>
</template>

<script>
import Swiper from '../../static/swiper/js/swiper.min.js'
/* eslint-disable no-new */
export default {
  name: 'Mytest',
  props: ['msg'],
  mounted () {
    // this.msg = this.$route.params.mid
    new Swiper(this.$refs.slide1, {
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
        {id: 1, img_url: require('@/assets/mypics/handlebars.png')},
        {id: 2, img_url: require('@/assets/mypics/pug.png')},
        {id: 3, img_url: require('@/assets/mypics/stylus.png')}
      ]
    }
  }
}
</script>
<style scoped>
@import '../../static/swiper/css/swiper.min.css';
</style>
