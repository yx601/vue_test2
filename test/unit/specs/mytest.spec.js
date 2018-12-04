import Vue from 'vue'
import mytest from '@/components/mytest'

describe('mytest.vue', () => {
  it('array', () => {
    var targetArr = []
    beforeEach(() => {
      targetArr.push(1)
    })
    afterEach(() => {
      targetArr = []
    })
    it('应该有一个整数', () => {
      expect(targetArr[0]).to.eqls(1)
    })
    it('可以有多个期许值检测', () => {
      expect(targetArr[0]).to.eqls(1)
      expect(true).to.eqls(true)
    })
  })
})
