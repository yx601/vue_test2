import Vue from 'vue'
import Mytest from '@/components/mytest'

describe('mytest.vue', () => {
  it('$mount()', () => {
    const msg = 'helloworld'
    const HtmlContainer = Vue.extend(Mytest)
    const vm = new HtmlContainer({propsData: { msg: msg }}).$mount() // 单元测试，使用propsData进行传值
    console.log(vm.$el)
    expect(vm.$el.querySelector('span').textContent).to.be.equal(msg)
  })
})
